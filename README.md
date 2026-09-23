# SkyLink Reservations — Landing Page

A responsive, multi-page flight-booking **assistance** website inspired by the general
layout pattern of phone-first travel-support landing pages: a hero with a call-to-action
and callback form, service cards, airline coverage, a reservation-desk section, sample
deals, and a footer with legal links.

> **Demo notice:** All branding, copy, phone numbers, airline references and fares are
> fictional placeholders for design/template purposes only. The callback form is
> front-end only — it validates input and shows a confirmation message, but **no data is
> sent or stored anywhere**.

---

## ✦ Features

- **Sticky header** with logo, navigation and a prominent *Call Now* button
- **Hero section** with live-status badge, headline, CTA buttons and a validated callback form
- **Trust bar** with key stats (connect time, 24/7 support, airlines supported)
- **Services cards** — price guidance, customer care, secure handling
- **Airlines grid** — carriers the desk assists with
- **Reservation desk section** with 24/7 badge and checklist
- **Flight deals cards** with sample indicative fares
- **Legal pages** — Privacy Policy, Terms & Conditions, and Disclaimer, linked in every footer
- **Floating call button** on mobile + hamburger menu
- **Reveal-on-scroll** animations, smooth scrolling, subtle scroll-shadow header
- **Fully responsive** (desktop / tablet / mobile breakpoints)

## ✦ Tech Stack

| Layer      | File                         | Notes                       |
|------------|------------------------------|-----------------------------|
| Structure  | `index.html` + 3 legal pages | Semantic HTML5              |
| Styling    | `style.css`                  | Custom CSS, variables, grid |
| Behavior   | `script.js`                  | Vanilla JS, no dependencies |

Fonts (Sora + Inter) are loaded from Google Fonts.

## ✦ Getting Started

No build step required.

**Option 1 — open directly:**
Double-click `index.html` (or drag it into your browser).

**Option 2 — local server (recommended):**

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## ✦ Project Structure

```
skylink-reservations/
├── index.html          # Home / landing page
├── privacy-policy.html # Legal page (footer link)
├── terms.html          # Legal page (footer link)
├── disclaimer.html     # Legal page (footer link)
├── style.css           # All styles + responsive rules
├── script.js           # Nav toggle, form validation, animations, legal dates
└── README.md           # This file
```

## ✦ Customization

- **Phone number** — search for `+18005550137` and `(800) 555-0137` across all HTML
  files and replace with the real number.
- **Brand name** — replace `SkyLink` / `SkyLink Reservations` everywhere.
- **Colors** — edit the CSS variables at the top of `style.css`
  (`--navy`, `--blue`, `--orange`, etc.).
- **Deals / airlines / services** — edit the corresponding sections in `index.html`.
- **Legal text** — the three legal pages contain original placeholder sections; replace
  them with properly reviewed legal content before production use.

## ✦ Accessibility & Notes

- Semantic landmarks, labeled form fields, `aria-label` on the floating call button.
- Sample fares are illustrative only; real fares depend on date, route and airline.
- If you wire the callback form to a real backend, replace the demo handler in
  `script.js` (`form.addEventListener("submit", ...)`) with a proper `fetch()` call
  and keep server-side validation in place.
- Each legal page shows an auto-generated "Last updated" date via `script.js`.

## ✦ License

Provided as a demo template — free to adapt for your own projects.
