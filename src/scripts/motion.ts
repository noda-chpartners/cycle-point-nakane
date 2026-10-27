import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const loader = document.querySelector<HTMLElement>("[data-loader]");
const header = document.querySelector<HTMLElement>("[data-header]");
const menuButton = document.querySelector<HTMLButtonElement>("[data-menu]");
const drawer = document.querySelector<HTMLElement>("[data-drawer]");
const toTop = document.querySelector<HTMLElement>("[data-top]");

let lenis: Lenis | null = null;

function setupSmoothScroll() {
  if (reduce) return;

  lenis = new Lenis({
    duration: 1.05,
    anchors: { offset: -96 },
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

function setupHeader() {
  const onScroll = () => {
    const y = lenis ? lenis.scroll : window.scrollY;
    header?.classList.toggle("is-scrolled", y > 20);
    toTop?.classList.toggle("is-visible", y > 640);
  };

  if (lenis) lenis.on("scroll", onScroll);
  else window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setMenu(open: boolean) {
  if (!menuButton || !drawer || !header) return;

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  header.classList.toggle("is-open", open);
  drawer.classList.toggle("is-open", open);

  if (open) {
    drawer.removeAttribute("inert");
    lenis?.stop();
    if (!reduce) {
      gsap.fromTo(
        drawer.querySelectorAll("a"),
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.05, ease: "power3.out", overwrite: true },
      );
    }
  } else {
    drawer.setAttribute("inert", "");
    lenis?.start();
  }
}

function setupMenu() {
  if (!menuButton || !drawer) return;

  menuButton.addEventListener("click", () => {
    setMenu(!drawer.classList.contains("is-open"));
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

function setupMotion() {
  if (reduce) return;

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 32,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 86%",
        once: true,
      },
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
    gsap.from(group.querySelectorAll("[data-stagger-item]"), {
      y: 28,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: group,
        start: "top 82%",
        once: true,
      },
    });
  });

  const bar = document.querySelector<HTMLElement>("[data-progress]");
  if (bar) {
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.15,
      },
    });
  }

}

function hideLoader() {
  if (!loader) {
    ScrollTrigger.refresh();
    return;
  }

  if (reduce) {
    loader.remove();
    ScrollTrigger.refresh();
    return;
  }

  const bar = loader.querySelector("[data-loader-bar]");
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      loader.remove();
      ScrollTrigger.refresh();
    },
  });

  tl.from(".loader__card", { y: 16, autoAlpha: 0, duration: 0.7 })
    .from(".loader__label", { autoAlpha: 0, y: 8, duration: 0.4 }, "-=0.3")
    .fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 0.85, ease: "power2.inOut", transformOrigin: "left center" }, "-=0.15")
    .to(loader, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut", delay: 0.12 });
}

setupSmoothScroll();
setupHeader();
setupMenu();
setupMotion();
hideLoader();

window.addEventListener("load", () => ScrollTrigger.refresh());
