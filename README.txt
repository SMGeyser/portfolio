SAMUEL GEYSER — PORTFOLIO

A dependency-free static website with project search, category filters,
project detail dialogs, light/dark themes, an automatically scrolling
skills strip, and résumé download. The strip pauses on hover or focus
and respects reduced-motion preferences.

The hero cycles through four supplied photos in a shared portrait frame.
Each photo remains fully in focus for five seconds, followed by a 700ms
soft transition. Hover or keyboard focus holds the current portrait.
Reduced-motion preferences disable automatic photo rotation.

Preview:
  python -m http.server 8765 --bind 127.0.0.1 --directory public
Then open http://127.0.0.1:8765.

Edit project entries in public/projects.js.
Edit profile and experience text in public/index.html.
Edit the design in public/styles.css.
Replace public/Samuel_Geyser_Resume.pdf to update the download.

Hosting:
The public folder can be deployed on any static website host.
.openai/hosting.json configures the Sites deployment.
No build step, API keys, database, or package installation is needed.

Content is a reviewed snapshot from October 14, 2026. It does not
automatically read private files, chat history, or GitHub changes.
