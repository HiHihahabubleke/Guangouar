# Quiz Project Backend

This repository contains a simple quiz page and a small Node.js backend used to serve question files.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.
   The endpoint `/questions?file=PM04.json` will return the JSON file.

## Deploying

- The frontend (`index.html`) can be deployed to GitHub Pages.
- If you host the backend (`server.js`) on a Node.js platform (Render, Heroku, etc.), set `BACKEND_URL` in `index.html` to that URL so questions are requested from the server.
- When deploying only to GitHub Pages without a backend, leave `BACKEND_URL` empty and the page will load the JSON files directly.
- When deploying only to GitHub Pages, leave `BACKEND_URL` empty. The page expects the quiz JSON files to be located alongside `index.html` (e.g. `./PM04.json`).

