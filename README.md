# Royal Chess Club – Chess Learning & Community Platform

A modern, fully responsive website for a chess club offering membership registration, tournament sign‑ups with live countdown timers, one‑on‑one training sessions with elite coaches, and an admin panel to manage content. Built with HTML, Tailwind CSS, and vanilla JavaScript.

---

## 📖 Overview

Royal Chess Club is a multi‑page web platform designed to help chess enthusiasts join a vibrant community, compete in tournaments, and learn from Grandmasters. The site combines clean design with interactive JavaScript features, storing user data locally for a seamless experience. An admin panel allows the site owner to manage tournaments, coaches, and members without touching the code.

---

## ♟️ Pages

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Hero section with "Master the Game" headline, philosophy, upcoming tournaments preview (3 events), featured coaches (2 cards), call‑to‑action, and footer. |
| **Join** (`register.html`) | Member registration form with name, email, optional rating (0‑3000). After registration, a toast confirms success. A link to the Members page is provided. |
| **Members** (`members.html`) | Displays all registered members in a table (name, email, rating, join date). Data is loaded from `localStorage`. |
| **Tournaments** (`tournaments.html`) | List of 6 upcoming tournaments (2026 dates). Users can register via a modal (name, rating, payment confirmation). Rating is validated (0‑3000) and automatically assigns a category (U1400, U1600, U1800, Open). Once registered, a live countdown timer appears. Users can unregister (toast confirmation). |
| **Training** (`training.html`) | Coach cards (5 elite coaches) each with bio, contact details, available time slots. Users can book a session via a confirmation modal; bookings persist across page reloads. Booked slots can be unbooked (toast confirmation). |
| **Admin** (`admin.html`) | Password‑protected panel (default password: `admin123`) to manage tournaments (add, edit, delete), coaches (add, edit, delete), and members (delete). All changes are saved to `localStorage` and immediately reflected on the front pages. |

---

## 🛠️ Built With

- **HTML5** – Semantic structure
- **Tailwind CSS** – Utility‑first styling and responsiveness
- **JavaScript (Vanilla)** – DOM manipulation, localStorage, countdown timers, modal interactions, custom toasts
- **Font Awesome** – Icons for visual enhancement

---

## 🎨 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Deep Navy | `#0F172A` | Primary background |
| Slate Card | `#1E293B` | Card backgrounds |
| Royal Gold | `#FBBF24` (amber‑400) | Accents, buttons, active page |
| Border Gray | `#334155` | Dividers and borders |
| Off‑White | `#F5F5F5` | Primary text |

---

## ✨ Features

- **Fully responsive** – Optimised for mobile, tablet, and desktop
- **Sticky navigation** with active page highlighting
- **Mobile hamburger menu** using pure CSS (checkbox hack)
- **Member registration** – simple form with optional rating; stored in `localStorage`
- **Members page** – view all registered members in a clean table
- **Tournament registration** – modal with name, rating (0‑3000), payment confirmation; live category preview (U1400, U1600, U1800, Open); live countdown timer for registered tournaments
- **Unregister from tournaments** – immediate action with a toast confirmation
- **Training booking** – choose a coach, select a time slot, confirm via modal; booked slots become unavailable
- **Unbook training sessions** – cancel bookings with a toast confirmation
- **Toast notifications** – replace all browser alerts with smooth, styled notifications (success, error)
- **Admin panel** – password‑protected dashboard to manage tournaments, coaches, and members; all changes sync with front pages via `localStorage`
- **Consistent design language** – cards, buttons, borders, and spacing unified across all pages
- **No external dependencies** – all JavaScript is custom, no frameworks

---

## 📁 Project Deployment

- **Live URL:** [https://seanmugo.github.io/Royal-Chess-Club/](https://seanmugo.github.io/Royal-Chess-Club/)
- **Repository:** [https://github.com/SeanMugo/Royal-Chess-Club](https://github.com/SeanMugo/Royal-Chess-Club)

---

## 🚀 Future Improvements

- Replace placeholder coach images with actual photos
- Add a backend (e.g., Node.js + MongoDB) to replace `localStorage`
- Implement email notifications for tournament reminders and booking confirmations
- Integrate a real chess board for interactive puzzles
- Add a user dashboard showing registered tournaments and upcoming bookings
- Add more advanced coach slot management in the admin panel

---

## 👤 Credits

- Coach quotes and names are fictional but inspired by real Grandmasters and chess educators.
- Built as a showcase project for front‑end skills (HTML, Tailwind, JavaScript).