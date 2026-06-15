# Design Language: Sadewa - AI Automation Agency Framer Template

> Extracted from `https://sadewa.framer.website/` on June 15, 2026
> 10766 elements analyzed across 15 pages

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 5662 |
| Secondary | `#98fe00` | rgb(152, 254, 0) | hsl(84, 100%, 50%) | 254 |
| Accent | `#ff9500` | rgb(255, 149, 0) | hsl(35, 100%, 50%) | 20 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 10897 |
| `#131313` | hsl(0, 0%, 7%) | 4434 |
| `#f3f3f3` | hsl(0, 0%, 95%) | 1330 |
| `#ffffff` | hsl(0, 0%, 100%) | 943 |
| `#797979` | hsl(0, 0%, 47%) | 283 |
| `#d3d3d3` | hsl(0, 0%, 83%) | 92 |
| `#e5e5e5` | hsl(0, 0%, 90%) | 67 |
| `#3a3a3a` | hsl(0, 0%, 23%) | 50 |
| `#b4b4b4` | hsl(0, 0%, 71%) | 12 |
| `#999999` | hsl(0, 0%, 60%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#f3f3f3`, `#131313`

### Text Colors

Text color palette: `#000000`, `#131313`, `#0000ee`, `#fefefe`, `#797979`, `#d3d3d3`, `#ffffff`, `#98fe00`, `#3a3a3a`, `#121212`

### Gradients

```css
background-image: linear-gradient(rgb(19, 19, 19) 0%, rgb(58, 58, 58) 100%);
```

```css
background-image: linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, rgb(243, 243, 243) 100%);
```

```css
background-image: conic-gradient(rgba(255, 255, 255, 0) 0deg, rgb(153, 153, 153) 342deg);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 10897 |
| `#0000ee` | text, border | 5662 |
| `#131313` | text, border, background | 4434 |
| `#f3f3f3` | background | 1330 |
| `#ffffff` | background, text, border | 943 |
| `#797979` | text, border | 283 |
| `#98fe00` | background, text, border | 254 |
| `#d3d3d3` | background, text, border | 92 |
| `#e5e5e5` | background | 67 |
| `#3a3a3a` | background, text, border | 50 |
| `#ff9500` | background | 20 |
| `#de362a` | background | 14 |
| `#b4b4b4` | background, text, border | 12 |
| `#999999` | background | 1 |

## Typography

### Font Families

- **Satoshi** — used for all (2015 elements)
- **Roboto Mono** — used for body (443 elements)
- **Times New Roman** — used for body (224 elements)
- **Geist** — used for body (35 elements)
- **Inter** — used for body (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 80px | 5rem | 700 | 72px | -3.2px | h1, span |
| 64px | 4rem | 700 | 64px | -2.56px | h2, span, br, p |
| 48px | 3rem | 700 | 48px | -1.44px | h3, span |
| 40px | 2.5rem | 700 | 48px | -1.8px | h3, p |
| 32px | 2rem | 700 | 35.2px | -1.28px | h3, a |
| 24px | 1.5rem | 500 | 36px | -0.24px | p, span, h4 |
| 20px | 1.25rem | 700 | 24px | -0.4px | h5, a, br |
| 18px | 1.125rem | 500 | 25.2px | -0.36px | p, input, select, option |
| 16px | 1rem | 400 | normal | normal | html, head, meta, script |
| 14px | 0.875rem | 400 | 14px | normal | p, span |
| 13px | 0.8125rem | 600 | 19.5px | -0.26px | p |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |

### Heading Scale

```css
h1 { font-size: 80px; font-weight: 700; line-height: 72px; }
h2 { font-size: 64px; font-weight: 700; line-height: 64px; }
h3 { font-size: 48px; font-weight: 700; line-height: 48px; }
h3 { font-size: 40px; font-weight: 700; line-height: 48px; }
h3 { font-size: 32px; font-weight: 700; line-height: 35.2px; }
h4 { font-size: 24px; font-weight: 500; line-height: 36px; }
h5 { font-size: 20px; font-weight: 700; line-height: 24px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (8721x), `500` (1693x), `700` (311x), `600` (41x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-70 | 70px | 4.375rem |
| spacing-80 | 80px | 5rem |
| spacing-100 | 100px | 6.25rem |
| spacing-110 | 110px | 6.875rem |
| spacing-130 | 130px | 8.125rem |
| spacing-140 | 140px | 8.75rem |
| spacing-150 | 150px | 9.375rem |
| spacing-160 | 160px | 10rem |
| spacing-170 | 170px | 10.625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 1px | 1 |
| sm | 4px | 42 |
| md | 10px | 77 |
| lg | 14px | 7 |
| full | 50px | 7 |
| full | 64px | 7 |
| full | 1000px | 1 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(0, 0, 0) 0px 0px 0px 1px inset;
```

**xs** — blur: 0.505837px
```css
box-shadow: rgba(0, 0, 0, 0.11) 0px 0.361312px 0.505837px -0.75px, rgba(0, 0, 0, 0.12) 0px 1.37312px 1.92237px -1.5px, rgba(0, 0, 0, 0.14) 0px 6px 8.4px -2.25px;
```

**xs** — blur: 0.859758px
```css
box-shadow: rgba(0, 0, 0, 0.17) -0.120437px 0.602187px 0.859758px -1.16667px, rgba(0, 0, 0, 0.15) -0.457707px 2.28853px 3.2674px -2.33333px, rgba(0, 0, 0, 0.08) -2px 10px 14.2773px -3.5px;
```

**xs** — blur: 1.56569px
```css
box-shadow: rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px;
```

**md** — blur: 6px
```css
box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 6px 0px, rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
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
| 1200px | 1200px | max-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`

**Durations:** `1s`, `1.9s`, `0.2s`, `0.4s`

### Common Transitions

```css
transition: all;
transition: width 1s cubic-bezier(0.4, 0, 0.2, 1) 1.9s;
transition: width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
transition: color 0.4s cubic-bezier(0.44, 0, 0.56, 1);
transition: background 0.4s cubic-bezier(0.44, 0, 0.56, 1), box-shadow 0.4s cubic-bezier(0.44, 0, 0.56, 1);
```

### Keyframe Animations

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (1 instances)

```css
.button {
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (21 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.17) -0.120437px 0.602187px 0.859758px -1.16667px, rgba(0, 0, 0, 0.15) -0.457707px 2.28853px 3.2674px -2.33333px, rgba(0, 0, 0, 0.08) -2px 10px 14.2773px -3.5px;
  padding-top: 8px;
  padding-right: 8px;
}
```

### Inputs (15 instances)

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

### Links (299 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (7 instances)

```css
.navigatio {
  color: rgb(0, 0, 0);
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
}
```

### Footer (7 instances)

```css
.foote {
  background-color: rgb(19, 19, 19);
  color: rgb(0, 0, 0);
  padding-top: 170px;
  padding-bottom: 0px;
  font-size: 12px;
}
```

## Layout System

**81 grid containers** and **3052 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1240px | 0px |
| 48% | 0px |
| 500px | 0px |
| 900px | 0px |
| 870px | 0px |
| 500% | 0px |
| 540px | 0px |
| 820px | 0px |
| 100% | 0px |
| 60% | 0px |
| 600px | 0px |
| 50% | 64px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 40x |
| 6-column | 22x |
| 7-column | 10x |
| 5-column | 3x |
| 2-column | 3x |
| 9-column | 2x |
| 4-column | 1x |

### Grid Templates

```css
grid-template-columns: 608px 608px;
gap: 24px;
grid-template-columns: 608px 608px;
gap: 24px;
grid-template-columns: 285px 285px 285px 285px;
gap: 20px;
grid-template-columns: 137.766px 137.766px 137.766px 137.766px 137.766px 137.766px 137.766px 137.766px 137.766px;
grid-template-columns: 260px 260px;
gap: 20px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 1586x |
| row/nowrap | 1444x |
| row/wrap | 22x |

**Gap values:** `100px`, `10px`, `12px`, `130px`, `13px`, `140px`, `14px`, `150px`, `16px`, `17px`, `18px`, `20px`, `21px`, `22px`, `24px`, `25px`, `2px`, `30px`, `32px`, `34px`, `40px`, `48px`, `4px`, `50px`, `56px`, `64px`, `6px`, `70px`, `80px`, `8px`, `8px 4px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 12px | Yes | 5 | No | 20619px |
| tablet (768px) | 12px | Yes | 9 | No | 22201px |
| desktop (1280px) | 12px | Yes | 7 | No | 16577px |
| wide (1920px) | 12px | Yes | 7 | No | 18003px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Max grid columns: `5` → `9`
- Page height: `20619px` → `22201px`

**768px → 1280px** (tablet → desktop):
- H1 size: `48px` → `80px`
- Max grid columns: `9` → `7`
- Page height: `22201px` → `16577px`

**1280px → 1920px** (desktop → wide):
- Page height: `16577px` → `18003px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 82/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- 5 font families — consider limiting to 2 (heading + body)
- 21 !important rules — prefer specificity over overrides
- 55% of CSS is unused — consider purging
- 5631 duplicate CSS declarations

## Gradients

**3 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | 180deg | 2 | brand |
| conic | — | 2 | brand |

```css
background: linear-gradient(rgb(19, 19, 19) 0%, rgb(58, 58, 58) 100%);
background: linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, rgb(243, 243, 243) 100%);
background: conic-gradient(rgba(255, 255, 255, 0) 0deg, rgb(153, 153, 153) 342deg);
```

## Z-Index Map

**7 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | div, iframe.s.t.a.t.u.s._.h.i.d.d.e.n, div |
| sticky | 10,13 | div.f.r.a.m.e.r.-.1.2.8.q.m.o.d.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.c.e.7.1.b.e.-.c.o.n.t.a.i.n.e.r. .h.i.d.d.e.n.-.1.8.n.f.o.c.h. .h.i.d.d.e.n.-.1.5.2.8.8.o.h, div.f.r.a.m.e.r.-.1.2.8.q.m.o.d.-.c.o.n.t.a.i.n.e.r |
| base | 0,9 | div.f.r.a.m.e.r.-.1.i.0.7.7.x.o.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.4.d.k.9.y.3, div.f.r.a.m.e.r.-.1.2.y.5.m.p.7 |

**Issues:**
- [object Object]

## SVG Icons

**10 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 3 |
| md | 1 |
| xl | 6 |

**Icon colors:** `rgb(0, 0, 0)`, `white`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Geist | cdn | 400, 600 | normal |
| Roboto Mono | cdn | 400, 700 | italic, normal |
| Inter | self-hosted | 400, 700, 900 | normal, italic |
| Satoshi | self-hosted | 500, 700, 900 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 31 | objectFit: cover, borderRadius: 0px, shape: square |
| general | 9 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 3 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 2 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 4:3 (8x), 5.26:1 (6x), 1:1 (6x), 3:2 (6x), 3:4 (4x), 4.3:1 (3x), 5.48:1 (3x), 4.07:1 (3x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `400ms` | 400 |
| `xl` | `1s` | 1000 |
| `xxl` | `1.9s` | 1900 |

### Easing Families

- **custom** (81 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.44, 0, 0.56, 1)`

## Brand Voice

**Tone:** friendly · **Pronoun:** we→you · **Headings:** Sentence case (tight)

### Sample Headings

> Smart AI Automation for Growing Brands.
> Eliminate the bottlenecks
that hold you back
> Automation solutions
> AI strategy & consulting
> AI content creation
> Smart AI Automation for Growing Brands.
> Eliminate the bottlenecks
that hold you back
> Automation solutions
> AI strategy & consulting
> AI content creation

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Sadewa helps AI automation agencies proudly show their services, build trust with clients, and grow their business with a modern website.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): pricing → logo-wall → content → testimonials → testimonials → content → nav → content → testimonials → content → testimonial → pricing → faq → testimonial → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | pricing | Smart AI Automation for Growing Brands. | 0.4 |
| 1 | logo-wall | Smart AI Automation for Growing Brands. | 0.85 |
| 2 | content | — | 0.3 |
| 3 | testimonials | Eliminate the bottlenecks
that hold you back | 0.4 |
| 4 | testimonials | Automation solutions | 0.4 |
| 5 | content | Latest works | 0.3 |
| 6 | content | Discover | 0.3 |
| 7 | testimonials | — | 0.4 |
| 8 | content | Tech stack we use | 0.3 |
| 9 | testimonial | Meet the Visionaries | 0.8 |
| 10 | pricing | Choose your plan | 0.4 |
| 11 | faq | Frequently Asked Questions | 0.85 |
| 12 | testimonial | Latest insights | 0.8 |
| 13 | nav | — | 0.9 |
| 14 | footer | Ready to implement AI in your business? | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.272 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 1000px |
| backdrop-filter in use | no |
| Gradients | 3 |

## Imagery Style

**Label:** `photography` (confidence 0.059)
**Counts:** total 45, svg 0, icon 0, screenshot-like 0, photo-like 3
**Dominant aspect:** ultra-wide
**Radius profile on images:** square

## Component Library

**Detected:** `vuetify` (confidence 0.54)

Evidence:
- 12 v-* classes

## Component Screenshots

3 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| nav | 0 | 1280 × 72 | `screenshots/undefined` |
| hero | 0 | 1280 × 857 | `screenshots/undefined` |
| hero | 1 | 595 × 35 | `screenshots/undefined` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Satoshi` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
