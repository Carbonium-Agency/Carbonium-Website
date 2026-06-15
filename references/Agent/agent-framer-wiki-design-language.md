# Design Language: Agentix | Framer Template for AI, SaaS, B2B startups

> Extracted from `https://agent.framer.wiki/` on June 15, 2026
> 7332 elements analyzed across 12 pages

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#37ea9e` | rgb(55, 234, 158) | hsl(155, 81%, 57%) | 86 |
| Secondary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 2554 |
| Accent | `#82dbf7` | rgb(130, 219, 247) | hsl(194, 88%, 74%) | 8 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 9440 |
| `#ffffff` | hsl(0, 0%, 100%) | 1230 |
| `#9ba5b5` | hsl(217, 15%, 66%) | 738 |
| `#4e5b6d` | hsl(215, 17%, 37%) | 665 |
| `#273241` | hsl(215, 25%, 20%) | 55 |
| `#e9ebef` | hsl(220, 16%, 93%) | 45 |
| `#d1d5dd` | hsl(220, 15%, 84%) | 19 |
| `#1a1d21` | hsl(214, 12%, 12%) | 6 |
| `#9b9c9e` | hsl(220, 2%, 61%) | 6 |
| `#686b6e` | hsl(210, 3%, 42%) | 2 |
| `#101010` | hsl(0, 0%, 6%) | 2 |
| `#333333` | hsl(0, 0%, 20%) | 1 |

### Background Colors

Used on large-area elements: `#f8f9fa`, `#ffffff`, `#95f4cc`, `#37ea9e`, `#000000`, `#6aebc9`, `#1a1d21`, `#131619`, `#f1fef8`, `#e9ebef`, `#cecfd1`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#4e5b6d`, `#ffffff`, `#e9ebef`, `#9ba5b5`, `#37ea9e`, `#d1d5dd`, `#16a781`, `#9b9c9e`

### Gradients

```css
background-image: linear-gradient(118.664deg, rgb(0, 0, 0), rgb(39, 50, 65));
```

```css
background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 41%, rgb(55, 234, 158) 50%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: radial-gradient(rgba(233, 235, 239, 0) 2.1px, rgba(0, 0, 0, 0) 2.9px);
```

```css
background-image: linear-gradient(90deg, rgb(0, 0, 0), rgb(106, 235, 201), rgb(0, 0, 0));
```

```css
background-image: linear-gradient(117.579deg, rgba(215, 236, 236, 0.16), rgba(204, 234, 234, 0));
```

```css
background-image: linear-gradient(117.069deg, rgb(22, 167, 129) 0%, rgb(106, 235, 201) 100%);
```

```css
background-image: linear-gradient(118.664deg, rgb(0, 0, 0) 0%, rgb(39, 50, 65) 100%);
```

```css
background-image: linear-gradient(rgb(248, 249, 250) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(rgb(28, 211, 163) 0%, rgb(193, 251, 224) 100%);
```

```css
background-image: linear-gradient(to right, rgb(28, 211, 163) 0%, rgb(233, 235, 239) 0%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 9440 |
| `#0000ee` | text, border | 2554 |
| `#ffffff` | background, text, border | 1230 |
| `#9ba5b5` | text, border | 738 |
| `#4e5b6d` | text, border, background | 665 |
| `#37ea9e` | text, border, background | 86 |
| `#042018` | text, border | 66 |
| `#16a781` | text, border | 60 |
| `#273241` | background, text, border | 55 |
| `#e9ebef` | text, border, background | 45 |
| `#107a5e` | text, border | 34 |
| `#6aebc9` | background, text, border | 22 |
| `#d1d5dd` | background, text, border | 19 |
| `#82dbf7` | text, border, background | 8 |
| `#95f4cc` | background | 6 |
| `#1a1d21` | background | 6 |
| `#9b9c9e` | text, border | 6 |
| `#1cd3a3` | background | 6 |
| `#a6b0f2` | text, border, background | 4 |
| `#0a4d3b` | text, border | 4 |
| `#0c1132` | text, border | 2 |
| `#686b6e` | text, border | 2 |
| `#4ac97e` | background | 2 |
| `#101010` | text, border | 2 |
| `#333333` | background | 1 |
| `#bbbbbb` | background | 1 |

## Typography

### Font Families

- **Geist** — used for all (1479 elements)
- **Times New Roman** — used for body (301 elements)
- **Inter** — used for body (29 elements)
- **Plus Jakarta Sans** — used for body (20 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 64px | 4rem | 500 | 64px | -4px | h1, strong |
| 48px | 3rem | 600 | 48px | -3px | h2, strong, h1, span |
| 38px | 2.375rem | 600 | 38px | normal | p |
| 36px | 2.25rem | 600 | 39.6px | -1.08px | h3, br, p, div |
| 24px | 1.5rem | 600 | 24px | normal | h4 |
| 18px | 1.125rem | 500 | 27px | -0.36px | p, strong, h5, div |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 14px | 0.875rem | 500 | 21px | -0.28px | p, strong, a |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |
| 8px | 0.5rem | 600 | 8px | normal | h6 |

### Heading Scale

```css
h1 { font-size: 64px; font-weight: 500; line-height: 64px; }
h2 { font-size: 48px; font-weight: 600; line-height: 48px; }
h3 { font-size: 36px; font-weight: 600; line-height: 39.6px; }
h4 { font-size: 24px; font-weight: 600; line-height: 24px; }
h5 { font-size: 18px; font-weight: 500; line-height: 27px; }
h6 { font-size: 8px; font-weight: 600; line-height: 8px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (5905x), `500` (1035x), `600` (363x), `700` (29x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-30 | 30px | 1.875rem |
| spacing-36 | 36px | 2.25rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-88 | 88px | 5.5rem |
| spacing-96 | 96px | 6rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 1 |
| md | 6px | 37 |
| md | 10px | 27 |
| lg | 16px | 222 |
| xl | 20px | 130 |
| xl | 24px | 9 |
| full | 30px | 1 |
| full | 90px | 21 |
| full | 100px | 63 |
| full | 1000px | 36 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(28, 211, 163) 0px 0px 0px 5px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgb(39, 50, 65) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.53) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0.80621px 0.564347px -0.625px, rgba(0, 0, 0, 0.1) 0px 1.91086px 1.3376px -1.25px, rgba(0, 0, 0, 0.09) 0px 3.48561px 2.43992px -1.875px, rgba(0, 0, 0, 0.09) 0px 5.79481px 4.05637px -2.5px, rgba(0, 0, 0, 0.08) 0px 9.35815px 6.55071px -3.125px, rgba(0, 0, 0, 0.07) 0px 15.3184px 10.7229px -3.75px, rgba(0, 0, 0, 0.05) 0px 26.3772px 18.464px -4.375px, rgba(0, 0, 0, 0) 0px 48px 33.6px -5px;
```

**xs** — blur: 1.14652px
```css
box-shadow: rgba(0, 0, 0, 0.26) 0px 0.636953px 1.14652px -1.125px, rgba(0, 0, 0, 0.24) 0px 1.9316px 3.47689px -2.25px, rgba(0, 0, 0, 0.192) 0px 5.10612px 9.19102px -3.375px, rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px;
```

**sm** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
```

**md** — blur: 6px
```css
box-shadow: rgba(104, 107, 110, 0.16) 0px 4px 6px -4px, rgba(104, 107, 110, 0.16) 0px 10px 15px -3px;
```

**md** — blur: 6px
```css
box-shadow: rgba(182, 240, 156, 0.16) 0px 4px 6px -4px, rgba(182, 240, 156, 0.16) 0px 10px 15px -3px;
```

**md** — blur: 12px
```css
box-shadow: rgba(74, 201, 126, 0.48) 0px 0px 12px 0px;
```

**lg (inset)** — blur: 12px
```css
box-shadow: rgba(255, 255, 255, 0.08) 0px 8px 12px 0px inset, rgba(0, 0, 0, 0.12) 0px 24px 24px -16px, rgba(255, 255, 255, 0.08) 16px 24px 64px -24px inset;
```

**lg** — blur: 20px
```css
box-shadow: rgba(119, 126, 150, 0.1) 0px 10px 20px -5px;
```

**xl** — blur: 164px
```css
box-shadow: rgba(107, 110, 148, 0.12) 0px 120px 164px -25px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
```

## CSS Custom Properties

### Other

```css
--_number-flow-d-opacity: 0;
--_number-flow-d: 0;
--_number-flow-d-width: 0;
--_number-flow-dx: 0px;
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
| 0px | 0px | min-width |
| md | 809px | max-width |
| md | 810px | min-width |
| 1199px | 1199px | max-width |

## Transitions & Animations

**Easing functions:** `[object Object]`

**Durations:** `0.1s`

### Common Transitions

```css
transition: all;
transition: background, box-shadow;
transition: box-shadow, background;
transition: fill 0.1s cubic-bezier(0.4, 0, 1, 1), fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
```

### Keyframe Animations

**eKXFfL**
```css
@keyframes eKXFfL {
  0%, 0% { background-position: 200% center; }
  100% { background-position: -100% center; }
}
```

**__framer-blink-input**
```css
@keyframes __framer-blink-input {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (16 instances)

```css
.button {
  background-color: rgb(55, 234, 158);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 12px;
}
```

### Cards (48 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (21 instances)

```css
.input {
  background-color: rgb(248, 249, 250);
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 12px;
  padding-right: 12px;
}
```

### Links (321 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (11 instances)

```css
.navigatio {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
```

### Footer (11 instances)

```css
.foote {
  color: rgb(0, 0, 0);
  padding-top: 64px;
  padding-bottom: 48px;
  font-size: 12px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 12px 12px 12px 12px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(55, 234, 158);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 12px;
  border: 0px outset rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

## Layout System

**1 grid containers** and **2119 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1200px | 96px |
| 1000px | 0px |
| 500px | 24px |
| 1100px | 0px |
| 700px | 0px |
| 600px | 0px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 325.328px 325.328px 325.344px;
gap: 12px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 1205x |
| row/nowrap | 896x |
| row/wrap | 1x |
| column/wrap | 17x |

**Gap values:** `10px`, `12px`, `15px`, `16px`, `20px`, `24px`, `32px`, `36px`, `40px`, `48px`, `4px`, `5px`, `64px`, `6px`, `8px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 12px | Yes | 0 | No | 14658px |
| tablet (768px) | 12px | Yes | 0 | No | 14434px |
| desktop (1280px) | 12px | Yes | 0 | No | 9333px |
| wide (1920px) | 12px | Yes | 0 | No | 9333px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Page height: `14658px` → `14434px`

**768px → 1280px** (tablet → desktop):
- H1 size: `48px` → `64px`
- Page height: `14434px` → `9333px`

## Interaction States

### Button States

**"Get Access"**
```css
/* Hover */
background-color: rgb(55, 234, 158) → rgb(39, 219, 161);
```
```css
/* Focus */
background-color: rgb(55, 234, 158) → rgb(28, 211, 163);
outline: rgb(0, 0, 0) none 3px → rgb(16, 16, 16) auto 1px;
```

### Link Hover

```css
color: rgb(78, 91, 109) → rgb(0, 0, 0);
border-color: rgb(78, 91, 109) → rgb(0, 0, 0);
outline: rgb(78, 91, 109) none 3px → rgb(0, 0, 0) none 3px;
```

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 1 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#000000` | 21:1 | AAA |

## Design System Score

**Overall: 79/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 80/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 90/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Well-defined spacing scale, Clean elevation system, Strong accessibility compliance

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 17 !important rules — prefer specificity over overrides
- 52% of CSS is unused — consider purging
- 4195 duplicate CSS declarations

## Gradients

**10 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 118.664deg | 2 | brand |
| linear | 90deg | 5 | complex |
| radial | — | 2 | brand |
| linear | 90deg | 3 | bold |
| linear | 117.579deg | 2 | brand |
| linear | 117.069deg | 2 | brand |
| linear | 118.664deg | 2 | brand |
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| linear | to right | 2 | brand |

```css
background: linear-gradient(118.664deg, rgb(0, 0, 0), rgb(39, 50, 65));
background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 41%, rgb(55, 234, 158) 50%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0) 100%);
background: radial-gradient(rgba(233, 235, 239, 0) 2.1px, rgba(0, 0, 0, 0) 2.9px);
background: linear-gradient(90deg, rgb(0, 0, 0), rgb(106, 235, 201), rgb(0, 0, 0));
background: linear-gradient(117.579deg, rgba(215, 236, 236, 0.16), rgba(204, 234, 234, 0));
```

## Z-Index Map

**11 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 314159,314159 | div, div, div |
| sticky | 10,10 | div.f.r.a.m.e.r.-.1.5.x.u.6.3.x.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.1.5.x.u.6.3.x.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.1.5.x.u.6.3.x.-.c.o.n.t.a.i.n.e.r |
| base | 0,8 | div.f.r.a.m.e.r.-.1.s.d.u.q.p.7.-.c.o.n.t.a.i.n.e.r. .h.i.d.d.e.n.-.5.8.t.u.m.2, div.f.r.a.m.e.r.-.1.d.d.1.y.e.t, div.f.r.a.m.e.r.-.t.k.i.e.x.c |

**Issues:**
- [object Object]

## SVG Icons

**45 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 8 |
| sm | 7 |
| md | 10 |
| lg | 11 |
| xl | 9 |

**Icon colors:** `rgb(78, 91, 109)`, `var(--token-555ad846-c87a-4ba8-ad49-41c0b6d44353, rgb(28, 211, 163))`, `rgb(155, 165, 181)`, `rgb(55, 234, 158)`, `rgb(0, 0, 0)`, `rgb(22, 167, 129)`, `#686B6E`, `#B6F09C`, `#0C1132`, `#9B9C9E`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Geist | cdn | 400, 500, 600, 700, 900 | normal |
| Plus Jakarta Sans | cdn | 500, 600 | normal |
| Inter | self-hosted | 400, 600, 700, 900 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| avatar | 30 | objectFit: cover, borderRadius: 1000px, shape: circular |
| general | 13 | objectFit: cover, borderRadius: 16px, shape: rounded |
| thumbnail | 6 | objectFit: fill, borderRadius: 0px, shape: square |
| hero | 4 | objectFit: cover, borderRadius: 20px, shape: pill |

**Aspect ratios:** 1:1 (43x), 3:2 (3x), 4:3 (3x), 0.13:1 (1x), 3.01:1 (1x), 16:9 (1x), 8.36:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |

### Easing Families

- **ease-in** (3 uses) — `cubic-bezier(0.4, 0, 1, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `eKXFfL` | custom | background-position | 1 |

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (tight)

### Top CTA Verbs

- **get** (1)

### Button Copy Patterns

- "get access" (1×)

### Sample Headings

> Automate Smarter
> Grow
> Bolder.
> L
> e
> How it works?
> 01.
> Choose
Agents
> Discover the amazing 
> features of our AI Agents

## Page Intent

**Type:** `landing` (confidence 0.59)
**Description:** Agentix is a modern, responsive Framer template built for SaaS, AI tools, and startups. With clean design, smart interactions, and CMS-ready sections, it’s perfect for fast launches and high-convertin

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): testimonial → logo-wall → content → content → testimonial → testimonial → content → testimonial → bento → testimonials → testimonial → faq → testimonial → nav → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | testimonial | Automate Smarter | 0.8 |
| 2 | logo-wall | — | 0.85 |
| 3 | content | — | 0.3 |
| 4 | content | How it works? | 0.3 |
| 5 | testimonial | Discover the amazing  | 0.8 |
| 6 | testimonial | Built for Efficiency | 0.8 |
| 7 | content | Measure Real-Time 
Efficiency Gains | 0.3 |
| 8 | testimonial | Seamless Integrations, 
Zero Hassle | 0.8 |
| 9 | bento · features | — | 0.75 |
| 10 | testimonials | Review our latest articles | 0.4 |
| 11 | testimonial | What People Are Saying | 0.8 |
| 12 | faq | Frequently Asked Questions | 0.85 |
| 13 | testimonial | Try Agent 
for free today | 0.8 |
| 14 | footer | — | 0.95 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.401 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 1000px |
| backdrop-filter in use | no |
| Gradients | 10 |

## Imagery Style

**Label:** `photography` (confidence 0.057)
**Counts:** total 53, svg 0, icon 27, screenshot-like 0, photo-like 4
**Dominant aspect:** square-ish
**Radius profile on images:** rounded

## Component Library

**Detected:** `vuetify` (confidence 0.44)

Evidence:
- 7 v-* classes

## Component Screenshots

2 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| input--default | 0 | 240 × 40 | `screenshots/input-default-0.png` |
| button--default | 0 | 152 × 40 | `screenshots/button-default-0.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Geist` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
