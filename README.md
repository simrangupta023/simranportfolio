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
- Adjust colors, typography, spacing and responsive layouts in `src/index.css` and `src/App.css`.
- Update the page title and search description in `index.html`.
- The contact buttons open the visitor’s email application using a `mailto:` link. No contact form or backend is configured.
- The optional Google Fonts import in `src/index.css` requires an internet connection; system sans-serif fonts are used as fallbacks.

## Check a production build

```sh
npm run build
```

The generated production site is placed in `dist/`. To preview it locally, run `npm run preview`.

## Upload to GitHub

1. Create a new, empty repository on GitHub. Do not add a README or `.gitignore` there if you want to push this existing project as-is.
2. In this folder, initialize Git and make the first commit:

   ```sh
   git init
   git add .
   git commit -m "Add Simran Gupta portfolio"
   ```

3. Add your GitHub repository as the remote and push the `main` branch:

   ```sh
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

Replace the example repository URL with your own. Never add passwords, API keys or private `.env` files to GitHub.

## Deploy with Vercel

Import the GitHub repository in Vercel. Vercel detects Vite automatically; use `npm run build` as the build command and `dist` as the output directory. Deployment is not configured or triggered by this project.
