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

The server now serves the login page (`index.html`) at the root URL. Enter one
of the allowed four-digit codes to access `quiz.html` and start the quiz. You
can also open `quiz.html` directly without the login step if you do not need
code protection.
Use the **Темная тема** button on the page to switch between light and dark
modes. The chosen theme is saved in `localStorage` and applied on the next
visit.

## Deploying

- The frontend (`quiz.html`) can be deployed to GitHub Pages.
- If you host the backend (`server.js`) on a Node.js platform (Render, Heroku, etc.), set `BACKEND_URL` in `quiz.html` to that URL so questions are requested from the server.
- When deploying only to GitHub Pages without a backend, leave `BACKEND_URL` empty and ensure the quiz JSON files are located alongside `quiz.html` (e.g. `./PM04.json`).

