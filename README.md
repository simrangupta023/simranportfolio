# Simran Gupta — Portfolio

A personal portfolio built with React, Vite and CSS.

## Run locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open this project folder in a terminal.
3. Install the project packages:

   ```sh
   npm install
   ```

4. Start the local development server:

   ```sh
   npm run dev
   ```

5. Open the local address printed in the terminal (usually `http://localhost:5173`).

## Edit the portfolio

- Update the introduction, skills and social profile URLs in `src/App.jsx`.
- Replace `src/assets/simran-gupta.png` to update the portrait shown in the hero.
- Adjust colors, typography, spacing and responsive layouts in `src/index.css` and `src/App.css`.
- Update the page title and search description in `index.html`.
- The contact form collects a visitor’s name, email, optional phone number, project type and message, then prepares an email to `simran92297@gmail.com` in their email application. The visitor must send that email themselves; the site does not store submissions. A backend or form service is needed to receive enquiries without relying on the visitor’s email application.
- The optional Google Fonts import in `src/index.css` requires an internet connection; system sans-serif fonts are used as fallbacks.

## Check a production build

```sh
npm run build
```

The generated production site is placed in `dist/`. To preview it locally, run `npm run preview`.

## Deploy with GitHub Pages

The `main` branch is deployed automatically to GitHub Pages by the workflow in
`.github/workflows/deploy.yml`. The Vite base path is configured for this
repository, so the published site is:

https://simrangupta023.github.io/simranportfolio/

In the repository's **Settings → Pages**, set the build and deployment source
to **GitHub Actions** if it is not already selected. Every push to `main`
triggers a new build and deployment. Never add passwords, API keys or private
`.env` files to GitHub.
