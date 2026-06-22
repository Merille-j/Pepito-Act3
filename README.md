# Merille Janine Pepito — Portfolio

A 5-page personal portfolio site built with plain HTML, CSS, and JavaScript — styled after a dark, elegant Figma design reference (Italiana / Tangerine / Raleway / DM Sans fonts, deep purple background, pink-purple gradient accents).

---

## Pages

| File | Description |
|---|---|
| `index.html` | Hero with animated floating orbs + starfield, quick-nav cards, CTA strip |
| `about.html` | Portrait with floating stat badges, bio, tag row, experience timeline |
| `work.html` | Filterable project grid (All / Web App / Desktop App / UI-UX / Python / Rust) |
| `skills.html` | Animated proficiency bars, tools grid, services cards, "How I Work" process row |
| `contact.html` | Contact form with JS success state, contact details sidebar, social links |

---

## Folder Structure

```
portfolio-v2/
├── index.html
├── about.html
├── work.html
├── skills.html
├── contact.html
├── css/
│   └── style.css        # All styles — shared across every page
├── js/
│   └── main.js          # All interactivity — shared across every page
└── images/
    ├── Merille.jpg
    ├── Minerva.jpg
    ├── SpecialSurgery.jpg
    ├── PondoBro.jpg
    ├── SeqWatch.JPEG
    └── EaseService.JPEG
```

---

## JavaScript Features (`js/main.js`)

- **Nav scroll shadow** — header background solidifies on scroll
- **Mobile hamburger drawer** — full-screen nav overlay with open/close toggle
- **Scroll reveal** — elements fade up into view as they enter the viewport (via `IntersectionObserver`, respects `prefers-reduced-motion`)
- **Animated skill bars** — proficiency bars grow in when the Skills section scrolls into view
- **Project filter** — filter pills on the Work page show/hide cards by category; empty state shown when no match
- **Contact form success state** — form fades out and a thank-you message fades in on submit (no backend required)
- **Hero orb randomiser** — floating ambient orbs and star positions are randomised on each page load

---

## Design

| Token | Value |
|---|---|
| Background | `#160920` |
| Surface | `rgba(34, 15, 48, 0.6)` |
| Accent pink | `#f472b6` |
| Accent purple | `#a855f7` |
| Gradient | `135deg, #f472b6 → #a855f7` |
| Display font | Italiana (serif) |
| Script font | Tangerine (cursive) |
| Label font | Raleway (sans-serif) |
| Body font | DM Sans (sans-serif) |

---

## How to Run

No build step needed — open any `.html` file directly in a browser, or serve with any static file server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```
---

## Projects Included

| Project | Stack | Category |
|---|---|---|
| Minerva Search Engine | JavaScript | Desktop App |
| Special Surgery Registration System | React, Vite, Supabase | Web App |
| PondoBro | Rust Yew, ASP.NET Core, SQLite | Web App, Rust |
| SeqWatch | Python | Web App, Python |
| EaseService | Figma | UI / UX |

---

&copy; 2026 Merille Janine Pepito
