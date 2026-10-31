# Project Memory: Eliya Production Web Portal

*Last Updated: October 31, 2026*

---

## 1. Executive Summary & Brand Profile

**Eliya Production** is a premier Pakistani live entertainment and stage production house recognized for producing high-profile cultural, musical, and theatrical events.

### Verified Brand Essentials
* **Brand Name:** Eliya Production
* **Primary Focus:** Live concerts, Sufi Qawwali nights, stand-up comedy specials, theatrical stage plays, 4K multi-cam broadcasts, and corporate gala events.
* **Official Hotline & WhatsApp Line:** `+92 324 3478503`
* **Social Media Ecosystem:**
  * **Instagram:** [`@eliyaproduction`](https://www.instagram.com/eliyaproduction/)
  * **Facebook:** [`@eliyaproduction`](https://www.facebook.com/eliyaproduction/)
  * **TikTok:** [`@eliyaproduction`](https://www.tiktok.com/@eliyaproduction)
* **Venue Hubs:** Arts Council of Pakistan (Karachi) Amphitheater & Auditorium, alongside major arenas nationwide.
* **Ticketing Collaborations:** Ticketwala and on-ground ticket desks.

> [!IMPORTANT]
> **Explicit Disassociation:** Eliya Production is strictly independent and has **no affiliation** with the Instagram handle `@qaixhey_ely` or unrelated local art/calligraphy services. All brand data, social links, and contacts are strictly consolidated under `@eliyaproduction` and phone `+92 324 3478503`.

---

## 2. Visual Identity & Assets

### Official Logo
* **Asset Location:** `public/assets/logo.png` (and embedded in `dist/assets/logo.png`).
* **Format:** High-resolution 1024x1024 RGBA transparent PNG.
* **Emblem Structure:** Metallic 3D crimson red "EP" crest, futuristic geometric "ELIYA" typography (featuring red accents on the 'i' dot and 'A' apex), and "PRODUCTION" anchored by horizontal red framing lines.
* **Design Canvas:** Cinematic Dark Luxury (`#08090C` background) with crimson glow accents (`#E50914`, `#990000`) and high-contrast white typography (`#FFFFFF`).
* **Favicons:** Custom generated `public/favicon.png` (64x64) and `public/favicon.ico`.

---

## 3. Flagship Productions

1. **Sham-e-Ishq o Mizah:**
   * Signature trademark property blending soulful Sufi Qawwali with family stand-up comedy.
   * Multi-season sold-out runs, frequently staged at the Arts Council Amphitheater, Karachi.
2. **The Great Laughter Night:**
   * Celebrity comedy showcase featuring comedy icon **Rauf Lala** and veteran stage performers.
3. **Theatrical Comedies & Stage Plays:**
   * High-energy family theater productions (e.g., *Bakra Bana Dala*).
4. **Mega Musical Evenings & Concerts:**
   * Multi-artist live concerts with line-array acoustic tuning, dynamic moving-head lighting, and LED visual walls.

---

## 4. Technical Architecture & Tech Stack

The portal is built as a static Jamstack single-page application prioritizing sub-second load times, maximum security, and high maintainability.

| Layer | Technology | Key Implementation Details |
| :--- | :--- | :--- |
| **Build Tooling** | **Vite (v6+)** | High-speed development and production bundling pipeline. |
| **Styling** | **Tailwind CSS (v3.4+)** | Utility-first CSS with custom crimson and cinema palettes, backdrop blurs, and glow keyframes. |
| **Scripting** | **Modern ES6 JavaScript** | Zero framework runtime bloat; modular event listeners and DOM controllers. |
| **Icons** | **Lucide Icons** | Selectively tree-shaken imports (bundle footprint < 14 KB); brand icons (Instagram, Facebook, TikTok) implemented as clean inline SVGs. |
| **Hosting Compatibility** | **Static Edge Hosting** | Compatible with Cloudflare Pages, Vercel, Netlify, GitHub Pages, or standard Nginx/Apache servers. |

### Performance & Security Metrics
* **Total Bundled Gzipped Size:** ~26 KB (HTML: ~15 KB, CSS: ~6 KB, JS: ~5 KB).
* **Load Time:** Sub-100ms on fast networks; sub-1s on 3G/4G mobile.
* **Security Surface:** 100% static client-side distribution with zero server-side execution, database injection vectors, or runtime vulnerabilities.
* **SEO & Social Cards:** Comprehensive OpenGraph tags, Twitter cards, and Schema.org `EntertainmentBusiness` JSON-LD structured data.

---

## 5. Key Interactive Features

1. **Smart WhatsApp Booking Engine:**
   * Real-time preview styled as a dark-mode WhatsApp chat bubble.
   * Compiles user inputs (Name, Phone, Service, Date, City, Notes) into a structured pre-formatted message.
   * Direct 1-click WhatsApp launcher (`https://wa.me/923243478503?text=...`) + 1-click clipboard copy.
2. **Filterable Portfolio Archive:**
   * Filter tabs: *All Shows, Sufi Qawwali, Comedy & Theater, Concerts, Stage & Broadcast*.
   * Lightbox Modal: Full-screen image preview with title, description, category tag, and ESC/backdrop close handlers.
3. **Sticky Header & Scroll Spy:**
   * Header shrinks and intensifies backdrop blur on scroll.
   * Active section highlighting based on viewport scroll position.
   * Accessible mobile drawer navigation with backdrop blur.

---

## 6. Project Directory Map

```
d:\Projects\eliyaproductionweb\
├── .gitignore               # Comprehensive Git ignore rules (Node, Vite, OS, IDE)
├── index.html               # Semantic HTML5 entry point with complete SEO metadata
├── memory.md                # Persistent project context & architecture memory (this file)
├── package.json             # NPM project manifest & scripts (dev, build, preview)
├── postcss.config.js        # PostCSS configuration for Tailwind & Autoprefixer
├── tailwind.config.js       # Tailwind theme extensions (crimson & cinema palettes, glows)
├── vite.config.js           # Vite bundler configuration
├── README.md                # Public developer & deployment documentation
├── public/                  # Static assets served as-is
│   ├── favicon.ico          # Browser tab icon (ICO)
│   ├── favicon.png          # Browser tab icon (PNG 64x64)
│   └── assets/              # Master assets
│       ├── logo.png         # Master 1024x1024 3D red EP emblem
│       ├── hero-stage.jpg   # High-res stage backdrop
│       ├── qawwali-music.jpg# Sufi Qawwali session image
│       ├── comedy-stage.jpg # Live comedy showcase image
│       ├── concert-lights.jpg# Concert lighting image
│       ├── stage-production.jpg# Stage trussing image
│       ├── camera-rig.jpg   # 4K cinema broadcast rig image
│       └── audience-cheer.jpg# Live crowd cheering image
├── src/                     # Source code
│   ├── main.js              # Modular ES6 interactive controllers & tree-shaken icons
│   └── style.css            # Tailwind base directives & custom glow utilities
└── dist/                    # Production build output (generated via npm run build)
```

---

## 7. Developer & Operational Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (http://localhost:3000)
npm run dev

# 3. Compile optimized production build (outputs to dist/)
npm run build

# 4. Preview compiled production build locally
npm run preview

# 5. Capture all high-res desktop & mobile screenshots (outputs to D:\Eliya-Production-Website\)
npm run screenshots
```

---

## 8. Exported High-Resolution Screenshots

All visual verification screenshots are generated at 2x Retina scale in `D:\Eliya-Production-Website\`:
* `01-desktop-hero.png` — Desktop 1920x1080 hero viewport and navigation.
* `02-desktop-about.png` — About Eliya Production, Arts Council collaboration, key strengths.
* `03-desktop-services.png` — 6 production services cards with booking presets.
* `04-desktop-flagship-shows.png` — Sham-e-Ishq o Mizah & The Great Laughter Night spotlight.
* `05-desktop-portfolio.png` — Filterable production gallery archive.
* `06-desktop-booking-whatsapp.png` — Interactive WhatsApp booking engine & live message bubble.
* `07-desktop-fullpage.png` — Complete pixel-perfect full-page stitch from header to footer.
* `08-mobile-hero.png` — Mobile viewport (390x844) responsive hero.
* `09-mobile-booking.png` — Mobile responsive WhatsApp booking form.
* `10-mobile-menu-drawer.png` — Mobile drawer navigation open state.

---

## 9. Deployment Runbook

1. **Vercel / Cloudflare Pages / Netlify:**
   * Root Directory: `./`
   * Build Command: `npm run build`
   * Output Directory: `dist`
2. **Standard Web Server (cPanel / Apache / Nginx):**
   * Run `npm run build` and upload the contents of `dist/` directly to `public_html/`.

