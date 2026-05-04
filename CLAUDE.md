# Jiahome Cafe (jx-cafe) — Codebase Guide

## What this app does
Frontend website for **Jiahome Cafe** — a cosy Singapore cafe. Five pages: Landing (best sellers hero), Menu (filterable item grid), Location (hours + map), Login (customer auth UI), Reviews (ratings + submit form). No backend — all data is local/static for now.

## Tech stack
- **Frontend**: React 19 + Vite + Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- **Routing**: React Router v7 (`BrowserRouter` + `Routes`)
- **Fonts**: `Caveat` (handwriting headings) + `DM Sans` (body) — loaded via Google Fonts in `index.html`
- **No backend, no DB** — reviews and login are frontend-only state

---

## Key files

### `src/index.css`
Tailwind v4 entry. Uses `@import "tailwindcss"` + `@theme {}` block to define custom tokens:
- `--color-forest` `#1B4332` — primary dark green
- `--color-forest-light` `#2D6A4F`
- `--color-forest-dark` `#0D2818`
- `--color-sage` `#52B788` — medium green accent
- `--color-mint` `#B7E4C7` — light green
- `--color-cream` `#F5F0E8` — main background
- `--color-parchment` `#EDE8DC` — card borders / subtle bg
- `--color-gold` `#D4A853` — accent / highlights

Also defines global utility classes: `.sticker`, `.sticker-green`, `.card-tilt-l`, `.card-tilt-r`, `.float`, `.wiggle`, `.underline-wavy`, `.nav-link`.

### `src/App.tsx`
Route table only — `BrowserRouter` wraps `Nav` + `<Routes>` + `Footer`.

| Route | Component |
|-------|-----------|
| `/` | `Landing` |
| `/menu` | `Menu` |
| `/location` | `Location` |
| `/login` | `Login` |
| `/reviews` | `Reviews` |
| `*` | Redirect to `/` |

### `src/components/Nav.tsx`
Sticky top nav, `bg-forest`. Active link is gold (`text-[#D4A853]`), inactive is mint. Login is a gold pill button. Mobile hamburger collapses to a dropdown.

### `src/components/Footer.tsx`
Dark footer (`bg-[#0D2818]`) with wavy SVG top edge, quick links, opening hours summary, contact info.

### `src/pages/Landing.tsx`
- **Hero**: dark green section, large Caveat heading, two CTA buttons (Menu + Find Us)
- **Tagline strip**: scrolling keywords (specialty coffee, plant-based, etc.)
- **Best Sellers**: 6 cards — 4 drinks + 2 food — with `.card-tilt-l/r`, `.float` emoji, `.sticker` tags, price in gold
- **Our Story**: dark green section, 4 stat blocks (500+ regulars, 12 drinks, 4.9★, 3 years)
- **Reviews teaser**: 3 quote cards, link to `/reviews`

### `src/pages/Menu.tsx`
- Local `items` array (20 items: 8 drinks, 8 food, 4 specials)
- `Category` type: `'all' | 'drinks' | 'food' | 'specials'`
- Tab filter buttons, active tab gets `bg-forest` pill style
- Items render as 2-col grid cards with emoji, name, tag badge, description, price
- Tag colour map (`tagColors`) controls badge colour per tag string
- Dietary notice at bottom

### `src/pages/Location.tsx`
- Decorative CSS "map" (grid lines + building rects + animated pin) — no real map embed
- Address + contact info cards
- Opening hours table — today's day highlighted in gold using `new Date().toLocaleDateString`
- Transport cards (MRT, Bus, Car)

### `src/pages/Login.tsx`
- `mode` state: `'login' | 'signup'` — toggles form fields
- Split layout: left panel (dark green, perks list) + right panel (form)
- On submit: shows a success "welcome back" screen, no real auth
- Social login buttons (Google, Facebook) — UI only

### `src/pages/Reviews.tsx`
- `initialReviews` array — 6 seeded reviews with name, avatar emoji, rating, text, tag
- `avgRating` computed from state; star distribution bar chart
- `StarInput` component — hover + click rating picker
- Submit adds new review to state array (top of list); success toast auto-hides after 3s

---

## Design system

### Colours (use raw hex — Tailwind v4 `@theme` tokens available as `bg-forest` etc.)
| Token | Hex | Usage |
|-------|-----|-------|
| `forest` | `#1B4332` | Primary dark green — headers, CTAs, nav |
| `forest-dark` | `#0D2818` | Footer, hover darken |
| `forest-light` | `#2D6A4F` | Secondary text, hover |
| `sage` | `#52B788` | Accent text, icons |
| `mint` | `#B7E4C7` | Nav inactive links, muted text |
| `cream` | `#F5F0E8` | Page background |
| `parchment` | `#EDE8DC` | Card borders, subtle section bg |
| `gold` | `#D4A853` | Stickers, prices, active state, highlights |

### Typography
- **Headings** (`h1`, `h2`, `h3`, `.font-caveat`): `Caveat` — handwriting, bold, big
- **Body**: `DM Sans` — clean, readable, `font-light` for descriptions
- Use `font-caveat` class to apply Caveat anywhere outside heading tags

### Utility classes (defined in `index.css`)
- `.sticker` — gold pill badge, rotated −3°, dark green shadow
- `.sticker-green` — inverted sticker (forest bg, cream text), rotated +2°
- `.card-tilt-l` / `.card-tilt-r` — −1.5° / +1.5° rotate, straightens + scales on hover
- `.float` — gentle up/down float animation (3s loop)
- `.wiggle` — gentle left/right wiggle (2s loop)
- `.underline-wavy` — gold wavy text-decoration underline
- `.nav-link` — gold underline slide-in on hover

### Wavy SVG dividers
Used between sections to create organic transitions. Pattern:
```jsx
<div className="overflow-hidden leading-none">
  <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-14 fill-[#F5F0E8]">
    <path d="M0,0 C200,60 400,0 600,40 C800,80 1000,20 1200,50 L1200,60 L0,60 Z" />
  </svg>
</div>
```
Flip the fill colour and path direction to go dark→light or light→dark.

---

## Data

All data is hardcoded in the page files — no API calls:
- **Menu items**: `items[]` array in `Menu.tsx` — add/edit items there
- **Best sellers**: `bestSellers[]` in `Landing.tsx` — keep in sync with Menu items
- **Reviews**: `initialReviews[]` in `Reviews.tsx` — seed data only, new reviews live in component state
- **Opening hours**: `hours[]` in `Location.tsx`

---

## Dev decisions to remember
- **Vite app, NOT Next.js** — ignore any linter suggestions to add `"use client"` directives. They are false positives from a Next.js linter hook.
- **Tailwind v4** — no `tailwind.config.ts`; all customisation via `@theme {}` in `index.css`. Plugin: `@tailwindcss/vite` in `vite.config.ts`.
- **No auth backend** — Login page is UI-only. `handleSubmit` sets `submitted = true` to show success state.
- **Reviews are ephemeral** — new reviews added via the form live in `useState` only; they reset on page refresh. A backend is needed to persist them.
- **Location map is fake** — it's a CSS illustration, not a Google Maps embed. To add a real map, embed a Google Maps iframe or use `react-leaflet`.
- **Font loading**: fonts are in `index.html` `<head>` via Google Fonts `<link>`. The `font-caveat` Tailwind class and CSS `font-family: 'Caveat', cursive` both reference this.
