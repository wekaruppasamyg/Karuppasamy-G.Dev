# Karuppasamy G — 3D Creator Portfolio

A single-page portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (scroll-driven animation, stacking cards, fade-ins)
- Lucide React (icon set, available for future use)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    FadeIn.tsx            // scroll-reveal wrapper (whileInView)
    Magnet.tsx             // mouse-following magnetic hover effect
    ContactButton.tsx      // gradient pill CTA
    LiveProjectButton.tsx  // ghost pill CTA
    AnimatedText.tsx       // character-by-character scroll reveal
    HeroSection.tsx
    MarqueeSection.tsx     // dual-row scroll-driven image marquee
    AboutSection.tsx
    ServicesSection.tsx
    ProjectsSection.tsx    // sticky stacking project cards
  App.tsx
  main.tsx
  index.css                // Tailwind + global resets + .hero-heading
index.html                 // page title + Kanit font import
tailwind.config.js
postcss.config.js
vite.config.ts
tsconfig.json
```

## Notes

- The page background (`#0C0C0C`) is set globally on `html`, `body`, `#root`, and the
  main wrapper `div` in `App.tsx`.
- `.hero-heading` (defined in `src/index.css`) supplies the gradient text treatment
  reused across the Hero, About, and Projects headings.
- All external image/gif URLs are wired in exactly as specified; swap them out for your
  own assets whenever you're ready.
