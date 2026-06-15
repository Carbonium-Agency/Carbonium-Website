# Agent instructions — design system

This project follows the design system extracted from https://calisto.framer.website/.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://calisto.framer.website/
Extracted by designlang v7.0.0 on 2026-06-15T07:15:54.891Z

## Semantic tokens (use these)
- color.action.primary: #0000ee
- color.surface.default: #f5f5f5
- color.text.body: #000000
- radius.control: 4px
- typography.body.fontFamily: Manrope

## Regions
- nav
- nav
- cta
- content
- content
- content
- content
- content
- testimonials
- content
- content
- content
- features
- content
- content
- pricing
- testimonials
- testimonials
- content
- content
- nav
- nav
- nav
- nav
- nav
- nav
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
