# Stripe‑style Navbar & Solutions Mega Menu

This project implements a responsive Stripe‑style top navigation bar with a “Solutions” mega menu, using **React** and **lucide-react** icons in a **single `App.jsx` file**, as required by the assignment.

## Features

### Desktop

- Full‑width gradient background header.
- Left‑aligned **Logo**, centered menu items:
  - Products
  - Solutions (with dropdown)
  - Developers
  - Resources
  - Pricing
- Right‑aligned CTAs:
  - Sign in
  - Contact sales
- Hovering on **Solutions** opens a wide white mega menu with:
  - Sections: **BY STAGE**, **BY USE CASE**, **BY INDUSTRY**, **ECOSYSTEM**
  - Each section shows items with an icon and label laid out in a clean 2‑column grid.
  - Subtle shadow, rounded corners, and small “arrow” notch on top to match the reference UI.

### Mobile

- Hamburger icon opens a slide‑in menu from the right.
- Root menu shows:
  - Products, Solutions, Developers, Resources, Pricing, Sign in
- Tapping **Solutions** navigates to a second mobile screen:
  - Same sections as desktop in a 1‑column list.
  - Back button to return to the root menu.
  - “Start now” and “Contact sales” buttons at the bottom.

## Tech Stack

- **React** (functional components + `useState`).
- **lucide-react** for all icons.
- Inline CSS styles (no external CSS / Tailwind), to keep everything in a single file.

## Project Structure

All core logic and UI are in one file:


Key parts inside `App.jsx`:

- `navbarItems`: configuration object for menus and mega menu sections.
- `iconMap`: maps string keys (e.g. `"building"`) to lucide icon components.
- `App` component:
  - Desktop navbar and mega menu.
  - Mobile hamburger and slide‑in navigation.
  - State:
    - `isSolutionsOpen` – controls desktop mega menu visibility.
    - `isMobileOpen` – controls mobile overlay visibility.
    - `mobileScreen` – `"root"` or `"solutions"`.

## How to Run

1. Install dependencies:


2. Add lucide-react if not already installed:


3. Start the dev server:


4. Open the app in the browser and:
- Hover over **Solutions** on desktop to see the mega menu.
- Resize to mobile width and use the hamburger menu to test mobile behaviour.

## Notes

- The layout and spacing are tuned to closely match the provided Stripe demo screenshots, while still being slightly simplified to keep the code readable.
- All menu structure and icons are driven by the `navbarItems` and `iconMap` objects, so changing labels or URLs does not require touching the layout logic.
