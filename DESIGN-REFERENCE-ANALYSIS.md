# DESIGN REFERENCE ANALYSIS
## Compiled from 5 Framer AI Agency Templates

> **Sites analysed:** Agent (agent.framer.wiki) · Aithor (aithor.framer.website) · Calisto (calisto.framer.website) · Orbai (orbai-template.framer.website) · Sadewa (sadewa.framer.website)
> **Generated:** 2026-06-15 | **Purpose:** Redesign foundation for Carbonium Agency website

---

## 1. COLOR SYSTEM

### 1.1 Backgrounds

| Site | Page bg | Surface/card bg | Elevated sections |
|---|---|---|---|
| Agent | `#f8f9fa` | `#ffffff` | `#000000` (dark CTAs) |
| Aithor | `#f0f0f0` | `#ffffff` | `#151619` (dark CTAs) |
| Calisto | `#f5f5f5` | `#ffffff` | — |
| Orbai | `#f5f5f5` | `#f5f5f5` (same!) | — |
| Sadewa | `#ffffff` | `#f3f3f3` | `#131313` (dark footer) |

**Pattern:** 4/5 sites use a very light gray page background (not pure white). Cards are white or match the page. Some sites (Aithor, Sadewa) use a near-black (`#131313–#151619`) section for contrast.

**For Carbonium:**
- Page bg: `#F8F9FA` (current) — correct
- Card bg: `#FFFFFF` — correct
- Consider a `#0F0F0F` dark CTA section to match the language

### 1.2 Text Colors

| Site | Primary text | Secondary text | Muted text |
|---|---|---|---|
| Agent | `#000000` | `#4e5b6d` | `#9ba5b5` |
| Aithor | `#000000` / `#0a0a0a` | `#4f4f4f` | `#767676` |
| Calisto | `#000000` / `#0d0d0d` | `#525252` | `#666666` |
| Orbai | `#000000` | — | — |
| Sadewa | `#000000` / `#131313` | `#797979` | `#d3d3d3` |

**Pattern:** Primary text is black or near-black. Secondary text is mid-gray (40–50% brightness). No site uses a warm gray — all are neutral or cool-tinted.

### 1.3 The Single Accent Color

**`#0000ee` (Electric Blue, hsl 240° 100% 47%) appears as primary accent in 4/5 sites.**

| Site | Accent | Uses |
|---|---|---|
| Agent | `#0000ee` as secondary | 2,554 |
| Aithor | `#0000ee` as primary | 3,956 |
| Calisto | `#0000ee` as primary | 822 |
| Orbai | `#0000ee` as ONLY accent | 824 |
| Sadewa | `#0000ee` as primary | 5,662 |

This is the defining accent of the entire AI agency Framer template design language. It appears on links, borders, active states, and CTAs.

**For Carbonium:** Replace `#0000ee` with Carbonium's brand blue `#1B6CE8`. Same role, same behavior — just swapped hue. This color powers links, borders, CTA backgrounds, and accent elements.

### 1.4 Secondary Colors (site-specific — not shared)

| Site | Secondary | Usage |
|---|---|---|
| Agent | `#37ea9e` mint green | CTAs, highlights |
| Aithor | `#ff3700` orange-red | Radial hero bloom, minimal |
| Calisto | `#308dff` / `#59afff` light blue | Background gradients |
| Orbai | None | — |
| Sadewa | `#98fe00` lime, `#ff9500` orange | Tagline pills, sparse |

**Pattern:** Secondary colors are used very sparingly (1–5% of instances). Most are used for one or two decorative moments.

### 1.5 Complete Color Vocabulary Per Site (for token reference)

```
Agent:     bg #f8f9fa · card #fff · text #000 · sec #4e5b6d · muted #9ba5b5 · accent #0000ee
Aithor:    bg #f0f0f0 · card #fff · text #000/#0a0a0a · sec #4f4f4f · muted #767676 · accent #0000ee
Calisto:   bg #f5f5f5 · card #fff · text #000 · sec #525252 · muted #666666 · accent #0000ee
Orbai:     bg #f5f5f5 · card #f5f5f5 · text #000 · accent #0000ee (minimal palette — only 4 colors)
Sadewa:    bg #fff · card #f3f3f3 · text #000/#131313 · sec #797979 · muted #d3d3d3 · accent #0000ee
```

---

## 2. TYPOGRAPHY

### 2.1 Font Families

| Site | Primary (dominant) | Display (decorative) | Mono |
|---|---|---|---|
| Agent | Geist (1479 uses) | Times New Roman (editorial serif, 301) | — |
| Aithor | Geist (614) + Halant (441 serif display) | Times New Roman (312) | Fragment Mono |
| Calisto | Manrope (634) | Times New Roman (155) | — |
| Orbai | Inter (366) + Satoshi (171 display) | Times New Roman (120) | — |
| Sadewa | Satoshi (2015) | Times New Roman (224) | Roboto Mono (443) |

**Key pattern — Times New Roman appears in ALL 5 sites.** It is used as a decorative serif contrast element (not for body copy). Typical use: section eyebrow labels, pull quotes, or display text mixed with the main sans-serif.

**Sans-serif families used across sites:**
- Geist — 2 sites (Agent, Aithor)
- Satoshi — 2 sites (Orbai, Sadewa)
- Manrope — 1 site (Calisto)
- Inter — 1 site (Orbai, also present in others as fallback)

**For Carbonium:** Current choice of DM Sans + Inter is good. To adopt the reference language, a possible upgrade: **Geist or Satoshi** as primary + **Inter** body. Times New Roman accent for decorative section labels is an optional standout technique.

### 2.2 Heading Scale

| Site | H1 size | H1 weight | H1 line-height | H1 letter-spacing |
|---|---|---|---|---|
| Agent | 64px | 500 | 64px (1.0) | -4px |
| Aithor | 88px | 600 | 92.4px (1.05) | -3.52px |
| Calisto | 96px | 500 | 105.6px (1.1) | -4.8px |
| Orbai | 100px | **400** | 120px (1.2) | **-6px** |
| Sadewa | 80px | **700** | 72px (0.9) | -3.2px |

**Key patterns:**
- H1 is large — 64px minimum, up to 100px
- Negative letter-spacing is mandatory: -3px to -6px. This is the signature editorial feel.
- Line-height is tight: 1.0–1.1 (not 1.5 like body copy)
- Weight varies: 400 (light, editorial — Orbai), 500 (balanced — Agent, Calisto), 600–700 (bold — Aithor, Sadewa)

| Level | Cross-site average size | Pattern |
|---|---|---|
| H2 | 48–56px | weight 500, letter-spacing -1.5px to -2px |
| H3 | 20–44px | weight 500, letter-spacing -0.5px to -1px |
| H4 | 18–24px | weight 500–600 |

### 2.3 Body Copy

| Site | Body size | Weight | Line-height |
|---|---|---|---|
| Agent | 16px | 400 | normal |
| Aithor | 14.4px | 600 (unusual) | 17.28px |
| Calisto | 14px | 600 (unusual) | 16.8px |
| Orbai | 16px | 400 | normal |
| Sadewa | 16px | 400 | normal |

**Pattern:** 16px / 400 is standard. Aithor and Calisto use a smaller, slightly heavier body (14–14.4px / 600) for a compact editorial feel.

### 2.4 Eyebrow / Label Text

All sites use small uppercase or small-caps eyebrow labels above headings, typically 11–13px / 400–600 weight / letter-spacing +0.5px to +1px.

---

## 3. SPACING & LAYOUT

### 3.1 Spacing Scale

**All 5 sites share the same base unit: 2px.**

Common spacing values (across all sites):
```
4 · 8 · 12 · 16 · 20 · 24 · 30 · 40 · 48 · 60 · 64 · 80 · 100 · 120 · 160
```

Section-level vertical padding (desktop):
- Agent: 80–96px
- Aithor: 80–200px
- Calisto: 80–160px
- Orbai: 80–160px
- Sadewa: 80–170px

**For Carbonium:** Use 100–120px vertical section padding on desktop. Current `section { padding: 80px 0 }` is at the low end but acceptable.

### 3.2 Container Widths

| Site | Max-width | Side padding |
|---|---|---|
| Agent | 1200px | 96px |
| Aithor | 1400–1500px | 40px |
| Calisto | 1280–1440px | 80px |
| Orbai | 1200–1280px | 0–10px |
| Sadewa | 1240px | 0–64px |

**Pattern:** 1200–1280px is the most common max-width. Aithor goes wider (1400px) to create an expansive editorial feel.

**For Carbonium:** 1200px max-width (current) is correct and consistent with 3/5 reference sites.

### 3.3 Grid Patterns

| Columns | Sites using it |
|---|---|
| 2-column | Calisto, Sadewa, Aithor |
| 3-column | Agent (feature grid), Calisto |
| 4-column | Aithor (dominant), Calisto, Sadewa |
| 6-column (bento) | Agent, Aithor, Sadewa |

**Gap values:**
- Card grids: 12–20px gap
- Section grids: 24–40px gap
- Hero 2-col: 24–64px gap

**All sites are overwhelmingly flex-based.** CSS Grid used selectively for feature/bento grids and complex card layouts.

### 3.4 Card Grid Gap Tokens

```css
--gap-sm:  12px  /* tight card grids */
--gap-md:  16px  /* standard card grids */
--gap-lg:  24px  /* spacious card/feature grids */
--gap-xl:  40px  /* hero / content splits */
```

---

## 4. MOTION & ANIMATION

### 4.1 Duration Tokens

| Site | Fastest | Standard | Slow |
|---|---|---|---|
| Agent | 100ms | — | — |
| Aithor | 200ms (sm) | 500ms (lg) | — |
| Calisto | 200ms (sm) | — | — |
| Orbai | — (transition: all) | — | — |
| Sadewa | 200ms (sm) | 400ms (md) | 1000ms / 1900ms |

**For Carbonium:**
```css
--dur-fast:   100ms  /* micro interactions */
--dur-base:   200ms  /* standard hover/focus */
--dur-slow:   400ms  /* scroll reveals, card entries */
--dur-hero:   800ms  /* hero entrance */
```

### 4.2 Easing Functions

**The dominant easing across 3/5 sites:** `cubic-bezier(0.44, 0, 0.56, 1)` — a smooth ease-in-out.

Sadewa also uses `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design standard ease) for width animations.

Agent uses `cubic-bezier(0.4, 0, 1, 1)` (ease-in) for fill transitions.

**Recommended for Carbonium:**
```css
--ease-base:  cubic-bezier(0.44, 0, 0.56, 1)  /* standard — smooth in/out */
--ease-out:   cubic-bezier(0, 0, 0.56, 1)      /* exits and reveals */
--ease-in:    cubic-bezier(0.44, 0, 1, 1)      /* entries */
```

### 4.3 Common Transitions

Used across sites:
```css
transition: background, box-shadow;   /* button hover */
transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1);  /* link hover */
transition: all;                      /* fallback */
```

### 4.4 Animations

**All 5 sites use scroll-linked animations** (Framer's built-in, equivalent to Intersection Observer in vanilla JS).

Keyframe animations are minimal — mostly:
- Loading spinner (Framer internal)
- Blinking cursor (Aithor — for typing effect)
- Background-position sweep (Agent — shimmer on gradient)
- Width reveal (Sadewa — stats bar fill)

**Pattern:** Animations are triggered by scroll, not on load. No entrance animations on initial page load visible above the fold.

---

## 5. COMPONENT PATTERNS

### 5.1 Buttons

| Site | Style | Radius | Background | Text |
|---|---|---|---|---|
| Agent | Solid | 12px | `#37ea9e` mint | `#000` |
| Aithor | Pill outline | 50px | `rgba(0,0,0,0.15)` | `#000` |
| Calisto | Rounded solid | 12px | `#ffffff` | `#000` |
| Orbai | Pill solid | 40px | `#000000` | `#000` |
| Sadewa | Flat (no radius) | 0px | — | `#000` |

**Button patterns emerging:**
1. **Pill / fully-rounded** (Aithor, Orbai): `border-radius: 40–50px` — gives a modern, approachable feel
2. **Rounded rectangle** (Agent, Calisto): `border-radius: 8–12px` — cleaner, more B2B
3. **Outline variant**: Transparent background, 1px border in accent color — used as secondary CTA in all sites

**Primary CTA pattern:**
```css
background: var(--accent);  /* solid fill */
color: #ffffff;
border-radius: 8–12px;      /* or 40px for pill */
padding: 12px 24px;
font-weight: 500–600;
font-size: 14–16px;
```

**Secondary CTA pattern:**
```css
background: transparent;
border: 1px solid var(--accent);   /* or 1px solid currentColor */
color: var(--accent);
border-radius: same as primary;
```

### 5.2 Cards

| Site | Background | Radius | Shadow type |
|---|---|---|---|
| Agent | `#ffffff` | 20px | `rgba(0,0,0,0.05) 0px 2px 2px` (very light) |
| Aithor | `#ffffff` | 10px | Multi-layer xs (0.02–0.17 opacity) |
| Calisto | `#ffffff` | 50px (very rounded!) | Multi-layer xs |
| Orbai | `#f5f5f5` | 16px | Multi-layer xs + white inset highlight |
| Sadewa | `#ffffff` | 12px | Multi-layer xs |

**The signature card shadow recipe (appears in 4/5 sites):**
```css
box-shadow:
  rgba(0,0,0,0.17) 0px 0.602187px 1.56569px -1.5px,
  rgba(0,0,0,0.14) 0px 2.28853px   5.95019px -3px,
  rgba(0,0,0,0.02) 0px 10px        26px      -4.5px;
```
This creates an ultra-soft, physically accurate shadow that disappears at distance — much better than a flat `box-shadow: 0 2px 20px rgba(0,0,0,0.08)`.

**Orbai's elevated card (standout technique):**
```css
background: #f5f5f5;
box-shadow:
  rgba(0,0,0,0.08) 0px 0.706592px 0.706592px -0.666667px,
  rgba(0,0,0,0.07) 0px 6.8656px   6.8656px   -2.66667px,
  rgba(0,0,0,0.02) 0px 30px       30px        -4px,
  rgb(255,255,255) 0px 3px 1px 0px inset;  /* white top highlight */
```
The white inset creates a subtle inner glow on the top edge — looks 3D without being heavy.

### 5.3 Navigation

| Site | Background | Padding | Position | Border-bottom |
|---|---|---|---|---|
| Agent | transparent | — | relative/sticky | none |
| Aithor | `#f0f0f0` | 10px 40px | relative | none |
| Calisto | `#f5f5f5` | 2px | sticky | subtle shadow |
| Orbai | `rgba(245,245,245,0.2)` frosted | 12px 32px | relative | none |
| Sadewa | none specified | 15px 20px | relative | none |

**Pattern:** Nav background matches page background or is slightly transparent. No separate nav bar color. Sticky positioning uses `z-index: 10`.

**Nav link style:** All sites use `color: #000000` for nav links, with hover going to accent color or underline. No borders, no backgrounds on nav items.

**CTA in nav:** All sites have a CTA button in the navigation — outline or solid, smaller than hero CTA.

### 5.4 Hero Sections

**Consistent hero structure across all 5:**
1. Eyebrow label (small, uppercase or weighted)
2. H1 headline (large, tight, negative letter-spacing)
3. Short subheadline paragraph (2–3 lines, secondary color)
4. 1–2 CTA buttons side by side
5. Social proof / logo wall below (3/5 sites)

**Hero visual elements (right column or background):**
- Agent: Bento-style dashboard card
- Aithor: Dark background with orange radial glow at bottom
- Calisto: Feature screenshot/mockup
- Orbai: Full-width video or dark image
- Sadewa: Bold typography, minimal visuals

**Logo wall:** 3/5 sites show client/partner logos immediately after the hero. Pattern: horizontal scrolling row of grayscale logos.

### 5.5 Footer

| Site | Background | Padding-top | Text color | Columns |
|---|---|---|---|---|
| Agent | matches page | 64px | `#000` | 4 |
| Aithor | `#e5e5e5` (darker than page) | — | `#000` | 4 |
| Calisto | `#f5f5f5` | — | `#000` | 4 |
| Orbai | `#f5f5f5` | 160px | `#000` | 4 |
| Sadewa | `#131313` (dark!) | 170px | `#000`/white mix | 4 |

**Pattern:** 4-column footer (logo+tagline, services, company, contact) is universal. Footer padding-top is generous: 64–170px.

**Sadewa dark footer** (`#131313`) is a standout technique — creates a strong visual anchor at the bottom of the page.

---

## 6. SHARED PATTERNS (The Design Language)

These are the elements ALL 5 sites have in common. This is the core design language.

### 6.1 The Non-Negotiables

1. **`#0000ee`-equivalent electric blue as the single accent** — on links, CTAs, borders, tags. Never mixed with multiple brand colors. (Carbonium equivalent: `#1B6CE8`)

2. **Near-black text on light-gray backgrounds** — not `#000` on `#fff`. The slight gray background reduces harsh contrast and feels more premium. (`#f5f5f5` or `#f8f9fa` page background)

3. **Negative letter-spacing on headings** — every site without exception. Range: -2px to -6px on h1. Without this, headings feel generic.

4. **Large section padding** — 80px minimum on desktop, 100–120px for premium feel. The whitespace IS the design.

5. **Multi-layer micro-shadows on cards** — not a flat `box-shadow: 0 4px 12px`. The physically accurate layered formula creates depth without looking heavy.

6. **1px inset border as card border** — `rgb(0,0,0) 0px 0px 0px 1px inset` (appears in Aithor, Calisto, Orbai, Sadewa). Used for form inputs, toggle buttons, secondary card borders.

7. **Scroll-linked animations** — all 5 use Intersection Observer / Framer scroll triggers. Reveals are subtle: opacity 0→1, translateY 20px→0. Nothing dramatic.

8. **200ms base transition with cubic-bezier(0.44, 0, 0.56, 1)** — appears in 3/5 sites. Smooth, not bouncy.

9. **2px spacing base** — all spacing is multiples of 2. No odd numbers.

10. **Filled SVG icons (not stroke)** — all 5 sites use solid/filled icons. The reference design language is NOT a stroke-icon system.

### 6.2 Typographic Signatures

- **Times New Roman as a decorative serif contrast** (appears in 4/5 sites) — used in eyebrows, section labels, or pull quotes. NOT for body copy. Creates a sophisticated editorial tension with the sans-serif.
- **Large H1 (64–100px)** — hero headings are dramatically larger than typical agency sites
- **Tight heading line-height (1.0–1.1)** — headlines almost collapse into each other for editorial density
- **Small body at 14–16px** — not over-large. Body copy is subordinate to headings.

### 6.3 Section Order (Common Pattern)

From the reading order analysis across all 5 sites:
```
Nav → Hero (headline + CTA) → Logo Wall (social proof) → Features/Services →
How It Works (numbered steps) → Testimonials → Pricing → FAQ → CTA Banner → Footer
```

---

## 7. STANDOUT ELEMENTS WORTH BORROWING

These are techniques unique to individual sites that Carbonium should consider adopting.

### 7.1 Orbai — Surface-Tinted Cards + White Inset Glow
Instead of white cards on gray background, use gray cards on gray background with a white inset highlight:
```css
.card {
  background: #f5f5f5;  /* same as page bg */
  box-shadow:
    rgba(0,0,0,0.08) 0px 6.8656px 6.8656px -2.66667px,
    rgba(0,0,0,0.02) 0px 30px 30px -4px,
    rgb(255,255,255) 0px 3px 1px 0px inset;
}
```
Creates a recessed, material-feel card that doesn't "pop" with whiteness.

### 7.2 Aithor — Radial Bloom Hero Background
Bottom-up radial gradient that creates a light bloom behind the headline:
```css
.hero {
  background-image: radial-gradient(42.6% 50% at 50% 100%, 
    rgba(27, 108, 232, 0.25) 0%,   /* Carbonium blue variant */
    transparent 100%
  );
}
```
Works with any accent color. Gives the hero depth without an image.

### 7.3 Sadewa — Dark Footer Section
The `#131313` footer creates a strong page anchor and is memorable:
```css
.footer {
  background: #0F0F0F;
  color: #ffffff;
  padding-top: 120px;
}
```
Carbonium could adopt this — the dark footer contrasts with the light page and feels premium.

### 7.4 Sadewa — Monospace Accent for Stats
Using a mono font (Roboto Mono, Geist Mono) for numbers and stats only:
```html
<span style="font-family: 'Roboto Mono', monospace;">312%</span>
<span> ROI increase</span>
```
Creates a "data terminal" feel for metrics — highly appropriate for an AI agency.

### 7.5 Agent — Animated Number/Stat Counter
Agent uses the `number-flow` library for animated incrementing numbers. CSS custom properties:
```css
--_number-flow-d-opacity: 0;
--_number-flow-d: 0;
```
Current Carbonium `countUp()` in `main.js` achieves the same effect — keep it.

### 7.6 Calisto — Pill Badges for Category Labels
Service/feature labels use `border-radius: 50px` (fully rounded) with the accent color border:
```css
.tag {
  background: transparent;
  border: 1px solid #0000ee;
  border-radius: 50px;
  color: #0000ee;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
```

### 7.7 Aithor — Very Large Type with Contrast Serif Mix
Mixing 88px Geist with 40px Halant serif creates visual interest without imagery:
```html
<h1>
  <span style="font-family: 'DM Sans'">We Build The AI</span>
  <em style="font-family: 'Times New Roman'; font-style: italic;">That Runs</em>
  <span style="font-family: 'DM Sans'">Your Business.</span>
</h1>
```
For Carbonium: could use italic Times New Roman for one phrase in the hero H1.

### 7.8 Logo Wall with Gradient Fade-Edges
All sites with logo walls use `mask-image` or a gradient overlay to fade logos into the edges:
```css
.logo-wall {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}
```

### 7.9 Numbered Steps Section (Calisto, Sadewa)
Process/how-it-works presented as numbered steps with large numerals:
```html
<div class="step">
  <span class="step__num">01</span>  <!-- 64px, 500 weight, accent color -->
  <h3>Discovery & Analysis</h3>
  <p>...</p>
</div>
```
The large numbered format works better than icon-led process sections for AI agencies.

### 7.10 Aithor — Stats Section Below Hero
Immediately after the hero, a horizontal stats bar: `[312% ROI] [48h delivery] [200+ clients]`. Creates trust before scrolling. Very compact (single row, no section padding).

---

## 8. WHAT TO APPLY TO CARBONIUM

### Priority 1 — Fix Now (Deviations from the design language)
- [ ] Letter-spacing on H1/H2: Add `-2px` to `-3px` letter-spacing to hero headings
- [ ] Replace current `0 2px 20px rgba(0,0,0,0.08)` card shadow with the multi-layer xs recipe
- [ ] Change icon library from stroke to **filled** icons (current site uses stroke — mismatches the reference)
- [ ] Body copy: Consider reducing from 18px → 16px (reference sites use 14–16px)

### Priority 2 — Enhance (Adopt standout techniques)
- [ ] Dark `#0F0F0F` footer (adopt Sadewa/Aithor pattern — replaces current light footer)
- [ ] Radial gradient hero bloom (subtle `#1B6CE8` at 15% opacity radiating from bottom of hero)
- [ ] Monospace font for stats/numbers (add Roboto Mono or Geist Mono, used only for `<span>` around numbers)
- [ ] Pill-style service/category tags (`border-radius: 50px`, 1px accent border)
- [ ] Logo wall with gradient fade-edges (mask-image)

### Priority 3 — Consider for Future Revision
- [ ] Times New Roman accent for italic phrases in headings (editorial sophistication)
- [ ] Increase section padding from 80px → 100–120px on desktop
- [ ] Numbered steps section for the "How it works" flow

---

## 9. QUICK REFERENCE — CSS TOKEN RECOMMENDATIONS

Based on the cross-site analysis, these tokens represent the consensus of the design language:

```css
:root {
  /* Colors — design language consensus */
  --bg:          #F8F9FA;   /* light gray page (4/5 sites) */
  --bg-surface:  #F5F5F5;   /* card surface alternative */
  --bg-elevated: #FFFFFF;   /* pure white cards */
  --bg-dark:     #0F0F0F;   /* dark CTA sections / footer */
  --accent:      #1B6CE8;   /* Carbonium blue (equivalent to #0000ee) */
  --accent-muted: rgba(27,108,232,0.12);
  --text:        #0A0A0A;   /* near-black (not pure black) */
  --text-sec:    #4F4F4F;   /* secondary text */
  --text-muted:  #797979;   /* muted text */
  --border:      rgba(0,0,0,0.1); /* subtle border */

  /* Typography */
  --font-head:   'DM Sans', sans-serif;
  --font-body:   'Inter', sans-serif;
  --font-mono:   'Roboto Mono', monospace;  /* for stats only */

  /* Heading sizes */
  --h1-size:     72px;      /* 64–100px range; 72 is balanced */
  --h1-weight:   600;
  --h1-tracking: -3px;      /* REQUIRED — defines the look */
  --h1-leading:  1.05;

  --h2-size:     48px;
  --h2-tracking: -1.5px;

  /* Spacing */
  --space-xs:    8px;
  --space-sm:    16px;
  --space-md:    24px;
  --space-lg:    40px;
  --space-xl:    64px;
  --space-2xl:   96px;
  --space-3xl:   120px;    /* section padding */

  /* Radii */
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   16px;
  --radius-pill: 50px;

  /* Shadows — use multi-layer recipe */
  --shadow-xs:
    rgba(0,0,0,0.17) 0px 0.602187px 1.56569px -1.5px,
    rgba(0,0,0,0.14) 0px 2.28853px  5.95019px -3px,
    rgba(0,0,0,0.02) 0px 10px       26px      -4.5px;
  --shadow-sm:   rgba(0,0,0,0.05) 0px 2px 2px 0px;
  --shadow-inset: rgb(0,0,0) 0px 0px 0px 1px inset;  /* border technique */

  /* Motion */
  --dur-fast:    100ms;
  --dur-base:    200ms;
  --dur-slow:    400ms;
  --ease-base:   cubic-bezier(0.44, 0, 0.56, 1);
  --ease-out:    cubic-bezier(0, 0, 0.56, 1);

  /* Layout */
  --max-w:       1200px;
  --container-pad: 80px;  /* desktop side padding */
}
```

---

_Analysis compiled from 377 reference files across 5 scraped Framer AI agency templates._
_Sources: agent.framer.wiki · aithor.framer.website · calisto.framer.website · orbai-template.framer.website · sadewa.framer.website_
