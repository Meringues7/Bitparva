# Bitprava — React site

A React + Vite rebuild of the Bitprava landing page.

## Getting started

```bash
npm install
npm run dev       # local dev server, live reload
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Pages

This is a real multi-page site using React Router:

| Route       | Page                                          |
|-------------|------------------------------------------------|
| `/`         | Home (hero, services teaser, why us, process)  |
| `/about`    | Story, team, values                            |
| `/services` | Full service breakdown with feature lists      |
| `/work`     | Portfolio / case studies (placeholder content) |
| `/contact`  | Contact form                                   |
| `*`         | 404 page                                       |

## Project structure

```
src/
  main.jsx              # React entry point, wraps App in BrowserRouter
  App.jsx                # route definitions
  index.css              # global styles: reset, tokens import, buttons, layout helpers
  data/
    content.js            # ALL page copy lives here (nav links, headings, body text).
                           # Edit text here without touching any component.
  api/
    contact.js             # placeholder API client for the contact form — see below
  hooks/
    useReveal.js           # small reusable hook for the scroll-reveal animation
  styles/
    variables.css          # design tokens (colors, spacing, radius) as CSS variables
  components/
    Layout.jsx              # wraps every page with Navbar + Footer
    Navbar.jsx / .css
    Hero.jsx / .css
    Services.jsx / .css       # homepage teaser (3 cards)
    WhyUs.jsx / .css
    Process.jsx / .css
    CtaBand.jsx / .css
    Footer.jsx / .css
  pages/
    Home.jsx
    About.jsx / .css
    ServicesPage.jsx / .css   # full services page
    Work.jsx / .css
    Contact.jsx / .css         # working form UI
    NotFound.jsx / .css
```

## Backend handoff (for whoever builds the backend)

The Contact page (`src/pages/Contact.jsx`) has a fully working form UI —
validation, loading state, success/error messages — but it currently has
**no real backend**. It calls `submitContactForm()` in `src/api/contact.js`,
which POSTs JSON to a placeholder endpoint defined in `src/data/content.js`
(`CONTACT_API_ENDPOINT`, currently `/api/contact`).

To wire up a real backend:
1. Build an endpoint that accepts `POST { name, email, message }`
2. Point `CONTACT_API_ENDPOINT` at it (or update `src/api/contact.js` if the
   response shape is different, e.g. a third-party form service)
3. Everything else — the form, loading state, success/error UI — already works

Each component pairs a `.jsx` file (structure/logic) with a same-name `.css`
file (its styles only) — so you always know exactly where to look to change
something.

## Notes for future edits

- **Change any text** → edit `src/data/content.js` only.
- **Change colors/spacing tokens** → edit `src/styles/variables.css`.
- **Change one section's layout** → edit that component's own `.css` file.
- Icons are inline SVG (no icon library dependency) — find them at the top of
  `Services.jsx` and `Process.jsx`.
- `useReveal` is the only custom hook; it's what makes each section fade in
  as you scroll, and it automatically turns itself off if the visitor has
  "reduce motion" enabled in their OS settings.

## Deploying

`npm run build` outputs a static `dist/` folder that can be deployed to any
static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.) — no
server/backend required.
