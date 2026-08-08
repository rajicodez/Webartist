# Kindforth SEO Audit and Growth Plan

Audit date: 7 August 2026  
Site: https://www.kindforth.com/  
Market priority: Sri Lanka first, international expansion second  
Rebrand context: Webartist → Kindforth

## Executive verdict

Kindforth has a visually strong site and a credible technical positioning, but the current website is not built around search demand. The main problem is not a single missing meta tag. Search engines see a small brochure site with generic metadata, no crawl-management files, no structured data, no dedicated commercial-intent landing pages, minimal local evidence, and very weak mobile performance.

The current site can rank for the Kindforth brand, but it is unlikely to win competitive non-brand searches such as “AI development company Sri Lanka,” “AI automation company Sri Lanka,” “chatbot development Sri Lanka,” “web development company Sri Lanka,” or “SEO services Sri Lanka” in its present form.

The work should be sequenced as follows:

1. Fix crawlability, metadata, canonicalization, mobile performance, accessibility, legal/trust defects, and the incomplete rebrand.
2. Build one excellent page per service/search intent, beginning with Sri Lankan commercial terms.
3. Turn existing projects into evidence-rich case studies.
4. Establish the Kindforth entity through organization data, consistent profiles, local citations, and the Webartist-to-Kindforth migration.
5. Publish expert material and earn relevant links; do not mass-produce generic AI articles.

Ranking first is a business goal, not a guarantee. Search results vary by query, location, device, and time. Progress must be measured in Google Search Console against an agreed keyword set and qualified leads, not only vanity positions.

## Audit scope and limitations

This audit covered:

- The live homepage and all main routes found in the repository.
- Live HTML titles, descriptions, headings, links, social metadata, canonicals, schema, redirects, robots.txt, and sitemap.xml.
- The local Next.js implementation.
- A fresh PageSpeed Insights/Lighthouse lab test.
- A search-result sample for Sri Lankan AI, automation, chatbot, web development, and computer-vision terms.
- A page-level comparison with Konekt’s SEO service page.

Not available for this audit:

- Google Search Console query, page, indexation, and backlink data.
- GA4/GTM conversion data and lead quality.
- The former Webartist domain and complete old URL inventory.
- Paid-tool keyword volumes, difficulty, and backlink indexes from Ahrefs/Semrush.
- Google Business Profile access.

These missing data sources affect forecasting and historical migration analysis, but they do not change the high-priority technical findings.

## Scorecard

| Area | Status | Finding |
|---|---|---|
| Crawl and index management | Critical | `robots.txt` and `sitemap.xml` both return HTTP 404. |
| Page metadata | Critical | Every audited route inherits the same title and description; no canonical, Open Graph, or Twitter metadata was found. |
| Information architecture | Critical | One generic `/services` page serves many distinct commercial intents; service “Learn More” controls do not lead to service pages. |
| Structured data | Critical | No JSON-LD was found on any audited Kindforth page. |
| Local Sri Lanka relevance | Critical | The homepage does not clearly mention Sri Lanka or Colombo and provides no visible address/service-area detail. |
| Content and topical authority | High gap | No blog/resources hub; homepage has about 478 visible words versus about 1,007 on the compared Konekt page. Word count itself is not a ranking factor; intent coverage is the issue. |
| Trust and conversion | High gap | Old Webartist Gmail address remains live, privacy/terms links are placeholders, and several strong claims lack supporting evidence. |
| Mobile performance | Critical | Lighthouse: performance 39, LCP 15.2 s, TBT 3,320 ms, 502 KiB estimated unused JavaScript. |
| Accessibility | High gap | Lighthouse 85; unnamed buttons/links, contrast issues, and non-sequential headings. |
| HTTPS and host consolidation | Good | HTTPS and HSTS are active; domain variants permanently redirect to the `https://www` host. |
| Rendering/cacheability | Good | Homepage is statically prerendered and served from Vercel cache. |
| Measurement | Partial | GTM and Vercel Analytics are installed; conversion definitions and Search Console setup could not be verified. |

## Critical findings

### 1. Crawl controls are missing

Live checks returned:

- `https://www.kindforth.com/robots.txt` → HTTP 404
- `https://www.kindforth.com/sitemap.xml` → HTTP 404

This does not automatically block indexing, but it removes the clearest discovery and crawl-management mechanism for a new/rebranded site. It also prevents clean sitemap submission and monitoring in Search Console.

Implement Next.js `app/robots.ts` and `app/sitemap.ts`. The robots file should allow public pages and declare the sitemap. The sitemap should contain only canonical, indexable URLs and real `lastModified` values. Do not put `/apply` or URL-parameter variants in it.

### 2. All pages compete with the same generic metadata

Every audited page currently uses:

- Title: `Kindforth | Intelligent Web Platforms`
- Description: `We build data-driven websites powered by AI.`

No self-referencing canonical was found. No Open Graph or Twitter metadata was found.

This makes `/services`, `/work`, `/about`, `/team`, `/faq`, `/contact`, `/careers`, and `/apply` look like duplicates in search snippets and fails to describe their individual intent. The homepage wording also undersells the actual offer: custom chatbots, AI automation, computer vision, analytics, and web engineering.

Recommended homepage metadata:

- Title: `AI Development & Automation Company in Sri Lanka | Kindforth`
- Description: `Kindforth builds custom AI chatbots, workflow automation, computer vision and intelligent web platforms for companies in Sri Lanka and worldwide.`
- H1: `AI Development & Automation Company in Sri Lanka`
- Supporting brand line: `Engineering the autonomous enterprise—from Sri Lanka to the world.`

Keep the cinematic “Autonomous Enterprise” phrase, but do not make it the only text carrying the page’s primary meaning.

### 3. There is no page for most valuable search intents

The current `/services` route tries to cover all of the following on one page:

- Custom LLMs and chatbots
- Computer vision
- Predictive analytics
- AI agents and automation
- Document intelligence
- Recommenders
- Intelligent websites
- Dashboards
- AI search optimization

Those are separate problems with separate buyers and separate queries. “Learn More” is implemented as a button without a destination, so there are no crawlable supporting service pages.

Create a service hub and dedicated pages. Each page needs a unique promise, use cases, deliverables, process, proof, FAQ, CTA, metadata, schema, and links to relevant case studies.

Recommended first-wave architecture:

- `/services/custom-ai-development`
- `/services/ai-automation`
- `/services/ai-chatbot-development`
- `/services/computer-vision`
- `/services/intelligent-web-development`
- `/services/data-analytics`
- `/services/seo-services-sri-lanka` — only if SEO is a real, staffed service
- `/industries/healthcare-ai-automation`
- `/industries/sme-ai-automation-sri-lanka`
- `/locations/sri-lanka`
- `/case-studies/gomez-hospital`
- `/case-studies/yellow-flag-podcast`
- `/case-studies/call-me-taxi`
- `/case-studies/sathimath-viveka-senasuna`

Do not create both global and Sri Lanka versions of every page with nearly identical copy. Use one canonical owner per intent. Create a local variation only when it contains genuinely local proof, pricing, language, regulations, industries, and FAQs.

### 4. Mobile performance is a ranking and conversion risk

The 7 August 2026 PageSpeed Insights lab result reported:

- Performance: 39/100
- Accessibility: 85/100
- Best Practices: 100/100
- Basic SEO: 91/100
- First Contentful Paint: 2.7 s
- Largest Contentful Paint: 15.2 s
- Total Blocking Time: 3,320 ms
- Cumulative Layout Shift: 0
- Speed Index: 4.6 s
- Estimated unused JavaScript: 502 KiB
- Main-thread work: 5.5 s
- JavaScript execution: 4.6 s
- Eight long main-thread tasks

No sufficient Chrome User Experience Report field data was available, so these are lab results, not real-user Core Web Vitals.

Likely causes visible in the code:

- The Spline component is lazy-imported but still mounted inside a CSS-hidden container on mobile. CSS `hidden` does not prevent the React component and its JavaScript from loading.
- The chat widget, React Markdown, Framer Motion, GTM, and analytics load from the root layout on every route.
- Several mostly static route pages are marked as full client components.
- Animation code is pervasive.
- Technology logos are fetched as many third-party image requests and duplicated for the marquee.
- Some routes render the Navbar twice, increasing DOM and client work.

Performance actions, in order:

1. Replace the mobile Spline experience with a compressed AVIF/WebP poster. Load the interactive Spline scene only on desktop after idle time or explicit interaction.
2. Dynamically load the chat widget only after the user opens it, or after the primary page is interactive.
3. Convert static route pages back to server components and isolate only interactive islands.
4. Remove duplicate Navbars from `/services`, `/work`, `/faq`, and `/apply`.
5. Replace nonessential Framer Motion effects with CSS and respect `prefers-reduced-motion`.
6. Self-host or sprite the repeated technology icons and avoid duplicate network fetches.
7. Retest representative homepage, service, and case-study templates on mobile and desktop.

Targets:

- Lab mobile performance ≥ 85 initially, then ≥ 90 where practical.
- LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile once field data exists.

### 5. No structured data establishes the company or services

No `application/ld+json` block was found on any audited route.

Implement accurate, visible-content-matched JSON-LD:

- Homepage: `Organization` and `WebSite`.
- Service pages: `Service` plus `BreadcrumbList`.
- Case studies: `Article` or `CreativeWork` where appropriate, with real author/reviewer dates.
- FAQ sections: `FAQPage` only when the complete questions and answers are visible to users in the page HTML and the markup follows current Google guidelines.
- Team profiles: `Person` only for real public professional information.
- Careers: `JobPosting` only for genuine current openings with required fields and expiry dates.

Use a stable organization `@id`, e.g. `https://www.kindforth.com/#organization`, and connect services, website, founders, logo, contact information, and verified social profiles to it.

Suggested organization fields include `name`, `alternateName` (`Webartist`, temporarily and only if accurate), `url`, `logo`, `description`, `founders`, `foundingDate`, `contactPoint`, `areaServed`, and `sameAs`. Use an address only if it is a genuine business location suitable for publication.

Structured data helps understanding and eligibility; it does not guarantee a rich result or rankings.

### 6. The Webartist → Kindforth rebrand is visibly incomplete

The contact page and global footer still publish `webartist65@gmail.com`. This is a strong trust and entity-consistency problem. Public searches did not surface a clear old Webartist entity/domain associated with Kindforth, so the historical domain migration could not be fully assessed.

Required rebrand checklist:

- Replace the Gmail address with a domain email such as `hello@kindforth.com` and configure SPF, DKIM, and DMARC.
- Add a short About/announcement section: `Kindforth, formerly Webartist` with the reason for the change and continuity of the team/work.
- Publish `/webartist-is-now-kindforth` for legacy brand searches.
- If an old domain existed, create a one-to-one old URL → new URL 301/308 map. Do not redirect every old page to the homepage.
- Keep old-domain redirects indefinitely where practical and renew the old domain.
- Verify old and new properties in Search Console; use Google’s site-move process if the domain changed.
- Submit the new sitemap and inspect the most important URLs.
- Update LinkedIn, Instagram, Facebook, Google Business Profile, directories, proposals, email signatures, client credits, and portfolio backlinks.
- Contact high-value linking sites and ask them to update the old brand/domain.
- Monitor old-brand queries, 404s, excluded URLs, canonical selection, and referral traffic for at least six months.

If the rebrand changed only the name and not the domain, the URL migration steps are unnecessary, but entity/profile consistency remains essential.

### 7. Trust signals do not support the positioning

The site claims that Kindforth can rank clients “#1 on Google,” provides “Bank-grade privacy,” and builds “mission-critical infrastructure that handles millions of dollars in transactions.” These are strong claims. The site currently provides no SEO case study, security detail, certification, client testimonial, named reviewer, or methodology sufficient to substantiate them.

Recommended actions:

- Replace guaranteed-ranking language with a measurable process and outcomes.
- Publish client-approved metrics, baseline, time period, scope, and methodology.
- Add testimonials with name, role, company, and permission.
- Add a clear company identity, business registration details where appropriate, contact details, and service area.
- Build real Privacy Policy and Terms pages. Current footer links point to `#`.
- Link the contact form consent text to the real Privacy Policy.
- Disclose relevant processors/data flows in the policy. The contact form sends data to a Google Apps Script endpoint; the chatbot sends prompts to a Railway-hosted backend.
- Have qualified counsel review privacy, cookies, form consent, and employment-data handling for applicable jurisdictions.

The application form also contains a placeholder Web3Forms access key, so submissions are likely to fail. It accepts CVs while no recruitment privacy notice is available. This is primarily a conversion/trust risk rather than an SEO factor.

## On-page and semantic findings

### Heading structure

- The homepage jumps from H1 to H3 before the first H2.
- The team page has no H1; “Meet the Engineers” is an H2.
- Several service items are H4s underneath an H3 category while preceding structure is inconsistent.
- Lighthouse flagged non-sequential heading order.

Use headings for document structure, not text sizing. Each indexable page should have one clear descriptive H1 and a logical H2/H3 hierarchy.

### FAQ indexability

The FAQ questions are present initially, but answers are conditionally inserted only after a click. The initial live body text and search rendering did not contain the answers. This throws away most of the page’s useful content.

Render every answer in the HTML and use native `<details><summary>` or a CSS/JS enhancement that keeps the answer in the DOM. Then add FAQ schema only for the same visible content. Do not add schema for hidden or absent answers.

### Internal linking

Current internal linking relies mostly on global navigation and CTAs. Add descriptive contextual links:

- Homepage → each major service.
- Service → related case studies, industries, FAQs, and guides.
- Case study → relevant service and industry.
- Guide → service conversion page and related guides.
- Local hub → all Sri Lankan service pages or relevant service sections.

Avoid generic anchors such as repeated “Learn More.” Use descriptive text such as “Explore our AI chatbot development service.”

### Images and social previews

- Project images have reasonable title-based alt text.
- Technology logos are duplicated and add little search value.
- No Open Graph/Twitter preview metadata was found.

Create a branded 1200×630 social image and per-case-study preview images. Use descriptive image filenames, correct dimensions, Next Image, AVIF/WebP, lazy loading below the fold, and captions where the image proves a result.

### Thin/non-commercial routes

- `/apply` should normally be `noindex, follow` and canonicalized appropriately because it is a form/parameterized utility page.
- `/contact` can remain indexable if it contains unique contact and local business information.
- `/work` should become a case-study hub, not the only location for all project evidence.
- A custom 404 page should help users recover and should not inherit misleading homepage metadata.

## Sri Lanka local SEO plan

### Local positioning

The homepage currently contains no prominent `Sri Lanka` or `Colombo` text. Competitors that surface for local queries typically state the service and location in the title, H1, introduction, proof, and company details.

Use natural local evidence, not keyword repetition:

- `Sri Lanka-based AI engineering company serving businesses locally and worldwide.`
- Real Sri Lankan case studies, sectors, and outcomes.
- LKR pricing guidance or starting ranges where commercially acceptable.
- WhatsApp and local phone support.
- English, Sinhala, Singlish, and Tamil capabilities only when Kindforth can genuinely deliver them.
- Local business hours and location/service area.
- Local regulations/operational realities where relevant.

### Google Business Profile and citations

If eligible, fully verify and optimize a Google Business Profile. Use the real business name `Kindforth`, accurate category, service area/address, phone, website, hours, services, photos, updates, and review responses. Never use a virtual/fake address or add keywords to the business name.

Keep name, address/service area, phone, and URL consistent across:

- Google Business Profile
- LinkedIn and other verified social accounts
- Reputable Sri Lankan business/startup/technology associations and directories
- Clutch or other relevant B2B review platforms
- Client and partner websites
- Maps and major data providers where applicable

Reviews should describe the actual service and outcome in the customer’s own words; never script, buy, or gate reviews.

### Language and international targeting

English is a sensible primary B2B language. Add Sinhala/Tamil pages only with native-quality, complete translations and local demand. When added, use distinct URLs, self-canonicals, and reciprocal `hreflang` such as `en-LK`, `si-LK`, and `ta-LK` plus `x-default` where appropriate.

The `.com` domain is suitable for Sri Lanka and international growth. A `.lk` domain is not required to rank locally. It can be acquired defensively and redirected, but should not become a second duplicate site.

## Keyword and page map

This is an intent map, not a paid-tool volume forecast.

| Priority | Page | Primary intent | Supporting terms |
|---|---|---|---|
| P0 | Homepage | AI development company Sri Lanka | AI solutions company Sri Lanka, AI engineering company, AI agency Sri Lanka |
| P0 | `/services/ai-automation` | AI automation company Sri Lanka | workflow automation Sri Lanka, business process automation, AI agents for business |
| P0 | `/services/ai-chatbot-development` | AI chatbot development Sri Lanka | custom chatbot company, WhatsApp chatbot Sri Lanka, Sinhala/Tamil chatbot |
| P0 | `/services/intelligent-web-development` | web development company Sri Lanka | Next.js development Sri Lanka, AI website development, custom web applications |
| P1 | `/services/seo-services-sri-lanka` | SEO services Sri Lanka | SEO company Sri Lanka, technical SEO, local SEO, AEO/GEO Sri Lanka |
| P1 | `/services/computer-vision` | computer vision company Sri Lanka | video analytics, object detection, quality inspection AI |
| P1 | `/services/custom-ai-development` | custom AI development company | generative AI development, LLM development services, RAG development company |
| P1 | `/services/data-analytics` | data analytics company Sri Lanka | predictive analytics services, business intelligence Sri Lanka |
| P1 | `/industries/healthcare-ai-automation` | healthcare automation Sri Lanka | hospital booking automation, healthcare chatbot, patient workflow automation |
| P2 | Guides | Educational/problem intent | cost, comparison, implementation, security, ROI, language, integrations |

Validate the map with Search Console and a keyword tool before finalizing titles. Check cannibalization monthly: one primary page should own each primary intent.

## Recommended SEO service page

If Kindforth genuinely sells SEO, create a page that is more specific and more credible than a copy of Konekt’s page.

Recommended URL:

`/services/seo-services-sri-lanka`

Recommended metadata:

- Title: `SEO Services Sri Lanka | Technical SEO & AEO | Kindforth`
- Description: `Technical SEO, on-page optimization, local SEO and AI-search optimization for Sri Lankan companies. Get a prioritized audit and measurable growth plan.`
- H1: `SEO Services in Sri Lanka Built by Engineers`

Recommended sections:

1. Direct answer: who the service is for and what outcome it targets.
2. Evidence: current case study, baseline, timeframe, and business result.
3. Deliverables: crawl/indexation, technical audit, keyword mapping, on-page work, content, local SEO, schema, Core Web Vitals, Search Console, reporting.
4. Distinctive advantage: Next.js/technical implementation plus SEO/AEO—not merely recommendations in a PDF.
5. Process and responsibilities.
6. Transparent starting price or package scope if possible.
7. Sample audit excerpt/download.
8. Tools and reporting cadence.
9. FAQs based on real sales questions.
10. Conversion CTA with a clearly described audit.
11. Service, Breadcrumb, Organization, and valid visible-content FAQ schema.

Do not copy Konekt’s wording or structure mechanically. Konekt’s current page is strong because it has an exact-intent URL/title, a canonical, a detailed description, deliverables, process, tools, related services, eight FAQs, local company details, internal links, and Organization/WebSite/Service/Breadcrumb/FAQ JSON-LD. Kindforth should beat it through stronger proof, implementation depth, clarity, and a differentiated AEO/engineering offer.

## Content strategy: depth before volume

Create content from real delivery experience. Initial topics:

- How much does an AI chatbot cost in Sri Lanka?
- WhatsApp chatbot implementation for Sri Lankan businesses.
- Sinhala, Singlish, Tamil, and English chatbot design tradeoffs.
- What to automate first in a Sri Lankan SME.
- Custom AI versus off-the-shelf automation tools.
- RAG chatbot security checklist for company documents.
- Computer vision for manufacturing quality control.
- AI automation ROI calculator and methodology.
- Next.js technical SEO checklist for growing companies.
- SEO versus AEO/GEO: what Sri Lankan businesses should prioritize.

Every guide should include a named author, relevant experience, publish/update date, original examples, methodology, sources, and a useful next step. Avoid publishing dozens of generic AI-written articles. Google’s guidance emphasizes people-first content and first-hand expertise.

## Authority and link acquisition

A backlink-quality audit requires Search Console or a commercial backlink index and was not possible here. Public brand visibility appears limited, so authority building should begin after the site has pages worth linking to.

Recommended channels:

- Ask project clients to link to their approved Kindforth case study or credit page.
- Publish a high-quality rebrand announcement and update old brand backlinks.
- Create partner pages for technologies/platforms only where a real relationship exists.
- Earn profiles in reputable Sri Lankan technology/startup associations and B2B review platforms.
- Pitch original data or expert commentary to Sri Lankan business and technology publications.
- Publish a useful open-source component, benchmark, calculator, or research report.
- Encourage genuine client reviews on Google/Clutch where eligible.
- Speak at local startup, university, engineering, and industry events and earn event/profile links.

Avoid mass directory submissions, paid-link packages, private blog networks, link exchanges at scale, and AI-generated guest-post campaigns.

## Konekt comparison

| Signal | Kindforth homepage/current site | Konekt SEO page |
|---|---|---|
| Search intent | Broad “Autonomous Enterprise” positioning | Exact “SEO Services in Sri Lanka” intent |
| Page title | Generic and reused | Service + location + specialty + brand |
| Meta description | Generic 7-word offer | Specific deliverables and outcome |
| Canonical | Missing | Present |
| Visible content | ~478 homepage words | ~1,007 page words including navigation/form text |
| Dedicated deliverables | Brief benefit cards | Six detailed service deliverables |
| Process | High-level general process | Five-step SEO process |
| FAQs | Separate page; answers absent until click | Eight page-specific FAQs |
| Schema | None | Organization, WebSite, Service, BreadcrumbList, FAQPage |
| Internal links | Mostly nav/CTAs | Service, industry, product, case-study, blog, and company links |
| Local evidence | Phone only; no visible local positioning | Sri Lanka title/copy, phone, address, related local pages |
| Social metadata | Missing | Complete Open Graph metadata |

The lesson is coverage and specificity, not simply adding more keywords.

## Implementation backlog

### P0: first 7 days

| Action | Impact | Effort |
|---|---:|---:|
| Add `app/robots.ts` and `app/sitemap.ts`; submit sitemap in Search Console | Very high | Low |
| Add `metadataBase`, title template, page-specific metadata, canonicals, OG/Twitter metadata | Very high | Medium |
| Remove duplicate Navbar instances | High | Low |
| Replace `webartist65@gmail.com` with domain email across the site | High | Low |
| Create real Privacy Policy and Terms routes; fix footer/form links | High | Medium |
| Make `/apply` `noindex, follow`; fix or disable the broken application form | Medium | Low/medium |
| Fix team H1, heading hierarchy, accessible names, labels, and contrast | High | Medium |
| Render FAQ answers in initial HTML | High | Medium |
| Establish Search Console, GA4/GTM conversions, and lead-source tracking | Very high | Medium |

### P0/P1: performance sprint, 1–2 weeks

| Action | Impact | Effort |
|---|---:|---:|
| Do not mount Spline on mobile; use a poster and desktop interaction/idle loading | Very high | Medium |
| Defer chat bundle and React Markdown until interaction | High | Medium |
| Convert static pages to server components; isolate animated client islands | Very high | High |
| Reduce Framer Motion and repeated third-party icon requests | High | Medium |
| Test three templates in PageSpeed and Chrome DevTools | High | Low |

### P1: weeks 2–6

| Action | Impact | Effort |
|---|---:|---:|
| Build dedicated AI automation, chatbot, web development, and custom AI pages | Very high | High |
| Turn four projects into individual evidence-rich case studies | Very high | High |
| Add Organization/WebSite/Service/Breadcrumb schema and validate | High | Medium |
| Build Sri Lanka local hub and complete local business/entity information | High | Medium |
| Complete rebrand announcement, old URL mapping, profile/citation updates | Very high | Variable |
| Implement contextual internal links and breadcrumbs | High | Medium |

### P2: months 2–4

| Action | Impact | Effort |
|---|---:|---:|
| Launch SEO page if the service and proof are real | High | High |
| Publish 2–4 expert resources per month based on the topic map | High | Ongoing |
| Earn client, partner, event, review, and digital-PR links | Very high | Ongoing |
| Add native-quality Sinhala/Tamil content only where demand supports it | Medium/high | High |
| Test titles, CTAs, forms, and lead quality using Search Console + analytics | High | Ongoing |

## 90-day success measures

Set the baseline on launch day. Suggested targets are directional and should be adjusted after Search Console data is available.

### Technical

- 100% of intended pages return 200, are self-canonical, and appear in the sitemap.
- Zero sitemap/robots errors.
- Zero duplicate titles/descriptions across indexable pages.
- Valid schema with no critical Rich Results Test errors.
- Mobile LCP lab result under 2.5–3.0 seconds on the homepage and key service template.
- No duplicate nav, unnamed primary controls, or broken privacy/legal links.

### Search visibility

- All priority service and case-study pages indexed.
- Growth in non-brand impressions and clicks every four-week period.
- Top-20 visibility for selected lower-competition Sri Lankan service terms, then movement toward top 10.
- Improved branded SERP consistency for Kindforth and “Webartist Kindforth.”
- No unexpected old-domain or duplicate-host pages indexed.

### Business

- Track `form_submit`, `phone_click`, `whatsapp_click`, `email_click`, `chat_open`, `chat_lead`, and booked-consultation events.
- Report organic qualified leads, lead-to-call rate, proposal rate, and closed revenue.
- Annotate the rebrand, page launches, redirects, and major content updates in analytics.

## Data needed for the next audit pass

Provide the following to replace assumptions with an evidence-based forecast:

1. Google Search Console export for the last 16 months: queries, pages, countries, devices, search appearance, indexing, links, sitemaps, manual actions, and Core Web Vitals.
2. GA4 organic landing pages, conversions, revenue/lead events, engagement, and device split.
3. GTM container export or event specification.
4. Former Webartist domain(s), exact old URLs, launch date, and redirect rules.
5. Google Business Profile URL/access and the real public business address/service area.
6. Client-approved results, testimonials, and case-study evidence.
7. Commercial priority by service, average deal value, margin, delivery capacity, and target countries.
8. Ahrefs/Semrush export if available for keyword volume, competitors, backlinks, and content gaps.

## Source references

- Kindforth live site: https://www.kindforth.com/
- Compared Konekt page: https://konekt.lk/services/seo-services-sri-lanka
- Kindforth PageSpeed report: https://pagespeed.web.dev/analysis/https-www-kindforth-com/sdcav17k6c?form_factor=mobile
- Google: Build and submit a sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google: Site moves and migrations: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- Google: Canonicalization: https://developers.google.com/search/docs/crawling-indexing/canonicalization
- Google: Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google: General structured-data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google: Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google: Title-link guidance: https://developers.google.com/search/docs/appearance/title-link
- web.dev: Core Web Vitals thresholds: https://web.dev/articles/defining-core-web-vitals-thresholds

