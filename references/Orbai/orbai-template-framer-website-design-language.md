# Design Language: Orbai – AI Agency Template

> Extracted from `https://orbai-template.framer.website/` on June 15, 2026
> 3386 elements analyzed across 4 pages

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 824 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 5833 |
| `#f5f5f5` | hsl(0, 0%, 96%) | 245 |
| `#ffffff` | hsl(0, 0%, 100%) | 175 |

### Background Colors

Used on large-area elements: `#f5f5f5`, `#ffffff`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#ffffff`

### Gradients

```css
background-image: linear-gradient(rgb(0, 0, 0) -278%, rgb(255, 255, 255) 136%);
```

```css
background-image: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 213%);
```

```css
background-image: linear-gradient(25deg, rgb(0, 0, 0) 34%, rgb(255, 255, 255) 124%);
```

```css
background-image: radial-gradient(50% 50%, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(0deg, rgb(0, 0, 0) 34%, rgb(255, 255, 255) 124%);
```

```css
background-image: radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%);
```

```css
background-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(255, 255, 255) 170%);
```

```css
background-image: radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%);
```

```css
background-image: radial-gradient(50% 50% at 7.2% 6.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%);
```

```css
background-image: linear-gradient(rgba(62, 105, 184, 0.5) 0%, rgb(0, 0, 0) 16.2162%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 5833 |
| `#0000ee` | text, border | 824 |
| `#f5f5f5` | background | 245 |
| `#ffffff` | text, border, background | 175 |

## Typography

### Font Families

- **Inter** — used for all (366 elements)
- **Satoshi** — used for all (171 elements)
- **Times New Roman** — used for body (120 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 100px | 6.25rem | 400 | 120px | -6px | h1, span |
| 56px | 3.5rem | 500 | 67.2px | -0.56px | h2, span |
| 44px | 2.75rem | 500 | 52.8px | -0.44px | h2 |
| 36px | 2.25rem | 500 | 50.4px | normal | h3, span |
| 32px | 2rem | 400 | 32px | -0.8px | p |
| 28px | 1.75rem | 400 | 28px | normal | span |
| 24px | 1.5rem | 500 | 36px | normal | h4, span |
| 20px | 1.25rem | 500 | 24px | -0.2px | p, span |
| 16px | 1rem | 400 | normal | normal | html, head, meta, script |
| 14px | 0.875rem | 400 | 22.4px | normal | p |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |

### Heading Scale

```css
h1 { font-size: 100px; font-weight: 400; line-height: 120px; }
h2 { font-size: 56px; font-weight: 500; line-height: 67.2px; }
h2 { font-size: 44px; font-weight: 500; line-height: 52.8px; }
h3 { font-size: 36px; font-weight: 500; line-height: 50.4px; }
h4 { font-size: 24px; font-weight: 500; line-height: 36px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (3165x), `500` (196x), `700` (17x), `600` (8x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-44 | 44px | 2.75rem |
| spacing-60 | 60px | 3.75rem |
| spacing-80 | 80px | 5rem |
| spacing-100 | 100px | 6.25rem |
| spacing-160 | 160px | 10rem |
| spacing-200 | 200px | 12.5rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 5px | 4 |
| md | 8px | 127 |
| lg | 11px | 10 |
| lg | 14px | 1 |
| xl | 20px | 20 |
| xl | 23px | 1 |
| full | 34px | 1 |
| full | 40px | 2 |
| full | 50px | 4 |
| full | 60px | 14 |
| full | 100px | 29 |
| full | 192px | 1 |
| full | 228px | 24 |
| full | 455px | 2 |
| full | 1000px | 3 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(0, 0, 0) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0.636953px
```css
box-shadow: rgba(0, 0, 0, 0.16) 0px 0.636953px 0.636953px -1px, rgba(0, 0, 0, 0.15) 0px 1.9316px 1.9316px -2px, rgba(0, 0, 0, 0.13) 0px 5.10612px 5.10612px -3px, rgba(0, 0, 0, 0.04) 0px 16px 16px -4px, rgba(227, 227, 227, 0.46) 0px -3px 1px 0px inset;
```

**xs (inset)** — blur: 0.706592px
```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 0.706592px 0.706592px -0.541667px, rgba(0, 0, 0, 0.09) 0px 1.80656px 1.80656px -1.08333px, rgba(0, 0, 0, 0.09) 0px 3.62176px 3.62176px -1.625px, rgba(0, 0, 0, 0.09) 0px 6.8656px 6.8656px -2.16667px, rgba(0, 0, 0, 0.08) 0px 13.6468px 13.6468px -2.70833px, rgba(0, 0, 0, 0.05) 0px 30px 30px -3.25px, rgb(255, 255, 255) 0px 3px 1px 0px inset;
```

**xs** — blur: 0.706592px
```css
box-shadow: rgba(16, 49, 77, 0.24) 0px 0.706592px 0.706592px -0.666667px, rgba(16, 49, 77, 0.23) 0px 1.80656px 1.80656px -1.33333px, rgba(16, 49, 77, 0.22) 0px 3.62176px 3.62176px -2px, rgba(16, 49, 77, 0.2) 0px 6.8656px 6.8656px -2.66667px, rgba(16, 49, 77, 0.16) 0px 13.6468px 13.6468px -3.33333px, rgba(16, 49, 77, 0.06) 0px 30px 30px -4px;
```

**xs (inset)** — blur: 0.706592px
```css
box-shadow: rgba(158, 158, 158, 0.69) 0px 0.706592px 0.706592px -0.583333px, rgba(158, 158, 158, 0.68) 0px 1.80656px 1.80656px -1.16667px, rgba(158, 158, 158, 0.65) 0px 3.62176px 3.62176px -1.75px, rgba(158, 158, 158, 0.61) 0px 6.8656px 6.8656px -2.33333px, rgba(158, 158, 158, 0.52) 0px 13.6468px 13.6468px -2.91667px, rgba(158, 158, 158, 0.3) 0px 30px 30px -3.5px, rgb(255, 255, 255) 0px 3px 1px 0px inset;
```

**xs (inset)** — blur: 0.706592px
```css
box-shadow: rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset;
```

**xs (inset)** — blur: 0.706592px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.19) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.18) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.17) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.13) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.05) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset;
```

**xs** — blur: 0.706592px
```css
box-shadow: rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px;
```

**xs** — blur: 0.706592px
```css
box-shadow: rgba(171, 171, 171, 0.64) 0px 0.706592px 0.706592px -0.541667px, rgba(171, 171, 171, 0.63) 0px 1.80656px 1.80656px -1.08333px, rgba(171, 171, 171, 0.61) 0px 3.62176px 3.62176px -1.625px, rgba(171, 171, 171, 0.58) 0px 6.8656px 6.8656px -2.16667px, rgba(171, 171, 171, 0.51) 0px 13.6468px 13.6468px -2.70833px, rgba(171, 171, 171, 0.35) 0px 30px 30px -3.25px;
```

**xs (inset)** — blur: 0.706592px
```css
box-shadow: rgba(0, 0, 0, 0.16) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.15) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.15) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.13) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.11) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.04) 0px 30px 30px -4px, rgb(36, 36, 36) 0px 3px 1px 0px inset;
```

**xs (inset)** — blur: 0.706592px
```css
box-shadow: rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px inset, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px inset, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px inset, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px inset, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px inset, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px inset;
```

**xs (inset)** — blur: 0.706592px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0.706592px 0.706592px -0.666667px inset, rgba(0, 0, 0, 0) 0px 1.80656px 1.80656px -1.33333px inset, rgba(0, 0, 0, 0) 0px 3.62176px 3.62176px -2px inset, rgba(0, 0, 0, 0) 0px 6.8656px 6.8656px -2.66667px inset, rgba(0, 0, 0, 0) 0px 13.6468px 13.6468px -3.33333px inset, rgba(0, 0, 0, 0) 0px 30px 30px -4px inset;
```

**xs** — blur: 0.706592px
```css
box-shadow: rgba(16, 49, 77, 0.05) 0px 0.706592px 0.706592px -0.291667px, rgba(16, 49, 77, 0.06) 0px 1.80656px 1.80656px -0.583333px, rgba(16, 49, 77, 0.06) 0px 3.62176px 3.62176px -0.875px, rgba(16, 49, 77, 0.06) 0px 6.8656px 6.8656px -1.16667px, rgba(16, 49, 77, 0.07) 0px 13.6468px 13.6468px -1.45833px, rgba(16, 49, 77, 0.1) 0px 30px 30px -1.75px;
```

**xs** — blur: 1.08394px
```css
box-shadow: rgba(61, 61, 61, 0.72) 0px 0.602187px 1.08394px -1.25px, rgba(61, 61, 61, 0.64) 0px 2.28853px 4.11936px -2.5px, rgba(61, 61, 61, 0.25) 0px 10px 18px -3.75px, rgba(0, 0, 0, 0.35) 0px 0.706592px 0.706592px -0.583333px, rgba(0, 0, 0, 0.34) 0px 1.80656px 1.80656px -1.16667px, rgba(0, 0, 0, 0.33) 0px 3.62176px 3.62176px -1.75px, rgba(0, 0, 0, 0.3) 0px 6.8656px 6.8656px -2.33333px, rgba(0, 0, 0, 0.26) 0px 13.6468px 13.6468px -2.91667px, rgba(0, 0, 0, 0.15) 0px 30px 30px -3.5px;
```

**xs** — blur: 0.989229px
```css
box-shadow: rgba(122, 122, 122, 0.58) 0px 0.706592px 0.989229px -0.541667px, rgba(122, 122, 122, 0.57) 0px 1.80656px 2.52919px -1.08333px, rgba(122, 122, 122, 0.55) 0px 3.62176px 5.07046px -1.625px, rgba(122, 122, 122, 0.52) 0px 6.8656px 9.61184px -2.16667px, rgba(122, 122, 122, 0.46) 0px 13.6468px 19.1055px -2.70833px, rgba(122, 122, 122, 0.32) 0px 30px 42px -3.25px;
```

**xs** — blur: 1.56569px
```css
box-shadow: rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px;
```

**xs (inset)** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 1px 2px 0px inset;
```

**sm (inset)** — blur: 1px
```css
box-shadow: rgba(255, 255, 255, 0.4) 0px 3px 1px 0px inset, rgba(255, 255, 255, 0.4) 0px -3px 1px 0px inset;
```

**md (inset)** — blur: 9px
```css
box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 9px 0px inset;
```

**xl** — blur: 30px
```css
box-shadow: rgba(0, 0, 0, 0.2) 1px 20px 30px -12px;
```

## CSS Custom Properties

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
| md | 810px | max-width |
| 1199px | 1199px | max-width |
| 1200px | 1200px | max-width |

## Transitions & Animations

### Common Transitions

```css
transition: all;
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

### Buttons (3 instances)

```css
.button {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 40px;
}
```

### Cards (150 instances)

```css
.card {
  background-color: rgb(245, 245, 245);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (4 instances)

```css
.input {
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 12px;
  padding-right: 12px;
}
```

### Links (139 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (8 instances)

```css
.navigatio {
  background-color: rgba(245, 245, 245, 0.2);
  color: rgb(0, 0, 0);
  padding-top: 12px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;
}
```

### Footer (4 instances)

```css
.foote {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  padding-top: 160px;
  padding-bottom: 40px;
  font-size: 12px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 40px;
  border: 0px none rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

## Layout System

**0 grid containers** and **980 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1200px | 0px |
| 995px | 0px |
| 844px | 0px |
| 700px | 0px |
| 1280px | 0px |
| 100% | 10px |
| 640px | 0px |
| 440px | 0px |
| 760px | 0px |
| 1000px | 0px |
| 600px | 0px |
| 1028px | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 606x |
| row/nowrap | 348x |
| row/wrap | 21x |
| column/wrap | 5x |

**Gap values:** `10px`, `11px`, `12px`, `14px`, `16px`, `20px`, `24px`, `25px`, `30px`, `32px`, `40px`, `44px`, `4px`, `60px`, `6px`, `7px`, `8px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 12px | Yes | 0 | No | 17713px |
| tablet (768px) | 12px | Yes | 0 | No | 16730px |
| desktop (1280px) | 12px | Yes | 0 | No | 12505px |
| wide (1920px) | 12px | Yes | 0 | No | 12785px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Page height: `17713px` → `16730px`

**768px → 1280px** (tablet → desktop):
- H1 size: `40px` → `100px`
- Page height: `16730px` → `12505px`

**1280px → 1920px** (desktop → wide):
- Page height: `12505px` → `12785px`

## Interaction States

### Button States

**""**
```css
/* Focus */
outline: rgb(0, 0, 0) none 3px → rgb(16, 16, 16) auto 1px;
```

**""**
```css
/* Focus */
outline: rgb(0, 0, 0) none 3px → rgb(16, 16, 16) auto 1px;
```

### Link Hover

```css
box-shadow: rgba(0, 0, 0, 0) 0px 1px 2px 0px inset → rgba(0, 0, 0, 0.086) 0px 1px 2px 0px inset;
```

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 84/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 80/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 62/100 |
| Border Radius Consistency | 65/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Strong accessibility compliance

**Issues:**
- 16 !important rules — prefer specificity over overrides
- 66% of CSS is unused — consider purging
- 5998 duplicate CSS declarations

## Gradients

**10 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | 90deg | 2 | brand |
| linear | 25deg | 2 | brand |
| radial | — | 3 | bold |
| linear | 0deg | 2 | brand |
| radial | — | 3 | bold |
| linear | — | 2 | brand |
| radial | — | 3 | bold |
| radial | — | 3 | bold |
| linear | — | 2 | brand |

```css
background: linear-gradient(rgb(0, 0, 0) -278%, rgb(255, 255, 255) 136%);
background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 213%);
background: linear-gradient(25deg, rgb(0, 0, 0) 34%, rgb(255, 255, 255) 124%);
background: radial-gradient(50% 50%, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
background: linear-gradient(0deg, rgb(0, 0, 0) 34%, rgb(255, 255, 255) 124%);
```

## Z-Index Map

**12 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | div, iframe.s.t.a.t.u.s._.h.i.d.d.e.n, div |
| sticky | 10,10 | div.f.r.a.m.e.r.-.i.b.c.0.2.n.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.i.b.c.0.2.n.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.d.9.z.9.m.y.-.c.o.n.t.a.i.n.e.r |
| base | 0,9 | div, div, div |

**Issues:**
- [object Object]

## SVG Icons

**45 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 1 |
| sm | 6 |
| md | 28 |
| lg | 5 |
| xl | 5 |

**Icon colors:** `rgba(0, 0, 0, 0.4)`, `rgb(255, 255, 255)`, `rgb(0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Plus Jakarta Sans | cdn | 700 | normal |
| Inter | self-hosted | 400, 500, 600, 700, 900 | normal, italic |
| Satoshi | self-hosted | 500, 700 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 23 | objectFit: cover, borderRadius: 16px, shape: rounded |
| thumbnail | 11 | objectFit: contain, borderRadius: 0px, shape: square |
| avatar | 1 | objectFit: cover, borderRadius: 1000px, shape: circular |

**Aspect ratios:** 1:1 (27x), 3:2 (3x), 2.49:1 (2x), 3.68:1 (1x), 2:3 (1x), 4:3 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

## Component Anatomy

### button — 2 instances

**Slots:** label, icon

## Brand Voice

**Tone:** friendly · **Pronoun:** we→you · **Headings:** Title Case (tight)

### Sample Headings

> ORB AI
> "We harness your data, understand your audience, and use AI to help your brand rise above the noise. The best part? We execute, too."
> Why Choose Us
> All features in 1 tool
> Our AI-Driven Services
> Simple & Scalable
> 01
> 02
> 03
> Proven Impact & Results

## Page Intent

**Type:** `landing` (confidence 0.59)
**Description:** Orbai is a premium Framer template built to elevate your AI automation agency. Designed with a sleek, modern aesthetic.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): hero → testimonial → feature-grid → content → testimonials → testimonials → content → testimonial → testimonial → pricing → content → testimonial → nav → nav → testimonial → faq → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | nav | — | 0.9 |
| 2 | hero | ORB AI | 0.85 |
| 3 | testimonial | "We harness your data, understand your audience, and use AI to help your brand r | 0.8 |
| 4 | feature-grid | Why Choose Us | 0.8 |
| 5 | content | — | 0.3 |
| 6 | testimonials | All features in 1 tool | 0.4 |
| 7 | testimonials | Our AI-Driven Services | 0.4 |
| 8 | content | Simple & Scalable | 0.3 |
| 9 | testimonial | Proven Impact & Results | 0.8 |
| 10 | testimonial | What Our Clients Say | 0.8 |
| 11 | pricing | Simple Price For All | 0.4 |
| 12 | content | Precision vs Basic | 0.3 |
| 13 | testimonial | Team Behind Success | 0.8 |
| 14 | testimonial | — | 0.8 |
| 15 | faq | Questions? Answers! | 0.85 |
| 16 | footer | ORB AI | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.25 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 1000px |
| backdrop-filter in use | no |
| Gradients | 10 |

## Imagery Style

**Label:** `mixed` (confidence 0.029)
**Counts:** total 35, svg 1, icon 1, screenshot-like 0, photo-like 2
**Dominant aspect:** square-ish
**Radius profile on images:** rounded

## Component Library

**Detected:** `vuetify` (confidence 0.9)

Evidence:
- 44 v-* classes

## Component Screenshots

2 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default | 0 | 40 × 40 | `screenshots/button-default-0.png` |
| button--default | 1 | 40 × 40 | `screenshots/button-default-1.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Inter` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
