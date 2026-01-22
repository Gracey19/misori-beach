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

6. Minimalist Quarter-Screen Navigation Overlay

Problem: The standard horizontal navbar was becoming cluttered, and we needed a dedicated space for secondary navigation that felt high-end and didn't overwhelm the visual field.

Solution: Engineered a side-drawer "Menu State" using a boolean toggle (isMenuOpen).

Dimensions: Constrained the overlay to exactly 25% (w-1/4) of the screen width on desktop to maintain a minimalist, boutique aesthetic.

Styling: Applied a "Pearl" background against "Oxblood" text buttons.

Micro-interactions: Integrated a hover state that transitions text to "Terracotta" (#A6603E) and used translate-x utilities for a smooth slide-in entry from the right.

7. Navbar Alignment & Depth Logic

Problem: Adding the Hamburger icon caused vertical alignment issues (not being on the same line as the text) and created a "collision" with the Hero $H1$ heading.

Solution: * Vertical Correction: Refactored the flex alignment from items-center to items-start on the parent container to pin the navbar to the top, preventing it from dipping into the $H1$ space.

Precision Nudging: Applied pt-3 to the <ul> link list to manually align the baseline of the text with the center-point of the fixed-height Hamburger icon.

Layering: Verified z-index hierarchy to ensure the menu overlay sits at z-[100], clearing both the fixed navbar and the sliding header arrows.

8. Structural Refactoring of Mosaic Grid (Mobile/Desktop Alignment)
Problem: When viewing the food mosaic on different screen sizes or rotating mobile devices, the decorative border lines would "drift" or extend outside the boundaries of the images. This happened because the borders were pinned to a container that was stretching wider than the image itself.

Solution: Implemented a "Shrink-Wrap" Container Architecture.

Logic: Moved all fixed width and height utility classes (w-18, h-16, etc.) from the <img> tags directly onto their parent relative div containers.

Result: Since the parent div now defines the exact pixel dimensions, the absolute border overlays are strictly constrained to the image edges. Setting images to w-full h-full object-cover ensures they fill this "lock-box" perfectly regardless of screen rotation.

9. Responsive "Inset" Calibration
Problem: The inset-3 spacing (12px) for decorative borders looked great on desktop but felt too "crowded" on tiny mobile images, often obscuring the food subjects.

Solution: Applied Responsive Inset Utilities.

Used inset-1 md:inset-3. This reduced the border padding to 4px on mobile devices, maintaining the "high-end" look without suffocating the smaller image assets.

10. Background Email Integration (EmailJS)
Problem: The initial mailto: form required users to have a local email client (like Outlook or Apple Mail) configured. If no app was set up, the "Send" button appeared "dead." Furthermore, the input field wouldn't clear after a click, leaving the user's data visible.

Solution: Migrated from local mail protocols to a Headless API (EmailJS).

Asynchronous Submission: Integrated the @emailjs/browser library to handle form data via emailjs.sendForm.

State Reset Logic: Wrapped the input in a standard <form> and used a useRef hook. On a successful API response (.then), the e.target.reset() method is triggered, clearing the input field and providing visual confirmation to the user.

UX Feedback: Added a browser alert to confirm "Success," ensuring the user knows their email was transmitted without ever leaving the webpage.


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
