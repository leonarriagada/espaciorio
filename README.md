<div align="center">

  <h1>🌿 ESPACIO RIO</h1>
  <p><strong>Premium Outdoor Lifestyle Destination & Architectural Digital Experience</strong></p>

  <p>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" /></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript_7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 7.0" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" /></a>
    <a href="https://motion.dev"><img src="https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" /></a>
  </p>

  <p>
    <a href="#-about-the-project">About</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-design-philosophy">Design System</a>
  </p>

  <hr />
</div>

## 🏛️ About The Project

**Espacio Río** is a flagship digital experience designed as the direct online extension of a premier architectural outdoor lifestyle destination. Moving beyond generic commercial directories and conventional corporate layouts, Espacio Río translates low-rise contemporary architecture, biophilic integration, gastronomy, and spatial flow into an immersive, editorial web environment.

> *"Entering the website feels like walking into Espacio Río itself."*

---

## ✨ Key Features

- **🏞️ Spatial Narrative Flow**: Designed around a physical walkthrough sequence (*Arrive → Discover → Explore → Connect → Experience*).
- **🌍 The Five Worlds**: Dynamic showcase highlighting the core pillars of the destination: Architecture, Outdoor & Nature, Gastronomy, Lifestyle & Shopping, and Events.
- **🎨 Editorial Architecture & Biophilic Aesthetics**: Natural stone, white facades, graphite, high-transparency glass, and warm wood accents paired with rich greenery.
- **⚡ Motion & Fluid Micro-Interactions**: Framer Motion integration for organic transitions, smooth scroll animations, and spatial hover effects.
- **📱 Responsive Layout & Container Engineering**: Mobile-first design crafted for fluid viewing on mobile, tablet, desktop, and ultra-wide displays.
- **📍 Interactive Tenant & Location Guide**: Interactive directory highlighting curated brands, dining spaces, and physical accessibility.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Server Components, routing & optimization |
| **UI Library** | [React 19](https://react.dev/) | Concurrent UI rendering |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS & modern engine |
| **Animations** | [Motion (Framer Motion)](https://motion.dev/) | Smooth layout animations & transitions |
| **Icons** | [Lucide React](https://lucide.dev/) | Lightweight, clean SVG icon set |
| **Language** | [TypeScript 7](https://www.typescriptlang.org/) | End-to-end type safety |
| **Typography** | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) & [Geist](https://vercel.com/font) | Editorial serif display paired with clean sans-serif |

---

## 📁 Project Structure

```bash
espaciorio/
├── public/                 # Static assets, logos, and favicon
└── src/
    ├── app/                # Next.js App Router (pages & layouts)
    │   ├── globals.css     # Design system tokens & base styles
    │   ├── layout.tsx      # Root HTML structure & SEO metadata
    │   └── page.tsx        # Main spatial landing page
    ├── components/         # Modular React components
    │   ├── layout/         # Header, Navigation, Footer, Mobile Menu
    │   ├── motion/         # Reusable animation wrappers & primitives
    │   ├── sections/       # Hero, FiveWorlds, Gallery, Location, Tenants, CTA
    │   └── ui/             # Reusable UI primitives (Buttons, Cards, Modals)
    ├── data/               # Structured content & tenant catalogs
    ├── lib/                # Utilities & helper modules
    └── types/              # TypeScript definitions & interface models
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 20+** installed along with your preferred package manager (`pnpm`, `npm`, `yarn`, or `bun`).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/leonarriagada/espaciorio.git
   cd espaciorio
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or npm install / yarn install / bun install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live experience.

---

## 📐 Design Philosophy & Palette

Espacio Río avoids tech-heavy or overly futuristic aesthetics in favor of **real, constructible, timeless architecture**:

- 🏛️ **Espacio Black & Carbon**: Deep structural base tones (`#080A0D`, `#151719`)
- 📄 **Ivory & Pure White**: Clean architectural surfaces (`#F5F3EA`, `#FFFFFF`)
- ☕ **Earth Coffee & Champagne**: Natural warmth and accents (`#C48B5E`, `#FFE9A3`)
- 🌊 **Río Blue**: Signature brand element highlight (`#0050A0`)
- ✒️ **Editorial Typography**: Cormorant Garamond display headings paired with Geist UI typography

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/leonarriagada/espaciorio/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is released under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Crafted with precision for <strong>Espacio Río</strong></p>
</div>
