# pHinder Marketing Website

This is a static marketing and portfolio website for the "pHinder" iOS app. It is built strictly with HTML5, CSS3, and vanilla JavaScript, following an "Apple.com" design aesthetic (minimal, spacious, one accent color, smooth animations).

## Features
- **No Dependencies:** Built with pure HTML, CSS, and JS. No bundlers or npm required.
- **Responsive:** Works seamlessly across desktop, tablet, and mobile devices.
- **Pure CSS Device Mockups:** Includes an iPhone mockup component built entirely with CSS, including the Dynamic Island.
- **Interactive Gallery:** A swipeable/scrollable screenshot gallery with dot navigation.
- **Animations:** Subtle scroll-reveal animations using IntersectionObserver.

## How to View Locally
Since this is a fully static site with no build process, you can view it simply by opening the `index.html` file in any modern web browser.

1. Navigate to the project folder.
2. Double-click `index.html` or drag it into your browser.

*(Note: For some advanced features like certain local font loading or fetching external local assets, some browsers prefer a local server. If you encounter any issues, run `python3 -m http.server 8000` or `npx serve` in this directory and visit `http://localhost:8000`.)*

## How to Update Screenshots
The site currently uses placeholder SVG images in the `assets/screenshots/` folder. 
To add your actual app screenshots:
1. Export your screenshots from the simulator or device (preferably with an aspect ratio around 9:19.5, e.g., 1170x2532).
2. Save them into the `assets/screenshots/` folder.
3. Overwrite the existing placeholder files or update the filenames in `index.html` to match your new files.

**Required Screenshots:**
- `01-home.png` (Home Dashboard)
- `02-new-reading.png` (New Reading)
- `03-history.png` (History & Trends)
- `04-scanner.png` (Camera Scanner)
- `05-categories.png` (Custom Categories)
- `06-details.png` (Reading Details)
- `07-settings.png` (Settings)
- `08-darkmode.png` (Dark Mode)

## Deployment
This site is designed to be hosted directly on GitHub Pages.
1. Create a new GitHub repository.
2. Push all these files to the `main` branch.
3. Go to the repository **Settings** > **Pages**.
4. Select the `main` branch and `/ (root)` folder as the source.
5. Save, and your site will be live!
