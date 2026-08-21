/* Shared behaviour: theme toggle, scroll reveal, hero badge veil.
   Loaded in <head> so the saved theme is applied before first paint. */

(() => {
  'use strict';

  const root = document.documentElement;
  const STORAGE_KEY = 'maceq-theme';

  // --- Apply the saved theme immediately, before anything renders. ---
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch {
    // Private browsing or blocked storage: fall back to the system theme.
  }

  const currentTheme = () =>
    root.dataset.theme ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    // --- Theme toggle ---
    const toggle = document.querySelector('.theme-toggle');

    if (toggle) {
      const label = () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        toggle.setAttribute('aria-label', `Switch to ${next} appearance`);
      };

      toggle.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // Not fatal — the theme still applies for this page view.
        }
        label();
      });

      label();
    }

    // --- Scroll reveal ---
    const targets = document.querySelectorAll('.reveal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
      );

      targets.forEach((el) => observer.observe(el));
    }
  });
})();
