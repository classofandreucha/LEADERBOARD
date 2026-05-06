// ============================================================
// MOTION ONE — animations · Banana · Build Us With AI
// CDN ESM, no build step
// Si este archivo NO carga, la página se ve igual sin animaciones.
// ============================================================
import { animate, inView, scroll } from "https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm";

// Activar flag — recién aquí el CSS empieza a esconder data-reveal
document.documentElement.classList.add('motion-on');

// ----- Image fallback PNG → SVG (placeholders mientras user no suba) -----
document.querySelectorAll('img[data-fallback]').forEach((img) => {
  img.addEventListener('error', () => {
    if (img.src !== img.dataset.fallback) img.src = img.dataset.fallback;
  }, { once: true });
});

// ----- Reveals on scroll (run once) -----
document.querySelectorAll('[data-reveal]:not([data-parallax])').forEach((el) => {
  inView(el, () => {
    el.classList.add('is-revealed');
    return () => {};
  }, { margin: "0px 0px -10% 0px" });
});

// ----- Parallax scroll — cards/heads se mueven a distintas velocidades -----
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    const intensity = parseFloat(el.dataset.parallax) || -30;
    // Anima translateY desde +intensity hasta -intensity mientras el elemento atraviesa el viewport
    scroll(
      animate(el, { y: [intensity, -intensity] }, { easing: 'linear' }),
      { target: el, offset: ['start end', 'end start'] }
    );
  });
}

// ----- Hero stickers float gently -----
document.querySelectorAll('.hero__stickers .sticker').forEach((s, i) => {
  animate(s,
    { y: [0, -8, 0] },
    { duration: 3 + i * 0.4, repeat: Infinity, easing: "ease-in-out", delay: i * 0.2 }
  );
});
