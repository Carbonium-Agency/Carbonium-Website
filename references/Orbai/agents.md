# Agent instructions — design system

This project follows the design system extracted from https://orbai-template.framer.website/.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://orbai-template.framer.website/
Extracted by designlang v7.0.0 on 2026-06-15T07:14:03.259Z

## Semantic tokens (use these)
- color.action.primary: #0000ee
- color.surface.default: #f5f5f5
- color.text.body: #000000
- radius.control: 5px
- typography.body.fontFamily: Inter

## Regions
- nav
- nav
- hero
- testimonials
- features
- content
- testimonials
- testimonials
- content
- content
- testimonials
- pricing
- content
- hero
- content
- pricing
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
