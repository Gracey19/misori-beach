# Day 1

Project Initialization: Successfully deployed the core development environment using Vite + React for high-performance HMR (Hot Module Replacement).

Styling Infrastructure: Integrated Tailwind CSS as the primary utility engine to facilitate a bespoke, design-system-led UI.

Environment Configuration: Optimized the build pipeline and folder structure to support high-resolution assets and custom typography.

Successfully pushed project to github


# Day 2
Development Log: Problems & Solutions

1. WhatsApp Integration & Asset Routing
Problem: Needed the WhatsApp icon to link directly to a specific Kenyan phone number and had confusion regarding local file paths for images.

Solution: Formatted the link using the https://wa.me/254710323295 international standard and corrected the image src paths to reference the /public root directly (e.g., /images/wa_icon.png).

2. Dynamic Background Slider
Problem: The hero section background was static. The goal was to make the left/right arrows change the background image between header_1 and header_2.

Solution: Introduced React useState to track the currentImage. Attached onClick handlers to the arrows to toggle the state, updating the style={{ backgroundImage: ... }} dynamically using template literals.

# Day 3
3. Navbar Positioning & Z-Index Conflicts
Problem: The navbar disappeared when scrolling, and once made fixed, it blocked the "Next" slider arrow from being clickable.

Solution: Changed navbar positioning from absolute to fixed. To fix the "dead" arrow, I boosted the arrow's z-index to z-[60] and used pointer-events-none on the navbar's outer container to allow clicks to pass through to the slider navigation.

# Day 4
4. Added a Scroll Effect (Gradient Fade)
Problem: Wanted a scroll listener that turned the navbar into a transparent Oxblood color with a soft fade at the bottom, rather than a hard rectangular edge, while avoiding background blur.

Solution: Combined a scroll event listener (detecting window.scrollY) with an inline CSS linear-gradient.

Gradient logic: linear-gradient(to bottom, rgba(74, 16, 16, 0.9) 0%, rgba(74, 16, 16, 0.5) 50%, rgba(74, 16, 16, 0) 100%). This ensures the bottom edge of the navbar is 100% transparent, creating a "soft" transition into the site content.


5. Cinematic Horizontal Slide Transition
Problem: The image swap in the header felt too abrupt (instant change). To achieve a luxury resort aesthetic, I wanted a smooth "sliding" motion between images rather than a simple visibility toggle.

Solution: Re-engineered the header structure from a single div background to a "filmstrip" slider track.

Implemented a flex container with overflow-hidden.

Switched logic to use a numerical index (currentSlide) instead of image strings.

Applied a CSS transform: translateX() animation driven by the slide index.

Used transition-transform duration-700 ease-in-out to create a smooth, premium gliding effect while keeping all hero content perfectly aligned.


## TECHNICAL SPECS

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
