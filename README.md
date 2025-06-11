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

- The frontend (`index_with_finish_button.html`) can be deployed to GitHub Pages.
- Host the backend (server.js) on any Node.js hosting platform (Render, Heroku, etc.).
- In `index_with_finish_button.html` set `BACKEND_URL` to the URL where the backend is deployed so that the page can fetch question files.

