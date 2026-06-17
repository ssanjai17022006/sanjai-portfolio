# Sanjai S — Portfolio

A single-page, dark-mode portfolio for Sanjai S (Biomedical Engineering student / AI-driven healthcare technology). Built with React, Tailwind CSS, and Framer Motion.

## Design concept

The site borrows its visual language from medical monitoring equipment rather than a generic dark-tech template:

- **Signature element** — a continuously scrolling ECG/vitals trace (`VitalTrace.jsx`) appears in the boot loader, the hero backdrop, section dividers, and the footer, tying the whole page together.
- **Readouts, not stat cards** — the hero's metrics and skill levels render like digital readouts (monospace numerals, unit tags) instead of generic gradient stat blocks.
- **Type system** — Space Grotesk for display headings, Inter for body copy, and JetBrains Mono for anything that reads as data (stats, tags, nav labels, timestamps).
- **Color** — near-black navy base with blue/cyan signal colors plus a soft "vital green," echoing the palette of an actual patient monitor.

## Tech stack

- React 18 + Vite
- Tailwind CSS 3 (custom design tokens in `tailwind.config.js`)
- Framer Motion (scroll reveals, page transitions, layout animation)
- lucide-react (icons)

## Project structure

```
sanjai-portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   └── sanjai-photo.jpg       # Profile photo used in the hero and navbar
│   └── Sanjai_S_Resume.pdf       # Real one-page resume generated from the same content
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky nav with active-section indicator + avatar
│   │   ├── Hero.jsx               # Headline, typing role line, portrait, vitals stat readouts
│   │   ├── PortraitFrame.jsx      # Diagnostic-scan styled photo frame
│   │   ├── About.jsx
│   │   ├── CoreExpertise.jsx
│   │   ├── Education.jsx          # Timeline
│   │   ├── Skills.jsx             # Grouped, animated progress bars
│   │   ├── Experience.jsx         # Internship case-file cards
│   │   ├── Projects.jsx           # Filterable project grid
│   │   ├── Achievements.jsx
│   │   ├── ResearchInterests.jsx
│   │   ├── Contact.jsx            # Info cards + functional contact form
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Loader.jsx             # Boot animation
│   │   ├── ParticleBackground.jsx # Drifting "sensor data point" canvas background
│   │   ├── VitalTrace.jsx         # The signature scrolling ECG trace
│   │   └── SectionDivider.jsx
│   ├── data/
│   │   └── portfolioData.js       # All site content lives here — edit this file to update text
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   ├── useCountUp.js
│   │   └── useTypewriter.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Editing content

Almost everything text-based — bio, education, skills, internships, projects, achievements, contact details — lives in `src/data/portfolioData.js`. Update that one file and every section re-renders with the new content.

## Things to finish before going live

- **LinkedIn / GitHub / Portfolio URLs** in `src/data/portfolioData.js` (`profile.links`) are placeholders — swap in the real links.
- **Profile photo**: `public/images/sanjai-photo.jpg` is used in both the hero portrait frame and the navbar avatar. Replace that file (same name) to update the photo everywhere at once.
- **Contact form**: it currently opens the visitor's email client with a pre-filled message (no backend required). For inbox delivery without leaving the page, wire `handleSubmit` in `src/components/Contact.jsx` to a form service such as Formspree, Web3Forms, or EmailJS — each typically only needs a fetch/POST call.
- **Resume**: `public/Sanjai_S_Resume.pdf` was generated directly from the portfolio content. Replace it with an updated file (same filename) any time the resume changes — the download buttons in the navbar and hero already point to it.
- **Canonical URL / OG image**: `index.html` references `https://sanjais.dev/` and `/og-cover.png` as SEO placeholders — update the canonical URL once the site has a real domain, and add a real `og-cover.png` (1200×630) to `public/` for social link previews.

## Deployment

The build output in `dist/` after `npm run build` is static and can be deployed to Vercel, Netlify, GitHub Pages, or any static host.
