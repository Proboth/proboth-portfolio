import Lenis from "@studio-freight/lenis";

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.1,           // smoothness
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,      // keep mobile native
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
}
