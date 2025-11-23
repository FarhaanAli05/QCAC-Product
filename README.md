# Product Page Starter Repo

A fully responsive product landing page built with React and Vite, featuring Tailwind CSS styling and a localStorage-backed reviews system.

![Product Page Screenshot](public/images/product-page-screenshot.png)

## Description

This repo contains a single-page product landing layout with components for a header, hero, features, and customer reviews. Reviews can be submitted via a form (title, body, rating, name) and are saved to localStorage so they persist between sessions. The project uses Tailwind CSS for styling and Vite as the dev server/bundler.

## Prerequisites

- Node.js 18+ (or compatible LTS)
- npm (comes with Node.js)

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app:

Visit http://localhost:5173 (Vite will print the exact URL in the terminal)

## Features

- Responsive header with mobile hamburger menu
- Hero section with product image and CTA
- Features grid for product highlights
- LocalStorage-powered reviews:
  - Sample reviews included
  - User-submitted reviews persist
- Fully responsive layout using Tailwind CSS
- Clean components structure

## Technologies used

- React 18
- Vite
- Tailwind CSS
- PostCSS + Autoprefixer

## Challenges

- Responsive stacking context: transformed images (css transforms) created a stacking context that caused the mobile menu to render behind the hero image; fixed by giving the header/menu a higher z-index and switching from `fixed` to `absolute` placement so the menu scrolls away with the page.
- Data shape migration: the starter shipped with reviews as a single `message` field - the app now uses `title` and `body`. I updated the sample data and made the renderer backward-compatible to avoid breaking existing stored reviews.
- Tailwind/PostCSS wiring: keep `tailwind.config.cjs` and `postcss.config.cjs` separate and ensure `@tailwind` directives exist in `src/index.css` so utilities are compiled.