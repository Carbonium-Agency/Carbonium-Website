# Design Language: AIthor – AI Agency Template for Framer

> Extracted from `https://aithor.framer.website/` on June 15, 2026
> 7111 elements analyzed across 10 pages

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 3956 |
| Secondary | `#ff3700` | rgb(255, 55, 0) | hsl(13, 100%, 50%) | 238 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 8102 |
| `#4f4f4f` | hsl(0, 0%, 31%) | 982 |
| `#0a0a0a` | hsl(0, 0%, 4%) | 939 |
| `#f0f0f0` | hsl(0, 0%, 94%) | 413 |
| `#e5e5e5` | hsl(0, 0%, 90%) | 135 |
| `#ffffff` | hsl(0, 0%, 100%) | 135 |
| `#767676` | hsl(0, 0%, 46%) | 121 |
| `#151619` | hsl(225, 9%, 9%) | 106 |
| `#a1a1a1` | hsl(0, 0%, 63%) | 2 |

### Background Colors

Used on large-area elements: `#f0f0f0`, `#e5e5e5`, `#151619`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#151619`, `#0a0a0a`, `#f0f0f0`, `#4f4f4f`, `#ff3700`, `#a1a1a1`, `#e5e5e5`

### Gradients

```css
background-image: radial-gradient(42.6% 50% at 50% 100%, rgb(255, 55, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
```

```css
background-image: radial-gradient(42.6% 50% at 50% 100%, rgb(255, 55, 0) 0%, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: radial-gradient(167% 196.009% at 50% 100%, rgb(255, 55, 0) 0%, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: radial-gradient(140% 164.319% at 50% 100%, rgb(255, 55, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 8102 |
| `#0000ee` | text, border | 3956 |
| `#4f4f4f` | text, border | 982 |
| `#0a0a0a` | text, border, background | 939 |
| `#f0f0f0` | background, text, border | 413 |
| `#ff3700` | background, text, border | 238 |
| `#e5e5e5` | background, text, border | 135 |
| `#ffffff` | background | 135 |
| `#767676` | border | 121 |
| `#151619` | text, border, background | 106 |
| `#a1a1a1` | text, border | 2 |

## Typography

### Font Families

- **Geist** — used for body (614 elements)
- **Halant** — used for all (441 elements)
- **Times New Roman** — used for body (312 elements)
- **Outfit** — used for body (40 elements)
- **Switzer** — used for body (10 elements)
- **Inter** — used for body (4 elements)
- **Fragment Mono** — used for body (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 88px | 5.5rem | 600 | 92.4px | -3.52px | h1, p |
| 80px | 5rem | 600 | 60px | -3.2px | h1 |
| 64px | 4rem | 600 | 67.2px | -2.56px | h2 |
| 56px | 3.5rem | 600 | 56px | -2.24px | div, span |
| 40px | 2.5rem | 600 | 48px | -2.4px | p, span |
| 35.2px | 2.2rem | 600 | 38.72px | -1.408px | p |
| 24px | 1.5rem | 600 | 28.8px | -0.5px | p, h3 |
| 22.4px | 1.4rem | 600 | 28px | -0.896px | h3 |
| 20px | 1.25rem | 600 | 27px | -0.8px | h3, p |
| 18.4px | 1.15rem | 500 | 23.92px | -0.736px | p, strong |
| 17.6px | 1.1rem | 500 | 25.52px | -0.352px | p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, script |
| 14.4px | 0.9rem | 600 | 17.28px | normal | p, textarea, div, span |
| 14px | 0.875rem | 500 | 12.6px | -0.28px | p |
| 13px | 0.8125rem | 500 | 11.7px | -0.26px | p |

### Heading Scale

```css
h1 { font-size: 88px; font-weight: 600; line-height: 92.4px; }
h1 { font-size: 80px; font-weight: 600; line-height: 60px; }
h2 { font-size: 64px; font-weight: 600; line-height: 67.2px; }
h3 { font-size: 24px; font-weight: 600; line-height: 28.8px; }
h3 { font-size: 22.4px; font-weight: 600; line-height: 28px; }
h3 { font-size: 20px; font-weight: 600; line-height: 27px; }
```

### Body Text

```css
body { font-size: 14.4px; font-weight: 600; line-height: 17.28px; }
```

### Font Weights in Use

`400` (6133x), `600` (812x), `500` (118x), `700` (48x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-10 | 10px | 0.625rem |
| spacing-18 | 18px | 1.125rem |
| spacing-24 | 24px | 1.5rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-55 | 55px | 3.4375rem |
| spacing-60 | 60px | 3.75rem |
| spacing-80 | 80px | 5rem |
| spacing-100 | 100px | 6.25rem |
| spacing-140 | 140px | 8.75rem |
| spacing-150 | 150px | 9.375rem |
| spacing-160 | 160px | 10rem |
| spacing-180 | 180px | 11.25rem |
| spacing-200 | 200px | 12.5rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 1 |
| md | 7px | 33 |
| md | 10px | 99 |
| lg | 13px | 48 |
| lg | 16px | 41 |
| xl | 20px | 104 |
| full | 30px | 61 |
| full | 50px | 163 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(0, 0, 0) 0px 0px 0px 1px inset;
```

**xs** — blur: 0.602187px
```css
box-shadow: rgba(0, 0, 0, 0.08) 0px 0.602187px 0.602187px -0.916667px, rgba(0, 0, 0, 0.08) 0px 2.28853px 2.28853px -1.83333px, rgba(0, 0, 0, 0.07) 0px 10px 10px -2.75px;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.03) 0px 2px 0px 0px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.03) 0px 1.99825px 0px 0px inset;
```

**xs** — blur: 1.56569px
```css
box-shadow: rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px;
```

## CSS Custom Properties

### Other

```css
--one-if-corner-shape-supported: 1;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 809px | max-width |
| md | 810px | min-width |
| 1199px | 1199px | max-width |
| 1200px | 1200px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`

**Durations:** `0.001s`, `0.5s`, `0.2s`

### Common Transitions

```css
transition: overflow 0.001s allow-discrete;
transition: all;
transition: background 0.5s cubic-bezier(0.44, 0, 0.56, 1), box-shadow 0.5s cubic-bezier(0.44, 0, 0.56, 1);
transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
transition: background, box-shadow;
transition: box-shadow, background;
```

### Keyframe Animations

**blink**
```css
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
```

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (11 instances)

```css
.button {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 16px;
  padding-right: 16px;
  border-radius: 50px;
}
```

### Cards (18 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (139 instances)

```css
.input {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-color: rgb(118, 118, 118);
  border-radius: 0px;
  font-size: 12px;
  padding-top: 1px;
  padding-right: 2px;
}
```

### Links (268 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (10 instances)

```css
.navigatio {
  background-color: rgb(240, 240, 240);
  color: rgb(0, 0, 0);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
}
```

### Footer (10 instances)

```css
.foote {
  background-color: rgb(229, 229, 229);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 12px;
}
```

### Switches (10 instances)

```css
.switche {
  border-radius: 0px;
  border-color: rgb(0, 0, 0);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(10, 10, 10);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(10, 10, 10);
  font-size: 14.4px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(10, 10, 10);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(10, 10, 10);
  font-size: 16px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0.15);
  color: rgb(0, 0, 0);
  padding: 16px 16px 16px 16px;
  border-radius: 50px;
  border: 0px outset rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

## Layout System

**21 grid containers** and **2791 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1400px | 40px |
| 800px | 0px |
| 100% | 0px |
| 1500px | 40px |
| 900px | 0px |
| 600px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 12x |
| 3-column | 7x |
| 6-column | 1x |
| 2-column | 1x |

### Grid Templates

```css
grid-template-columns: 552.5px 552.5px;
gap: 15px;
grid-template-columns: 174.156px 174.156px 174.156px 174.156px 174.172px 174.172px;
gap: 15px;
grid-template-columns: 363.328px 363.328px 363.344px;
gap: 15px;
grid-template-columns: 363.328px 363.328px 363.344px;
gap: 15px;
grid-template-columns: 363.328px 363.328px 363.344px;
gap: 15px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 1719x |
| row/nowrap | 1068x |
| column/wrap | 3x |
| row/wrap | 1x |

**Gap values:** `0px 10px`, `100px`, `10px`, `12px`, `15px`, `16px`, `200px`, `20px`, `21px`, `24px`, `25px`, `30px`, `3px`, `40px`, `4px`, `50px`, `55px`, `5px`, `60px`, `6px`, `7px`, `80px`, `8px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 12px | Yes | 1 | No | 14399px |
| tablet (768px) | 12px | Yes | 1 | No | 14638px |
| desktop (1280px) | 12px | Yes | 6 | No | 8671px |
| wide (1920px) | 12px | Yes | 6 | No | 8972px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Page height: `14399px` → `14638px`

**768px → 1280px** (tablet → desktop):
- H1 size: `51.2px` → `88px`
- Max grid columns: `1` → `6`
- Page height: `14638px` → `8671px`

**1280px → 1920px** (desktop → wide):
- Page height: `8671px` → `8972px`

## Interaction States

### Button States

**"SubscribeSubscribe"**
```css
/* Focus */
outline: rgb(0, 0, 0) none 3px → rgb(16, 16, 16) auto 1px;
```

### Input Focus

```css
outline: rgb(0, 0, 0) none 3px → rgb(16, 16, 16) auto 1px;
```

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 83/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Strong accessibility compliance

**Issues:**
- 7 font families — consider limiting to 2 (heading + body)
- 19 !important rules — prefer specificity over overrides
- 64% of CSS is unused — consider purging
- 5616 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| radial | — | 3 | bold |
| radial | — | 3 | bold |
| radial | — | 3 | bold |
| radial | — | 3 | bold |

```css
background: radial-gradient(42.6% 50% at 50% 100%, rgb(255, 55, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
background: radial-gradient(42.6% 50% at 50% 100%, rgb(255, 55, 0) 0%, rgba(255, 255, 255, 0) 100%);
background: radial-gradient(167% 196.009% at 50% 100%, rgb(255, 55, 0) 0%, rgba(255, 255, 255, 0) 100%);
background: radial-gradient(140% 164.319% at 50% 100%, rgb(255, 55, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
```

## Z-Index Map

**13 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | div, iframe.s.t.a.t.u.s._.h.i.d.d.e.n, div |
| sticky | 10,13 | div.f.r.a.m.e.r.-.1.t.s.2.8.u.0.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.1.w.4.y.h.l.3.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.z.b.9.n.7.2.-.c.o.n.t.a.i.n.e.r |
| base | 0,9 | div.f.r.a.m.e.r.-.r.4.q.v.2.v, div.f.r.a.m.e.r.-.1.u.f.d.4.2.x, div.f.r.a.m.e.r.-.r.4.q.v.2.v |

**Issues:**
- [object Object]

## SVG Icons

**19 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 7 |
| md | 5 |
| lg | 1 |
| xl | 6 |

**Icon colors:** `rgb(0, 0, 0)`, `var(--token-d46af0db-9cac-481e-84af-c760f6f95bc5, rgb(18, 18, 18))`, `white`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Geist | cdn | 400, 500, 600, 700, 900 | italic, normal |
| Fragment Mono | cdn | 400 | normal |
| Inter | self-hosted | 400, 500, 700 | normal, italic |
| Halant | self-hosted | 500, 600, 700 | normal |
| Switzer | self-hosted | 500 | normal |
| Outfit | self-hosted | 500 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 48 | objectFit: cover, borderRadius: 0px, shape: square |
| avatar | 9 | objectFit: cover, borderRadius: 50px, shape: circular |
| general | 3 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (34x), 4:3 (7x), 3.77:1 (4x), 3:2 (3x), 3.88:1 (2x), 4.2:1 (2x), 3.94:1 (2x), 6.63:1 (2x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `1ms` | 1 |
| `sm` | `200ms` | 200 |
| `lg` | `500ms` | 500 |

### Easing Families

- **custom** (30 uses) — `cubic-bezier(0.44, 0, 0.56, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `blink` | fade | opacity | 2 |

## Component Anatomy

### input — 2 instances


## Brand Voice

**Tone:** friendly · **Pronoun:** we→you · **Headings:** Title Case (balanced)

### Top CTA Verbs

- **subscribe** (1)

### Button Copy Patterns

- "subscribe

subscribe" (1×)

### Sample Headings

> We Build The AI That Runs Your Business.
> Everything You Need To Put AI To Work.
> Custom AI Agents
> Workflow Automations
> Data & Integrations
> We Build The AI That Runs Your Business.
> Everything You Need To Put AI To Work.
> Custom AI Agents
> Workflow Automations
> Data & Integrations

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** AIthor is a conversion-focused Framer template built for chatbot and automation agencies who want a professional, high-converting website that starts winning clients from day one. Conversion-ready des

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): pricing → nav → content → content → content → content → content → content → pricing → testimonial → stats → pricing → content → nav → content → content → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | pricing | We Build The AI That Runs Your Business. | 0.4 |
| 2 | nav | We Build The AI That Runs Your Business. | 0.4 |
| 3 | content | — | 0.3 |
| 4 | content | Everything You Need To Put AI To Work. | 0.3 |
| 5 | content | — | 0.3 |
| 6 | content | — | 0.3 |
| 7 | content | From Friction To Fully Live. | 0.3 |
| 8 | content | Real Business Results. | 0.3 |
| 9 | pricing | AI Partner, Done Right. | 0.4 |
| 10 | testimonial | What Our Clients Say. | 0.8 |
| 11 | stats | — | 0.85 |
| 12 | pricing | Pricing That Scales With You. | 0.4 |
| 13 | content | Need Answers? | 0.3 |
| 14 | content | — | 0.3 |
| 15 | content | — | 0.3 |
| 16 | footer | AITHOR | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.196 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 60, svg 0, icon 1, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** soft

## Component Library

**Detected:** `vuetify` (confidence 0.52)

Evidence:
- 11 v-* classes

## Component Screenshots

3 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| input--default | 0 | 313 × 250 | `screenshots/input-default-0.png` |
| input--default | 1 | 326 × 18 | `screenshots/input-default-1.png` |
| button--default | 0 | 133 × 52 | `screenshots/button-default-0.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Geist` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
