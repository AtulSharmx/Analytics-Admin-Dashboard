# Analytics Admin Dashboard

A sleek, modern analytics admin dashboard redesigned entirely in **pure HTML5, CSS3, and Vanilla JavaScript**. It features a dark-themed glassmorphism aesthetic, interactive real-time revenue and sales charts, live user management with search filtering, theme toggling, and fake authentication.

## 🚀 Tech Stack

- **HTML5**: Semantic markup and accessibility structure.
- **CSS3**: Custom properties (CSS variables), glassmorphism visuals, smooth transitions, and responsive grid layouts.
- **Vanilla ES6 JavaScript**: Clean, beginner-friendly, structured DOM manipulation and event handlers (no complex frameworks or heavy build tools required).
- **Chart.js**: Included via CDN for interactive charts.
- **JSONPlaceholder API**: Real-time mock user data fetching with fallback support.

## ✨ Key Features

- **Demo Authentication**: Pre-filled login screen (`admin` / `admin123`) with persistent session status in `localStorage`.
- **Interactive Dashboard**:
  - Stat cards showcasing key metrics (Revenue, Active Users, Sales, Conversion Rate).
  - Revenue Line Chart & Category Sales Bar Chart powered by Chart.js.
  - Live activity feed log.
- **Users Directory**:
  - Fetches user list live from JSONPlaceholder API.
  - Instant client-side search filtering by user name or email.
  - Modal interface to add new users dynamically.
  - Quick user deletion.
- **Settings & Customization**:
  - Persistent Light / Dark theme toggler stored in `localStorage`.
  - Profile update forms and system email preference toggles.
- **Toast Notifications**: Interactive status notifications for all system actions.

## 💻 How to Run

Since this project uses standard HTML, CSS, and JS:

1. Open `index.html` directly in any web browser.
2. Alternatively, use VS Code Live Server or run a simple local HTTP server:
   ```bash
   npx serve .
   ```
