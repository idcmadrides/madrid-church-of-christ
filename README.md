# Iglesia de Cristo en Madrid

Spanish and English website for Iglesia de Cristo en Madrid / Madrid Church of Christ.

- Website: https://idc-madrid.org/
- Sunday worship: 10:30 a.m., Madrid local time.
- Meeting place: Paseo de Ginebra 35, local 2, Madrid, Spain.
- Metro: Line 2, Las Rosas. Use the elevator exit and go to the street behind the elevator.
- Public contacts:
  - Ángel Bravo, +34 666 00 76 73.
  - Omar, +34 603 33 24 55.
  - Leonel, +34 658 54 18 41.

## Publishing

The repository root contains the complete static website. GitHub Pages publishes the `main` branch from `/` with the custom domain in `CNAME`. `.nojekyll` preserves the static files without a Jekyll build. No paid hosting is required.

Keep the Spanish/English toggle, the first-century Way identity (Acts 24:14), worship explanations and Bible references, and the corrected street address when editing.

Only public website files belong here. Do not upload account credentials, billing details, private screenshots, or files from other church or Sky projects.

## Photo credit

`assets/madrid-gran-via.jpg`: “Gran Via-atardecer,” Nemo, Wikimedia Commons, CC BY-SA 4.0. The original photo bytes are unchanged. The CSS crop and overlay presentation retains CC BY-SA 4.0; unrelated website text and code are outside that license. This city photo does not depict the congregation or meeting room.

Source: https://commons.wikimedia.org/wiki/File:Gran_Via-atardecer.jpg

License: https://creativecommons.org/licenses/by-sa/4.0/

## Local preview

Run `python -m http.server 8766 --bind 127.0.0.1` from this folder.

## Search and language pages

Canonical production: https://idc-madrid.org/
Spanish HTML is at the root; `/en/` serves pre-rendered English. After editing root HTML or translation strings in `app.js`, run `python build_locales.py` (Python 3 + beautifulsoup4 and Node.js), then commit generated `en/` files. No build is required on GitHub Pages. Keep canonical, hreflang and sitemap URLs on the production origin. No passwords belong in this public repository.
