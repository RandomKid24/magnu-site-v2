# 📐 Magnus Enterprises — Design System & UI/UX Architecture

This document describes the architectural layout, core design tokens, styling values, and interaction paradigms of the **Magnus Enterprises** digital workspace.

---

## 👁️ 1. Core Design Philosophy

The visual aesthetic of the Magnus Enterprises site is guided by **Industrial Precision & Engineered Brutalism**. Every pixel represents structural integrity, accuracy, and calibrated functionality.

### Key Tenets:
- **Calibrated Grid Structures**: Solid 1px borders, dividing lines, and blueprint grids that mirror structural drafting plans.
- **Vibrant Energy Accents**: A high-voltage electric Lime color offset by deep slate and rich blacks to symbolize mechanical power and electrical switchgear industries.
- **Tactile Material Feel**: Incorporating paper grain (`bg-grain`) and mathematical dot networks (`bg-dots`) to move away from flat, standard digital templates.
- **Dynamic Physics**: Micro-interactions utilizing precise spring-physics models that make the website feel alive, tactile, and highly responsive.

---

## 🎨 2. Color Systems

The palette balances clean raw materials with sharp technical indicators:

| Token | CSS Class | Color Hex | Design Intent |
| :--- | :--- | :--- | :--- |
| **Electric Lime** | `text-lime`, `bg-lime` | `#CCFF00` | High-voltage accent. Symbolizes active status, hover highlights, and precision metrics. |
| **Lime Dark** | `text-lime-dark` | `#82A300` | Subdued structural text, headers, and focus borders. |
| **Brand Dark** | `bg-brand-dark` | `#121212` | Solid foundation, heavy steel plates, dark-theme containers. |
| **Off-White** | `bg-off-white` | `#FCFAF7` | Warm, architectural paper white used for background layers. |
| **Brand Slate** | `text-brand-slate` | `#555555` | Secondary information, specifications labels, and meta captions. |
| **Brand Border** | `border-brand-border` | `#E8E4DF` | Thin, draft-like architectural outline divider. |

---

## 🔤 3. Typography System

We use two highly legible geometric Google Fonts imported via `index.css`:
- **Primary Body Sans**: `"Inter", sans-serif` — Engineered for high readability in specification sheets, numerical data, and structural descriptions.
- **Display Serif / Space**: `"Space Grotesque", sans-serif` — Bold, modular monospace feel for high-impact uppercase titles, hero messaging, and metrics.

### Typography Hierarchy:
```
Hero Header:       text-[clamp(42px,7vw,100px)] | font-bold | tracking-tighter | uppercase
Section Titles:    text-4xl to text-7xl | font-display | uppercase | leading-[0.85]
Specifications:    text-[10px] | font-black | tracking-[0.4em] | uppercase
Captions/Indices:  text-[10px] | font-black | tracking-widest
```

---

## 💎 4. Key Visual & Layout Elements

### 📐 Blueprint Textures & Meshes
- **Natural Paper Grain (`bg-grain`)**:
  ```css
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
  ```
  Applied with low opacity (`opacity-[0.03]` or `opacity-[0.4]`) over dark layers to give a tangible, industrial blueprint texture.
- **Draft Dots (`bg-dots`)**:
  Radial dot repeating pattern representing layout sheets:
  ```css
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 24px 24px;
  ```

### ⚡ Custom UI Interactive Elements
- **Navigation Anchor Links (`nav-link`)**:
  Bold, wide-tracked text with an expanding lime divider that slides outward on hover.
- **Calibrated Primary Button (`btn-primary-custom`)**:
  Brutalist dark block button that transitions instantly into a full Electric Lime fill with dark typography upon pointer hover.
- **Calibrated Outline Button (`btn-outline-custom`)**:
  Clean transparent element featuring thick charcoal borders that transition to Lime highlights.

---

## 💫 5. Interaction & Motion Calibrations

All fluid animations leverage `framer-motion` (imported via `motion/react`) to deliver highly-engineered feedback:

### ⚙️ Interactive Specification Toggle (About Section)
- **Infrastructure Toggle Matrix**:
  Selecting a machine unit (e.g. Vertical Milling, CNC Turning) swaps specifications immediately.
- **Calibrated Specs Transitions**:
  Uses `<AnimatePresence mode="wait">` to cleanly slide old specs up while revealing the new specs from below using a duration of `0.3s`.

### ⚡ Hover Physics (Services & Products Sections)
- **Rotation Vectors**:
  Buttons and icons inside industrial cards (e.g., arrow metrics) rotate dynamically by `45 degrees` on hover with a smooth transition.
- **Grayscale Overlays**:
  Industrial product items are rendered in high-contrast grayscale (`grayscale` filter), which shifts instantly to vibrant full color and details on mouse hover.
- **Technical Markers**:
  Subtle circular targets displaying a centralized Lime LED indicator fade in smoothly at the card corners.

### 📜 Kinetic Page Scroller
- A multi-layered background scrolling system uses `useTransform` mapped to `scrollY` coordinates, translating secondary background components at customized rates (`y: grainY`), creating an elegant parallax blueprint effect.

---

## 📋 6. Content Architecture

The site layout strictly follows this sequential structure, presenting simple, direct headings while maintaining the high-fidelity design language:
1. **Why choose us?** (`Features.tsx`)
2. **Products** (`Products.tsx`)
3. **Our USP's** (`USPs.tsx`)
4. **Our Mission** (`About.tsx` & philosophy constants)
5. **Customers** (`Customers.tsx`)
6. **Services** (`Services.tsx`)
7. **Sectors we work in** (`Industries.tsx` with specific sectors: Switchgear electrical, Automobile, Agriculture, Poultry, Aeronautics)
8. **Machinery** (`Fleet.tsx`)
