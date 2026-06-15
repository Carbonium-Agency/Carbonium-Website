# QA REPORT — Carbonium AI Marketing Agency Website

**QA Reviewer:** Dwight (QA Agent — dwight-mqetam2p)
**Date:** 2026-06-15
**Status:** ❌ NOT CLEARED FOR LAUNCH — Critical issues require resolution

---

## Files Reviewed

| File | Description |
|---|---|
| `index.html` | Home page |
| `services.html` | Services page (8 service sections) |
| `about.html` | About page |
| `case-studies.html` | Case Studies page |
| `contact.html` | Contact page |
| `blog/index.html` | Blog listing page |
| `blog/post-ai-marketing-dubai-2026.html` | Blog Post 1 |
| `blog/post-whatsapp-marketing-dubai.html` | Blog Post 3 |
| `sitemap.xml` | XML sitemap |
| `robots.txt` | Robots directive |
| `js/main.js` | Site-wide JavaScript |
| `css/style.css` | Stylesheet (exists, not audited for CSS specifics) |

---

## Issue Summary

| Severity | Count |
|---|---|
| 🔴 Critical (launch blockers) | 4 |
| 🟠 High | 9 |
| 🟡 Medium | 5 |
| ℹ️ Low / Notes | 5 |
| 🚧 Blocked (known) | 3 |

---

## 🔴 CRITICAL ISSUES — Launch Blockers

These must be resolved before the site can go live.

---

### C1 — Contact Form Formspree ID Not Replaced
**File:** `contact.html:115`
**Finding:** The contact form action is still pointing to the placeholder URL:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
```
`YOUR_FORM_ID` has not been replaced with a real Formspree form ID. All form submissions will return a 404 or error. No enquiries will be received from the site.

**Fix:** Register a form at formspree.io, get the form ID, and replace `YOUR_FORM_ID` with the real ID (e.g., `xnqkgbpz`). Requires testing after replacement to confirm email delivery (Task 5.7).

---

### C2 — Founder Photo Absent on About Page
**File:** `about.html:70–72`
**Finding:** The founder photo `<div>` is completely empty — it contains only a comment:
```html
<div class="founder__photo reveal">
  <!-- Replace with: <img src="img/sutriano-wu.jpg" alt="Sutriano Wu, Founder of Carbonium"> -->
</div>
```
No image is rendered. The referenced file `img/sutriano-wu.jpg` does not exist. The photo URL noted in COPY-ALL-PAGES.md (`https://framerusercontent.com/images/AA1x01ILHnP1MjDjXLvbqlwBChQ.jpeg`) was also not used.

**Fix:** Add Sutriano's photo. Either use the Framer URL (verify it is permanent), or download and save as a local asset (e.g., `assets/img/sutriano-wu.jpg`) and update the `<img>` tag. Remove the comment.

---

### C3 — Privacy Policy and Terms of Service Pages Not Built
**Files:** All pages (footer, cookie banner, contact form)
**Finding:** Every page links to `<a href="#">Privacy Policy</a>` and `<a href="#">Terms of Service</a>`. Neither page exists. The contact form's privacy note also links to `#`:
```html
<a href="#">Privacy Policy</a>
```
COPY-ALL-PAGES.md explicitly notes these are "to be created separately with legal input from Sutriano" — but they must exist before launch (legal requirement, GDPR/UAE data law compliance).

**Fix:** Create placeholder `privacy-policy.html` and `terms.html` with basic content, or obtain legal copy from Sutriano and build them. Update all links across all 8 pages and the cookie banner.

---

### C4 — Blog Post 2 (AI Lead Generation) Not Built; Card Points to Dead Link
**File:** `blog/index.html:99`
**Finding:** The second blog card on the blog listing page links to `href="#"` with the label "Coming Soon":
```html
<h3><a href="#">The Complete Guide to AI Lead Generation for Growth-Focused Businesses in 2026</a></h3>
<a href="#" class="blog-card__link" style="color:var(--text-muted);">Coming Soon</a>
```
The file `blog/post-ai-lead-generation-uae-guide.html` does not exist. The full copy for this post is written in COPY-ALL-PAGES.md (Blog Post 2). The post is also absent from `sitemap.xml`.

**Fix (Pre-launch option A):** Build the page using the existing copy from COPY-ALL-PAGES.md and add to sitemap. **Fix (Pre-launch option B):** Remove this card from the blog listing entirely until the page is built — do not display a "Coming Soon" stub linked to `#` at launch.

---

## 🟠 HIGH SEVERITY ISSUES

---

### H1 — OG / Twitter Share Images Not Found — No `assets/` Directory
**Files:** `index.html`, `blog/post-ai-marketing-dubai-2026.html`, `blog/post-whatsapp-marketing-dubai.html`
**Finding:** Multiple pages reference OG and Twitter preview images that do not exist:
- `https://www.carbonium.agency/assets/og/carbonium-og-home.jpg` (index.html)
- `https://www.carbonium.agency/assets/og/blog-ai-marketing-roi.jpg` (blog post 1)
- `https://www.carbonium.agency/assets/og/blog-whatsapp-marketing.jpg` (blog post 3)

The `assets/` directory does not exist in the project at all. Social shares for these pages will show no preview image — a significant trust/credibility issue on LinkedIn, WhatsApp, and X/Twitter.

**Additionally missing OG/Twitter images:** `services.html`, `about.html`, `case-studies.html`, and `contact.html` have no `og:image` or `twitter:image` tags at all — these will also show blank previews.

**Fix:** Create `assets/og/` directory. Produce branded 1200×630px images for each page. Add missing `og:image` / `twitter:image` tags to services, about, case-studies, contact, and blog index pages.

---

### H2 — `blog/index.html` Missing Canonical, Robots, and Schema Tags
**File:** `blog/index.html`
**Finding:** Unlike every other page, the blog listing page is missing three critical SEO elements:
- No `<link rel="canonical" href="...">` tag
- No `<meta name="robots" content="index, follow">` tag
- No JSON-LD schema markup (BreadcrumbList, Blog, or ItemList)

Task 4.4 (schema) and 4.7 (canonical) are marked `[x]` Done in TASK-BOARD.md, but neither was implemented on this page.

**Fix:** Add canonical (`https://www.carbonium.agency/blog/`), robots meta, and appropriate schema (e.g., `Blog` or `BreadcrumbList`) to `blog/index.html`.

---

### H3 — Schema Markup Missing on Three Pages (Contradicts Task 4.4 "Done")
**Files:** `services.html`, `about.html`, `case-studies.html`
**Finding:** Task 4.4 in TASK-BOARD.md is marked done with the note: "ItemList on services; Person on about." However, none of these three pages contain any `<script type="application/ld+json">` blocks:
- `services.html` — Missing `ItemList` schema for 8 services
- `about.html` — Missing `Person` schema for Sutriano Wu
- `case-studies.html` — Missing any schema

Pages with schema confirmed working: `index.html` (Organization, WebSite, LocalBusiness), `contact.html` (FAQPage), both blog posts (Article, Breadcrumb).

**Fix:** Add the missing JSON-LD blocks to services.html (ItemList), about.html (Person for Sutriano Wu referencing `@id: https://www.carbonium.agency/about/#sutriano-wu`), and case-studies.html (appropriate type).

---

### H4 — Mobile Nav and Cookie Banner Missing ARIA Attributes on Blog Post Pages
**Files:** `blog/post-ai-marketing-dubai-2026.html:65`, `blog/post-whatsapp-marketing-dubai.html:65`
**Finding:** Both blog post pages have stripped-down `<div class="nav__mobile">` and `<div id="cookie-banner">` elements missing their ARIA attributes — unlike all other pages:

Blog post pages (missing attributes):
```html
<div class="nav__mobile">  <!-- missing: role="dialog" aria-label="Mobile navigation" -->
<div id="cookie-banner">   <!-- missing: role="dialog" aria-label="Cookie consent" -->
```

All other pages correctly include:
```html
<div class="nav__mobile" role="dialog" aria-label="Mobile navigation">
<div id="cookie-banner" role="dialog" aria-label="Cookie consent">
```

**Fix:** Add `role="dialog"` and appropriate `aria-label` to both elements on both blog post pages.

---

### H5 — Hero Particle Canvas Element Missing from `index.html`
**Files:** `index.html` (hero section), `js/main.js:7–10`
**Finding:** `main.js` calls `initParticleCanvas()` which looks for `document.getElementById('particle-canvas')`. However, no `<canvas id="particle-canvas">` element exists anywhere in `index.html`. The hero `<!-- Right: visual card -->` shows a static stats card — the animated particle/AI visual described in PROJECT-BRIEF.md ("Animated AI/particle visuals in the hero section") and TASK-BOARD.md task 3.3 never renders.

**Fix:** Add `<canvas id="particle-canvas">` to the hero section of `index.html` (positioned behind the content, using CSS absolute/fixed positioning). This is required per the brief's design direction and task 3.3.

---

### H6 — Hero Missing Secondary CTA Button ("Explore Our Services")
**File:** `index.html:102–105`
**Finding:** COPY-ALL-PAGES.md specifies two CTA buttons in the hero:
- Primary: "Book a Free Strategy Call"
- Secondary: "Explore Our Services"

Only the primary button is present in the built HTML. The secondary button is absent.

**Fix:** Add `<a href="services.html" class="btn btn--secondary">Explore Our Services</a>` next to the existing primary CTA in the hero section.

---

### H7 — Logo Served from External URL (Fragile Dependency)
**Files:** All 8 HTML pages (nav and footer)
**Finding:** The logo `src` attribute on every page points to an external URL on a separate domain:
```html
src="https://carbonium.agency/images/200/19017010/Screenshot_2025-09-02_at_19.34.19-removebg-preview-5E6yHE6egdgW_Dskl8RvoQ.png"
```
This is a file path on a live external server. If the file is renamed, moved, or that server goes down, every page on the site loses its logo. The filename also contains "Screenshot" which is a temporary file name.

**Fix:** Download the logo image, save it locally as `assets/img/carbonium-logo.png`, and update the `src` on all 8 pages.

---

### H8 — Dubai/UAE Copy Systematically Removed from Hero and Key Sections
**Files:** `index.html`, `about.html`, `services.html`
**Finding:** A pattern of Dubai/UAE/Middle East references have been removed from key copy positions compared to COPY-ALL-PAGES.md:

| Location | COPY-ALL-PAGES.md spec | HTML build |
|---|---|---|
| Hero eyebrow (index.html:93) | "AI Marketing for Dubai & the Middle East" | "AI Marketing · Built to Scale" |
| Hero sub-headline (index.html:99) | "...built specifically for Dubai and Middle East businesses." | "...built specifically for ambitious, growth-focused businesses." |
| About hero sub (about.html:62) | "...built specifically for the Dubai and Middle East market." | "...built to help ambitious, growth-focused businesses compete and grow." |
| About market headline (about.html:96) | "Dubai Is the Most Exciting AI Opportunity..." | "The AI Marketing Opportunity Is Here. Right Now." |
| WhatsApp tagline (services.html:441) | "In Dubai and the Middle East, WhatsApp isn't just a messaging app..." | "WhatsApp isn't just a messaging app — it's where your audience actually does business." |

The TASK-BOARD decisions log notes that meta title/description/keywords were restored to Dubai-targeted values — but the visible on-page copy (headlines and sub-headlines) still lacks the regional targeting. This directly undermines the brand strategy, the target audience positioning, and on-page SEO keyword density for the site's primary target market.

**Action required:** Confirm with Sutriano/Pam whether this generalization was intentional. If not, restore Dubai/ME references to hero eyebrow, hero sub-headline, About page hero, and WhatsApp service sub-headline.

---

### H9 — No Favicon Defined on Any Page
**Files:** All 8 HTML pages
**Finding:** None of the 8 HTML pages include a `<link rel="icon">` or `<link rel="apple-touch-icon">` tag. The browser tab will show a blank/browser-default icon at launch — a poor impression for a premium agency website.

**Fix:** Create a favicon (minimum `favicon.ico` or `favicon.png` 32×32) and add to all pages:
```html
<link rel="icon" type="image/png" href="/assets/img/favicon.png">
```

---

## 🟡 MEDIUM SEVERITY ISSUES

---

### M1 — Footer Services List Inconsistent Across Pages (8 vs 4)
**Files:** `about.html`, `case-studies.html`, `contact.html`, `blog/index.html`, both blog posts
**Finding:** `index.html` footer correctly lists all 8 services under the "Services" footer column. All other pages only list 4 services:
- AI Agent Automation
- Paid Advertising
- Lead Generation
- WhatsApp Marketing

Missing from these footers: Social Media AI, Brand Positioning, AI Video, Website Development.

**Fix:** Standardise footer across all pages. Either show all 8 services or show a consistent shortened list — but it should be the same on every page.

---

### M2 — Service 06 (AI Video) Missing "The Carbonium Process" Section
**File:** `services.html:384–432`
**Finding:** All other 7 service sections include a "The Carbonium Process" step-by-step block. Service 06 (AI Video & Short-Form Content Production, lines 384–432) is missing this section entirely. The copy exists in COPY-ALL-PAGES.md (4-step process: Strategy → Script & Produce → Publish → Analyse).

**Fix:** Add the process section to the Service 06 content block, consistent with the other 7 service sections.

---

### M3 — Blog Index Bottom CTA Copy Mismatch
**File:** `blog/index.html:130–137`
**Finding:** The bottom CTA section headline reads "Get AI Marketing Insights in Your Inbox" — implying a newsletter/email signup. However, there is no email input or newsletter integration; both CTA buttons link to "Book a Free Strategy Call" and "Explore Our Services". The headline creates a false expectation of an email newsletter feature that doesn't exist.

**Fix:** Change the CTA headline/body to match the buttons (e.g., "Ready to Put AI to Work for Your Business?" with the existing CTA buttons), or build a newsletter signup integration and add an email field.

---

### M4 — Contact "Book a Strategy Call" Card Links to Form, Not a Calendar
**File:** `contact.html:80`
**Finding:** The "Book a Strategy Call" contact method card button links to `contact.html#enquiry-form` (scrolls to the enquiry form). COPY-ALL-PAGES.md specifies "Schedule a free 30-minute call... at a time that works for you" implying a booking calendar (Calendly, Cal.com, etc.). No calendar integration has been implemented.

**Fix (option A):** Integrate a Calendly/Cal.com embed or link, and update the "Book Now →" button to open it. **Fix (option B):** Update the card copy to reflect that booking happens via the form below — remove the implicit promise of a calendar scheduler if none will be implemented.

---

### M5 — Blog Filter Data-Category Attribute Case Sensitivity Gap
**File:** `blog/index.html:64–67`, `blog/index.html:88–89`
**Finding:** The filter button uses `data-filter="whatsapp"` but the WhatsApp post card uses `data-category="whatsapp"`. These match. However, blog post card 2 (AI Lead Generation, `data-category="lead-generation"`) and blog post card 3 (WhatsApp, `data-category="whatsapp"`) work correctly. But `data-filter="paid-advertising"` and `data-filter="automation"` buttons exist in the filter bar with no cards matching those categories. Visitors clicking "Paid Advertising" or "Automation" will see all cards disappear (empty state). No empty state message is displayed.

**Fix:** Either add cards matching the missing filter categories, remove the unused filter buttons before launch, or add an "No articles found" empty state message when no cards match the filter.

---

## ℹ️ LOW SEVERITY / NOTES

---

### L1 — LinkedIn sameAs URL in Schema Needs Verification
**File:** `index.html` (Organization schema)
**Finding:** `"sameAs":["https://www.linkedin.com/in/sutrianowu"]` — this URL needs to be confirmed as the correct LinkedIn profile URL before launch. If the URL is wrong, it creates a false association in schema.

---

### L2 — Canonical URL Format Assumes Clean URL Server Config
**Files:** All pages
**Finding:** Canonical URLs use trailing-slash format (e.g., `https://www.carbonium.agency/services/`) but HTML files are named `services.html`. This only resolves correctly if the hosting server is configured to serve `services.html` when `/services/` is requested (via directory index, `.htaccess` rewrite, or Netlify/Vercel redirect rules). No `.htaccess` or redirect config file exists in the project.

**Note:** Confirm with Jim that hosting (Vercel/Netlify/cPanel) is configured to handle these URL rewrites before launch. Add redirect rules to deployment config.

---

### L3 — Blog Post Author Date Is Approximate
**Files:** `blog/post-ai-marketing-dubai-2026.html:85`, `blog/post-whatsapp-marketing-dubai.html:86`
**Finding:** Both post author lines read: `By Sutriano Wu, Carbonium · 2026`. A full date (e.g., "15 June 2026") is preferable and consistent with the `article:published_time` meta tag which uses the precise date. The schema correctly uses `"datePublished":"2026-06-15"` but the visible copy only shows the year.

---

### L4 — `stat-number` Count-Up Not Applied to "3x" ROI Stat
**File:** `index.html:407–410`
**Finding:** The "3x Average Client ROI" stat uses `data-target="3"` and `data-suffix="x"`. The count-up animation will run: 0x → 1x → 2x → 3x. This is technically functional but may appear odd (counting a one-digit number). Minor UX note for Sutriano to review aesthetics.

---

### L5 — Blog Post "Related Articles" Sections Use Emoji Instead of SVG Icons
**Files:** `blog/post-ai-marketing-dubai-2026.html:158`, `blog/post-whatsapp-marketing-dubai.html:182`
**Finding:** The "Keep Reading" related article card images use emoji characters (`💬`, `🤖`) directly in the HTML, while the main blog listing page uses proper SVG icon elements. Inconsistent visual treatment.

---

## 🚧 KNOWN BLOCKED ITEMS (Not QA Issues — Awaiting Dependencies)

These items are known blockers documented in TASK-BOARD.md and are expected to be incomplete at this stage:

| Item | Status | Blocked On |
|---|---|---|
| WhatsApp button (3.18) | `[!]` Blocked | Task 1.3 — Sutriano to confirm WhatsApp Business number |
| Case Studies full content (3.10) | `[!]` Blocked | Task 1.6 — Client results and metrics from Sutriano |
| Testimonials (all pages) | Placeholder copy | Real quotes needed from Sutriano |
| Blog Post 2 (AI Lead Gen guide) | Not built | Follow-on task after C4 decision above |

---

## ✅ ITEMS CONFIRMED CORRECT

The following were reviewed and confirmed as correctly implemented:

- All 6 primary page routes link correctly (index → services, about, case-studies, blog, contact)
- Blog navigation from blog sub-directory uses correct relative paths (`../index.html`, `../services.html`, etc.)
- WhatsApp FAB present and correctly linked to `https://wa.me/971567985386` on all pages *(pending task 3.18 final wire-up)*
- All 8 service section anchor IDs (`#ai-agents`, `#paid-ads`, `#social-media`, `#lead-gen`, `#brand-positioning`, `#ai-video`, `#whatsapp`, `#website-dev`) exist and match all internal links
- Cookie banner logic in `main.js` uses localStorage correctly
- Contact form AJAX submission in `main.js` is well-implemented (pending real Formspree ID — see C1)
- Blog category filter (`main.js`) works correctly for existing card categories
- Scroll reveal and count-up animations correctly implemented in `main.js`
- Sticky nav scroll behaviour correctly implemented
- `sitemap.xml` includes all 8 built URLs with appropriate priorities and frequencies
- `robots.txt` correctly allows all crawlers and points to sitemap
- Mobile nav includes all 6 nav links and CTA button on all pages
- All page `<title>` tags are unique and SEO-appropriate
- Meta descriptions are within recommended length on all pages
- `lang="en"` set on all pages
- `charset="UTF-8"` set on all pages
- `viewport` meta correct on all pages
- `rel="noopener"` on all external WhatsApp links
- Blog post schema (`Article`, `BreadcrumbList`) correctly implemented on both built blog posts
- Organization, WebSite, and LocalBusiness schema correctly implemented on `index.html`
- FAQPage schema correctly implemented on `contact.html`
- Copyright year (2026) consistent across all pages
- Email address (`sutrianowu@carbonium.agency`) consistent and correctly `mailto:` linked
- `<footer>` has `role="contentinfo"` on all pages
- `<nav>` has `role="navigation"` and `aria-label="Main navigation"` on all top-level pages

---

## PRE-LAUNCH CHECKLIST (QA Tasks 5.1–5.11)

| Task | Item | Status |
|---|---|---|
| 5.1 | Cross-browser testing (Chrome, Firefox, Safari, Edge) | ⬜ Not tested — requires live browser |
| 5.2 | Mobile device testing (iOS and Android) | ⬜ Not tested — requires live device |
| 5.3 | Tablet layout review | ⬜ Not tested |
| 5.4 | Accessibility audit — WCAG 2.1 AA | ⚠️ H4 found; full Axe/Lighthouse audit required |
| 5.5 | Lighthouse performance audit (≥85 mobile) | ⬜ Not tested — requires live server |
| 5.6 | Test all animations and interactive elements | ⚠️ H5 found (particle canvas missing); cookie/nav/filter/count-up JS confirmed correct in code |
| 5.7 | Contact form — confirm email delivery | ❌ Blocked by C1 (Formspree ID not set) |
| 5.8 | WhatsApp button — confirm correct routing | ✅ Number +971567985386 confirmed in links; pending task 3.18 final check |
| 5.9 | Check all internal and external links | ⚠️ C4 (dead blog link), C3 (Privacy/Terms = `#`); all other internal links checked and valid |
| 5.10 | Review all copy for typos and consistency | ✅ No typos found; H8 copy discrepancies flagged |
| 5.11 | Verify SEO tags (meta and schema) | ⚠️ H2 (blog index missing canonical/schema), H3 (services/about/case-studies missing schema) |

---

## FIXES PRIORITY ORDER FOR JIM

**Do first (launch blockers):**
1. Replace Formspree `YOUR_FORM_ID` with real ID → test form submission (C1)
2. Add founder photo to `about.html` (C2)
3. Create `privacy-policy.html` and `terms.html` placeholder pages; update all links (C3)
4. Decide on Blog Post 2: build it or remove card from listing (C4)

**Do next (high priority):**
5. Create `assets/og/` directory and produce OG images for all pages; add missing og:image tags (H1)
6. Add canonical, robots, schema to `blog/index.html` (H2)
7. Add missing JSON-LD schema to `services.html`, `about.html`, `case-studies.html` (H3)
8. Add ARIA attributes to mobile nav and cookie banner on both blog post pages (H4)
9. Add `<canvas id="particle-canvas">` to hero section of `index.html` (H5)
10. Add secondary "Explore Our Services" hero CTA button to `index.html` (H6)
11. Save logo locally and update all 8 pages (H7)
12. Add favicon to all pages (H9)

**Then medium priority:**
13. Standardise footer services list across all pages (M1)
14. Add "Carbonium Process" section to Service 06 in `services.html` (M2)
15. Fix blog index bottom CTA copy (M3)
16. Resolve empty filter state (M4/M5)

**Confirm with Pam/Sutriano:**
- H8: Intentional or not? Whether Dubai/ME references should be restored to hero and About page headlines.

---

## QA SIGN-OFF

**Reviewed by:** Dwight (QA Agent)
**Sign-off status:** ❌ WITHHELD — 4 critical issues and 9 high-severity issues must be resolved before sign-off can be granted.

**Re-review required after:** All Critical (C1–C4) and High (H1–H9) items are resolved.

**Client review (Task 5.12):** Sutriano Wu sign-off should only be requested after all critical and high-severity items above are fixed.

---

*QA-REPORT.md — Carbonium AI Marketing Agency Website*
*Reviewer: Dwight · Date: 2026-06-15*
