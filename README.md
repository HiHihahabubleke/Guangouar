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

The server now serves `login.html` at the root URL. Enter one of the allowed
four-digit codes to access `index.html` and start the quiz. A successful login
stores a flag in `localStorage`. If you try to open `index.html` directly
without being authenticated, the page will redirect back to `login.html`.
Use the **Темная тема** button on the page to switch between light and dark
modes. The chosen theme is saved in `localStorage` and applied on the next
visit.

## Deploying

- The frontend (`index.html`) can be deployed to GitHub Pages.
- If you host the backend (`server.js`) on a Node.js platform (Render, Heroku, etc.), set `BACKEND_URL` in `index.html` to that URL so questions are requested from the server.
- When deploying only to GitHub Pages without a backend, leave `BACKEND_URL` empty and ensure the quiz JSON files are located alongside `index.html` (e.g. `./PM04.json`).

