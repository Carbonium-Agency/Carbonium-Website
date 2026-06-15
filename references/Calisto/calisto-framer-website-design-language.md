# Design Language: Calisto - AI Agency Framer Template

> Extracted from `https://calisto.framer.website/` on June 15, 2026
> 5037 elements analyzed across 5 pages

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 822 |
| Secondary | `#308dff` | rgb(48, 141, 255) | hsl(213, 100%, 59%) | 48 |
| Accent | `#59afff` | rgb(89, 175, 255) | hsl(209, 100%, 67%) | 34 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 7540 |
| `#666666` | hsl(0, 0%, 40%) | 531 |
| `#0d0d0d` | hsl(0, 0%, 5%) | 396 |
| `#ffffff` | hsl(0, 0%, 100%) | 172 |
| `#f5f5f5` | hsl(0, 0%, 96%) | 126 |
| `#1c1c1c` | hsl(0, 0%, 11%) | 90 |
| `#525252` | hsl(0, 0%, 32%) | 84 |
| `#767676` | hsl(0, 0%, 46%) | 22 |
| `#d9d9d9` | hsl(0, 0%, 85%) | 4 |

### Background Colors

Used on large-area elements: `#f5f5f5`, `#ffffff`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#525252`, `#255ccc`, `#666666`, `#ffffff`, `#1c1c1c`, `#0d0d0d`

### Gradients

```css
background-image: linear-gradient(45deg, rgb(102, 102, 102) 20%, rgb(28, 28, 28) 50%, rgb(102, 102, 102) 80%);
```

```css
background-image: linear-gradient(45deg, rgb(89, 176, 255) 0%, rgb(48, 141, 255) 50%, rgb(89, 176, 255) 100%);
```

```css
background-image: conic-gradient(rgb(89, 176, 255) 0deg, rgb(37, 92, 204) 180deg, rgb(48, 141, 255) 360deg);
```

```css
background-image: conic-gradient(rgb(89, 176, 255) 0deg, rgb(48, 141, 255) 180deg, rgb(89, 176, 255) 360deg);
```

```css
background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(245, 245, 245) 116%);
```

```css
background-image: linear-gradient(45deg, rgb(102, 102, 102) 0%, rgb(28, 28, 28) 50%, rgb(102, 102, 102) 100%);
```

```css
background-image: linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(217, 217, 217) 49.6804%, rgb(245, 245, 245) 100%);
```

```css
background-image: linear-gradient(rgb(245, 245, 245) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(245, 245, 245) 100%);
```

```css
background-image: linear-gradient(rgb(245, 245, 245) 0%, rgb(255, 255, 255) 50.2595%, rgb(245, 245, 245) 100%);
```

```css
background-image: linear-gradient(rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%);
```

```css
background-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(245, 245, 245) 49.8599%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(0deg, rgb(48, 141, 255) 0%, rgb(37, 92, 204) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 7540 |
| `#0000ee` | text, border | 822 |
| `#255ccc` | text, border, background | 569 |
| `#666666` | text, border, background | 531 |
| `#0d0d0d` | text, border | 396 |
| `#ffffff` | background, text, border | 172 |
| `#f5f5f5` | background | 126 |
| `#1c1c1c` | text, border | 90 |
| `#525252` | text, border | 84 |
| `#308dff` | background | 48 |
| `#59afff` | background | 34 |
| `#767676` | border | 22 |
| `#d9d9d9` | background | 4 |

## Typography

### Font Families

- **Manrope** — used for all (634 elements)
- **Times New Roman** — used for body (155 elements)
- **Inter** — used for body (7 elements)
- **Inter Tight** — used for body (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 96px | 6rem | 500 | 105.6px | -4.8px | h1, span |
| 80px | 5rem | 500 | 88px | -4px | p, span |
| 48px | 3rem | 500 | 57.6px | -1.44px | h2, span |
| 24px | 1.5rem | 500 | 28.8px | -0.72px | p |
| 20px | 1.25rem | 500 | 28px | -0.6px | h3, strong |
| 18px | 1.125rem | 600 | 21.6px | -0.36px | p, h4 |
| 16px | 1rem | 400 | normal | normal | html, head, meta, script |
| 14px | 0.875rem | 600 | 16.8px | -0.42px | p, a |
| 13px | 0.8125rem | 700 | 15.6px | normal | p |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |

### Heading Scale

```css
h1 { font-size: 96px; font-weight: 500; line-height: 105.6px; }
h2 { font-size: 48px; font-weight: 500; line-height: 57.6px; }
h3 { font-size: 20px; font-weight: 500; line-height: 28px; }
h4 { font-size: 18px; font-weight: 600; line-height: 21.6px; }
```

### Body Text

```css
body { font-size: 14px; font-weight: 600; line-height: 16.8px; }
```

### Font Weights in Use

`400` (4401x), `500` (560x), `600` (50x), `700` (26x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-24 | 24px | 1.5rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-52 | 52px | 3.25rem |
| spacing-80 | 80px | 5rem |
| spacing-100 | 100px | 6.25rem |
| spacing-120 | 120px | 7.5rem |
| spacing-160 | 160px | 10rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 4px | 4 |
| md | 8px | 108 |
| lg | 11px | 18 |
| lg | 14px | 22 |
| xl | 20px | 17 |
| xl | 23px | 8 |
| full | 27px | 5 |
| full | 30px | 18 |
| full | 38px | 1 |
| full | 50px | 278 |
| full | 100px | 18 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(0, 0, 0) 0px 0px 0px 1px inset;
```

**xs** — blur: 0.210766px
```css
box-shadow: rgba(0, 0, 0, 0.01) 0px 0.301094px 0.210766px -0.166667px, rgba(0, 0, 0, 0.02) 0px 1.14427px 0.800987px -0.333333px, rgba(0, 0, 0, 0.05) 0px 5px 3.5px -0.5px;
```

**xs** — blur: 0.301094px
```css
box-shadow: rgba(0, 0, 0, 0.09) 0px 0.301094px 0.301094px -0.583333px, rgba(0, 0, 0, 0.1) 0px 1.14427px 1.14427px -1.16667px, rgba(0, 0, 0, 0.16) 0px 5px 5px -1.75px;
```

**xs** — blur: 0.903281px
```css
box-shadow: rgba(0, 0, 0, 0.04) 0px 0.301094px 0.903281px -0.583333px, rgba(0, 0, 0, 0.04) 0px 1.14427px 3.4328px -1.16667px, rgba(0, 0, 0, 0.07) 0px 5px 15px -1.75px;
```

**xs** — blur: 0.602187px
```css
box-shadow: rgba(0, 0, 0, 0.02) 0px 0.602187px 0.602187px 0px, rgba(0, 0, 0, 0.06) 0px 2.28853px 2.28853px 0px, rgba(0, 0, 0, 0.25) 0px 10px 10px 0px;
```

**xs** — blur: 1.14416px
```css
box-shadow: rgba(0, 0, 0, 0.01) 0px 0.301094px 1.14416px 0px, rgba(0, 0, 0, 0.02) 0px 1.14427px 4.34821px 0px, rgba(0, 0, 0, 0.1) 0px 5px 19px 0px;
```

**xs** — blur: 1.14416px
```css
box-shadow: rgba(0, 0, 0, 0.04) 0px 0.301094px 1.14416px -0.583333px, rgba(0, 0, 0, 0.04) 0px 1.14427px 4.34821px -1.16667px, rgba(0, 0, 0, 0.07) 0px 5px 19px -1.75px;
```

**xs (inset)** — blur: 1.07486px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0.597144px 1.07486px 0px inset, rgba(0, 0, 0, 0) 0px 1.81088px 3.25958px 0px inset, rgba(0, 0, 0, 0) 0px 4.78699px 8.61658px 0px inset, rgba(0, 0, 0, 0) 0px 15px 27px 0px inset, rgba(0, 0, 0, 0) 0px -0.740973px 1.33375px 0px inset, rgba(0, 0, 0, 0) 0px -2.01787px 3.63216px 0px inset, rgba(0, 0, 0, 0) 0px -4.43051px 7.97491px 0px inset, rgba(0, 0, 0, 0) 0px -9.83471px 17.7025px 0px inset, rgba(0, 0, 0, 0) 0px -25px 45px 0px inset;
```

**xs** — blur: 1.26459px
```css
box-shadow: rgba(0, 0, 0, 0.05) 0px 0.421531px 1.26459px -0.916667px, rgba(0, 0, 0, 0.05) 0px 1.60197px 4.80592px -1.83333px, rgba(0, 0, 0, 0.05) 0px 7px 21px -2.75px;
```

**xs** — blur: 1.56569px
```css
box-shadow: rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px;
```

**xs** — blur: 1.80656px
```css
box-shadow: rgba(0, 0, 0, 0.05) 0px 0.602187px 1.80656px -0.75px, rgba(0, 0, 0, 0.05) 0px 2.28853px 6.8656px -1.5px, rgba(0, 0, 0, 0.06) 0px 10px 30px -2.25px;
```

**xs** — blur: 1.80656px
```css
box-shadow: rgba(0, 0, 0, 0.05) 0px 0.602187px 1.80656px -0.916667px, rgba(0, 0, 0, 0.05) 0px 2.28853px 6.8656px -1.83333px, rgba(0, 0, 0, 0.05) 0px 10px 30px -2.75px;
```

**xs** — blur: 1.80656px
```css
box-shadow: rgba(0, 0, 0, 0.04) 0px 0.602187px 1.80656px -0.583333px, rgba(0, 0, 0, 0.04) 0px 2.28853px 6.8656px -1.16667px, rgba(0, 0, 0, 0.07) 0px 10px 30px -1.75px;
```

**xs** — blur: 2.28831px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0.602187px 2.28831px -0.75px, rgba(0, 0, 0, 0) 0px 2.28853px 8.69643px -1.5px, rgba(0, 0, 0, 0) 0px 10px 38px -2.25px;
```

**xs** — blur: 2.28831px
```css
box-shadow: rgba(0, 0, 0, 0.07) 0px 0.602187px 2.28831px -0.75px, rgba(0, 0, 0, 0.07) 0px 2.28853px 8.69643px -1.5px, rgba(0, 0, 0, 0.08) 0px 10px 38px -2.25px;
```

**md** — blur: 15px
```css
box-shadow: rgba(89, 175, 255, 0.4) 0px 0px 15px 3px;
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

**Easing functions:** `[object Object]`

**Durations:** `0.2s`

### Common Transitions

```css
transition: all;
transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
transition: background, box-shadow;
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

### Buttons (2 instances)

```css
.button {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 16px;
  padding-right: 24px;
  border-radius: 12px;
}
```

### Cards (149 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 0.301094px 1.14416px 0px, rgba(0, 0, 0, 0.02) 0px 1.14427px 4.34821px 0px, rgba(0, 0, 0, 0.1) 0px 5px 19px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (27 instances)

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

### Links (133 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (17 instances)

```css
.navigatio {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.602187px 1.80656px -0.916667px, rgba(0, 0, 0, 0.05) 0px 2.28853px 6.8656px -1.83333px, rgba(0, 0, 0, 0.05) 0px 10px 30px -2.75px;
}
```

### Footer (5 instances)

```css
.foote {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 12px;
}
```

## Layout System

**7 grid containers** and **1541 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1440px | 80px |
| 1280px | 80px |
| 1000px | 0px |
| 1400px | 0px |
| 100% | 0px |
| 500px | 0px |
| 600px | 0px |
| 800px | 80px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 3-column | 5x |
| 2-column | 1x |
| 4-column | 1x |

### Grid Templates

```css
grid-template-columns: 360px 360px 360px;
gap: 20px;
grid-template-columns: 362.656px 362.672px 362.656px;
gap: 16px;
grid-template-columns: 362.656px 362.672px 362.656px;
gap: 16px;
grid-template-columns: 362.656px 362.672px 362.656px;
gap: 16px;
grid-template-columns: 472px 472px;
gap: 16px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 787x |
| row/nowrap | 742x |
| row/wrap | 12x |

**Gap values:** `10px`, `12px`, `14px`, `16px`, `18px`, `1px`, `20px`, `24px`, `2px`, `32px`, `34px`, `3px`, `40px`, `48px`, `4px`, `52px`, `5px`, `6px`, `8px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 12px | Yes | 3 | No | 16710px |
| tablet (768px) | 12px | Yes | 3 | No | 17646px |
| desktop (1280px) | 12px | Yes | 4 | No | 11019px |
| wide (1920px) | 12px | Yes | 4 | No | 11339px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Page height: `16710px` → `17646px`

**768px → 1280px** (tablet → desktop):
- H1 size: `48px` → `96px`
- Max grid columns: `3` → `4`
- Page height: `17646px` → `11019px`

**1280px → 1920px** (desktop → wide):
- Page height: `11019px` → `11339px`

## Interaction States

### Link Hover

```css
background-color: rgb(255, 255, 255) → rgb(251, 251, 251);
```

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 78/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 78/100 |
| Border Radius Consistency | 65/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Strong accessibility compliance

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 217 !important rules — prefer specificity over overrides
- 64% of CSS is unused — consider purging
- 6932 duplicate CSS declarations

## Gradients

**13 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 45deg | 3 | bold |
| linear | 45deg | 3 | bold |
| conic | — | 3 | bold |
| conic | — | 3 | bold |
| linear | — | 2 | brand |
| linear | 45deg | 3 | bold |
| linear | 90deg | 3 | bold |
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| linear | — | 3 | bold |
| linear | — | 2 | brand |
| linear | — | 3 | bold |
| linear | 0deg | 2 | brand |

```css
background: linear-gradient(45deg, rgb(102, 102, 102) 20%, rgb(28, 28, 28) 50%, rgb(102, 102, 102) 80%);
background: linear-gradient(45deg, rgb(89, 176, 255) 0%, rgb(48, 141, 255) 50%, rgb(89, 176, 255) 100%);
background: conic-gradient(rgb(89, 176, 255) 0deg, rgb(37, 92, 204) 180deg, rgb(48, 141, 255) 360deg);
background: conic-gradient(rgb(89, 176, 255) 0deg, rgb(48, 141, 255) 180deg, rgb(89, 176, 255) 360deg);
background: linear-gradient(rgb(255, 255, 255) 0%, rgb(245, 245, 245) 116%);
```

## Z-Index Map

**5 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | div, iframe.s.t.a.t.u.s._.h.i.d.d.e.n, div |
| sticky | 10,10 | div.f.r.a.m.e.r.-.1.k.d.x.c.a.4.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.1.s.g.9.m.2.v.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.3.7.o.k.5.w.-.c.o.n.t.a.i.n.e.r |
| base | 0,2 | div.f.r.a.m.e.r.-.1.n.h.q.b.z.i, div.f.r.a.m.e.r.-.1.n.h.q.b.z.i, div.f.r.a.m.e.r.-.1.n.h.q.b.z.i |

**Issues:**
- [object Object]

## SVG Icons

**44 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 36 |
| sm | 5 |
| lg | 3 |

**Icon colors:** `rgb(0, 0, 0)`, `rgb(37, 92, 204)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Inter Tight | cdn | 700 | normal |
| Inter | self-hosted | 400, 700 | normal, italic |
| Manrope | self-hosted | 500, 600, 700 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 134 | objectFit: contain, borderRadius: 0px, shape: square |
| general | 8 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (97x), 21:9 (21x), 3:2 (7x), 1.93:1 (4x), 2.14:1 (4x), 2:3 (4x), 4:3 (1x), 2.18:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |

### Easing Families

- **custom** (40 uses) — `cubic-bezier(0.44, 0, 0.56, 1)`

## Brand Voice

**Tone:** neutral · **Pronoun:** we→you · **Headings:** Title Case (tight)

### Sample Headings

> AI-Powered Automation
> for Modern Teams
> Calisto is an AI automation agency helping modern businesses streamline operations, boost productivity, and scale smarter.
> How We Bring Automation to Life
> Discover & Analyze
> Design & Build
> Launch & Optimize
> AI Solutions Built for Efficiency
> Custom AI Chatbots
> Content Generation

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Calisto is a modern, clean Framer template built for AI agencies and automation startups.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → cta → nav → logo-wall → content → steps → content → content → steps → content → content → content → feature-grid → content → content → pricing → testimonial → testimonial → testimonial → faq → nav → nav → nav → nav → nav → nav → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | cta | AI-Powered Automation | 0.4 |
| 3 | logo-wall | Calisto is an AI automation agency helping modern businesses streamline operatio | 0.85 |
| 4 | content | — | 0.3 |
| 5 | steps | How We Bring Automation to Life | 0.75 |
| 6 | content | — | 0.3 |
| 7 | content | — | 0.3 |
| 8 | steps | AI Solutions Built for Efficiency | 0.75 |
| 9 | content | — | 0.3 |
| 10 | content | — | 0.3 |
| 11 | content | Automate Faster, Work Smarter | 0.3 |
| 12 | feature-grid | Why Choose Calisto | 0.8 |
| 13 | content | — | 0.3 |
| 14 | content | Automation That Delivers Real Impact | 0.3 |
| 15 | pricing | Flexible Plans for Every Team | 0.4 |
| 16 | testimonial | What Our Clients Are Saying | 0.8 |
| 17 | testimonial | — | 0.8 |
| 18 | testimonial | Meet the Team Behind Calisto | 0.8 |
| 19 | faq | Frequently Asked Questions | 0.85 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.252 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 100px |
| backdrop-filter in use | no |
| Gradients | 13 |

## Imagery Style

**Label:** `photography` (confidence 0.028)
**Counts:** total 142, svg 7, icon 97, screenshot-like 0, photo-like 8
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Screenshots

4 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| nav | 0 | 1200 × 53 | `screenshots/undefined` |
| nav | 1 | 28 × 28 | `screenshots/undefined` |
| hero | 0 | 1280 × 800 | `screenshots/undefined` |
| hero | 1 | 800 × 39 | `screenshots/undefined` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Manrope` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
