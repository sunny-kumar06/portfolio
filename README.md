# Sunny Kumar — Modern Premium Animated Developer Portfolio

A modern, aesthetic, recruiter-friendly developer portfolio website created for **Sunny Kumar** (Pre-Final Year B.Tech CSE Student & MERN Stack Developer).

Built with **React 19**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features & Visual Highlights

- **Dark Premium Aesthetics**: Deep obsidian dark background (`#070709`), subtle purple/indigo/cyan glows, glassmorphic panels, and glowing borders.
- **Hero Section**:
  - Full-screen entrance with status badge: `● Open to Web Development Internships`.
  - Accurate headline: *Pre-Final Year B.Tech CSE Student & MERN Stack Developer*.
  - Interactive right-side code terminal with tabs (`server.js`, `hotelSchema.js`, `binarySearch.js`, `system.env`) and syntax highlighting.
  - Direct CTA buttons: "View My Projects" & "Download Resume".
- **About Me**:
  - Full personal narrative detailing university background, full-stack journey, and DSA learning.
  - 6 supporting highlight cards: *B.Tech CSE, MERN Stack Developer, Backend Enthusiast, DSA Learner, AI/ML Explorer, Open to Internships*.
- **Interactive Skills**:
  - Categorized under *Frontend*, *Backend*, *Database*, and *Core Competencies & Tools*.
  - Category filters and clean cards with technology icons without fake skill percentages.
- **Experience Timeline**:
  - Vertical glowing timeline showcasing *ACM Student Member* (Feb 2026 – Present) and the *Horizon 8 Hackathon*.
- **Featured Achievement Spotlight**:
  - Highlighting **2nd PLACE** at the **Horizon 8 Hackathon — TANSAM** (Joy University) with animated trophy badge, event summary, and competencies.
- **Things I've Built (Projects)**:
  - Interactive category filter: `ALL`, `FULL STACK`, `BACKEND`, `FRONTEND`.
  - Featured projects:
    1. **MakeMemory** (Full Stack / Backend hotel booking engine)
    2. **CRUD Web Application** (Express SSR with MongoDB & MySQL)
    3. **ServeDesk** (Frontend home appliance booking)
    4. **Spotify Clone** (Frontend music streaming UI)
    5. **Swastik Photography** (Frontend photography event booking)
  - Clear, honest status badges: *Render Hosted / Deployment Active • Source Coming Soon* (zero fake URLs).
- **Education**:
  - Joy University (B.Tech CSE, 2024–2028), Mahesh Singh Yadav College (High School), British English School.
- **Certification**:
  - *TCS iON Career Edge - Young Professional* credential card with skills verified.
- **Contact & Footer**:
  - Recruiter-focused CTA, direct `mailto:sk5962779@gmail.com`, LinkedIn link (`www.linkedin.com/in/sunny-kumar-sny`), and location (*Gaya, Bihar, India*).
- **Recruiter Resume Modal**:
  - Clean printable document modal accessible from the Navbar and Hero CTA.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠 Project Structure

```
sunny-kumar-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolioData.js       # Central data file for skills, projects, and bio
    └── components/
        ├── Navbar.jsx              # Sticky navbar with blur on scroll & mobile drawer
        ├── Hero.jsx                # Full-screen hero section
        ├── HeroTerminal.jsx        # Interactive terminal visual (replaces stock art)
        ├── About.jsx               # About narrative & 6 highlight cards
        ├── Skills.jsx              # Category pills and skill cards
        ├── Experience.jsx          # Vertical glowing timeline
        ├── Achievement.jsx         # 2nd Place Horizon 8 Hackathon spotlight
        ├── Projects.jsx            # Filterable project gallery
        ├── ProjectCard.jsx         # Glassmorphism project cards
        ├── Education.jsx           # Academic journey
        ├── Certification.jsx       # TCS iON Career Edge credential
        ├── Contact.jsx             # Final CTA and direct contact triggers
        ├── ResumeModal.jsx         # Recruiter-ready resume modal
        ├── CustomCursor.jsx        # Desktop ambient glowing cursor
        ├── LinkedinIcon.jsx        # Crisp SVG LinkedIn icon
        └── Footer.jsx              # Minimalist footer
```
