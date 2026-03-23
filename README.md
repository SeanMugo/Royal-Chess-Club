# Royal Chess Club – Chess Learning & Community Platform

A modern, fully responsive website for a chess club offering membership registration, tournament sign‑ups with live countdown timers, and one‑on‑one training sessions with elite coaches. Built with HTML, Tailwind CSS, and vanilla JavaScript.

---

## 📖 Overview

Royal Chess Club is a multi‑page web platform designed to help chess enthusiasts join a vibrant community, compete in tournaments, and learn from Grandmasters. The site combines clean design with interactive JavaScript features, storing user data locally for a seamless experience.

---

## ♟️ Pages

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Hero section with "Master the Game" headline, philosophy, upcoming tournaments preview (3 events), featured coaches (2 cards), call‑to‑action, and footer |
| **Join** (`register.html`) | Member registration form with name, email, optional rating; displays list of registered members (stored in localStorage) |
| **Tournaments** (`tournaments.html`) | List of 6 upcoming tournaments (2026 dates). Users can register for any tournament via a modal (name, rating, payment confirmation). Once registered, a live countdown timer appears. Users can also unregister. |
| **Training** (`training.html`) | Coach cards (5 elite coaches) each with bio, contact details, available time slots. Users can book a session via a confirmation modal; bookings persist across page reloads. Booked slots can be unbooked. |

---

## 🛠️ Built With

- **HTML5** – Semantic structure
- **Tailwind CSS** – Utility‑first styling and responsiveness
- **JavaScript (Vanilla)** – DOM manipulation, localStorage, countdown timers, modal interactions
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
- **Member registration** with localStorage persistence
- **Tournament registration** – modal with name, rating, and payment confirmation; live countdown timers for registered tournaments
- **Unregister from tournaments** – users can cancel their registration at any time
- **Training booking** – choose a coach, select a time slot, confirm via modal; booked slots become unavailable
- **Unbook training sessions** – users can cancel their bookings with a single click
- **Consistent design language** – cards, buttons, borders, and spacing unified across all pages
- **No external dependencies** – all JavaScript is custom, no frameworks

---

## 📁 Project Deployment

- **Live URL:** 
- **Repository:** https://github.com/SeanMugo/Royal-Chess-Club

---

## 🚀 Future Improvements

- Replace placeholder coach images with actual photos
- Add a backend (e.g., Node.js + MongoDB) to replace localStorage
- Implement email notifications for tournament reminders
- Integrate a real chess board for interactive puzzles
- Add a user dashboard showing registered tournaments and upcoming bookings

---

## 👤 Credits

- Coach quotes and names are fictional but inspired by real Grandmasters and chess educators.
- Built as a showcase project for front‑end skills (HTML, Tailwind, JavaScript).# Royal-Chess-Club
