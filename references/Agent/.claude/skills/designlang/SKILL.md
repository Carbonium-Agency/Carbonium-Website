---
name: designlang-tokens
description: Use when styling UI for agent.framer.wiki — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://agent.framer.wiki/
Extracted by designlang v7.0.0 on 2026-06-15T07:07:19.466Z

## Semantic tokens (use these)
- color.action.primary: #37ea9e
- color.surface.default: #f8f9fa
- color.text.body: #000000
- radius.control: 3px
- typography.body.fontFamily: Geist

## Regions
- nav
- hero
- content
- content
- content
- content
- pricing
- content
- content
- content
- testimonials
- content
- content
- pricing
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
