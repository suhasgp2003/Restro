# Restro

A responsive restaurant landing page built with React and Vite. Restro showcases signature dishes, the restaurant's story, opening hours, guest testimonials, and a table reservation overview, with scroll animations and smooth anchor navigation.

**Live demo:** [Visit Restro](https://restro-alpha-ecru.vercel.app/)

## Features

- Responsive layout with desktop navigation and a mobile menu.
- Hero banner, about section, and highlights of ingredients, cooking, and hospitality.
- Eight signature dishes with prices and animated image rotation on hover.
- Three-step reservation overview and booking calls to action.
- Weekly opening hours and guest testimonial cards.
- Expandable FAQ items using native HTML `details` elements.
- Scroll-triggered animations with Motion and smooth scrolling with Lenis.
- Footer with contact links, social icons, and site links.

The project is a frontend showcase. Booking buttons scroll to the reservation overview; there is no booking form, backend, database, payment flow, or order processing. Some social and policy links are placeholders, and the contact details and restaurant content should be customized before launch.

## Tech stack

- **React 19** - UI components and state.
- **Vite 8** - development server and production build.
- **Tailwind CSS 4** - styling through the Tailwind Vite plugin.
- **Motion** - entrance and hover animations.
- **Lenis** - smooth scrolling and anchor offsets.
- **Lucide React** - UI icons.
- **ESLint** - JavaScript and React linting.

## Getting started

Use **Node.js 22.13 or later in the 22.x series, or Node.js 24+**, with npm. These versions satisfy the installed Vite and ESLint engine requirements.

From the project directory, install the locked dependencies:

```sh
npm ci
```

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`. No environment variables or API keys are required. Google Fonts and the externally hosted testimonial images need an internet connection to load.

## Available commands

- `npm run dev` - start Vite with hot module replacement.
- `npm run build` - generate the production site in `dist/`.
- `npm run preview` - serve the production build locally, normally at `http://localhost:4173`.
- `npm run lint` - run ESLint across the project.

There is currently no automated test script configured.

## Project structure

```text
public/
  assets/              Restaurant images, dish photos, logo, and favicons
src/
  assets/              Additional images and starter SVG assets
  components/          Navbar, Footer, Animated, and LenisScroll
  data/
    data.jsx           Dishes, hours, testimonials, FAQs, and link data
  sections/            Individual landing-page sections
  App.jsx              Page composition and section order
  main.jsx             React entry point
  index.css            Tailwind import, fonts, theme, and shared utilities
index.html             HTML shell, page title, and favicon
vite.config.js         React and Tailwind Vite plugins
eslint.config.js       Lint configuration
```

## Customization

- Update dishes, prices, opening hours, FAQs, testimonials, and navigation links in `src/data/data.jsx`.
- Edit headings and section copy in `src/sections/` and contact details in `src/components/Footer.jsx`.
- Replace images and branding in `public/assets/`. These files are referenced through `/assets/...` URLs.
- Adjust fonts and shared styling in `src/index.css`, and component styles through Tailwind classes in the JSX files.
- Change the browser title and favicon in `index.html`.
- Reorder or add sections in `src/App.jsx`. Keep anchor links aligned with each section's `id`.

To support actual reservations, add a form and connect it to a booking service or backend, then update the booking calls to action and FAQ copy to match the implemented behavior.

## Production build

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static hosting service. The current code uses root-relative asset paths and a `/` home link, so it assumes hosting at the domain root. Hosting under a subdirectory requires updating Vite's `base` setting and the root-relative references in the source.

## Credits

The site footer credits GreatStack for the design. Fonts are loaded from Google Fonts, and testimonial portraits are hosted on Unsplash.
