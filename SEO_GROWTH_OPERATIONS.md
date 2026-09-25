# Kindforth SEO, AEO & GEO Operations

This file covers the work that cannot be completed through the website repository. Run the checklist after deploying the accompanying code changes.

## Completion checkpoint — 2 September 2026

- GTM container `GTM-NFBHX3DG`, version 3, published 31 August: Google tag and shared GA4 event tag. Measurement ID: `G-VJ3LWB60T2`. Do not create a second property or duplicate tags.
- Prior screenshots confirm the enquiry event reached GA4 DebugView and contact events were tested. Apps Script was reauthorized. These are test events, not qualified leads.
- Contact API now requires the Apps Script JSON receipt `{ "result": "success", "row": 2 }` (integer row >= 2) before returning success. HTTP 200 alone is insufficient. This code change needs deployment, followed by one labelled test and confirmation of the matching spreadsheet row. Automated tests make no live submissions.
- Still unconfirmed: key-event settings, custom definitions, saved comparisons, dashboard, fresh Search Console indexing/performance, and final production schema validation. Browser access to the owning Google account is required; none of those account changes were made in this checkpoint.
- Retain separate metrics for enquiries and WhatsApp clicks: a WhatsApp click does not prove a conversation or qualified lead.

### Remaining GA4 settings

Mark only `generate_lead` and `whatsapp_click` as key events for this workflow. Inspect existing definitions before adding any. Do not manufacture a second event from `form_submit`; it is not proof of successful delivery.

Register missing event-scoped custom dimensions using these exact event parameter names:

| Dimension label | Event parameter | Scope |
|---|---|---|
| Enquiry form | `form_name` | Event |
| Selected service | `service` | Event |
| CTA placement | `placement` | Event |
| Tracked landing path | `landing_page` | Event |
| Detected traffic type | `source_type` | Event |
| Referrer hostname | `referrer_host` | Event |

Do not register names, email addresses, message text, or other personal form content as analytics dimensions. The custom landing path describes the site's `organic_landing` event; use GA4's built-in Landing page dimension for standard session acquisition reports.

Create saved comparisons for Organic Search using Session default channel group, and identifiable AI traffic using Session source with the anchored regex `^(chatgpt\.com|www\.chatgpt\.com|perplexity\.ai|www\.perplexity\.ai|claude\.ai|www\.claude\.ai|gemini\.google\.com)$`. This captures identifiable sources, not every AI-influenced visit. Inspect actual source values before extending the expression.

## Deployment day

1. Confirm the production deployment and open `/robots.txt`, `/sitemap.xml`, `/team`, `/services/seo`, `/insights`, both published case studies, and the published insight.
2. In Search Console, resubmit `https://www.kindforth.com/sitemap.xml`.
3. Inspect and request indexing for `/team`, `/services/seo`, `/insights`, `/insights/seo-aeo-geo-sri-lankan-smes`, `/work/yellow-flag-podcast`, and `/work/gomez-hospital`.
4. Do not request indexing for `/careers`; it is intentionally `noindex, follow` until a real role opens.
5. Validate the organization, person, service, article, case-study, and breadcrumb JSON-LD in Schema.org Validator and Google Rich Results Test.

## GTM and GA4

Create GA4 event tags for the following data-layer events and pass through their parameters:

| Event | Parameters | GA4 treatment |
|---|---|---|
| `generate_lead` | `form_name`, `service` | Key event |
| `whatsapp_click` | `placement` | Key event |
| `phone_click` | `placement` | Secondary conversion |
| `email_click` | `placement` | Secondary conversion |
| `primary_cta_click` | `placement`, `service` when present | Funnel event |
| `service_selected` | `service` | Funnel event |
| `organic_landing` | `landing_page`, `source_type`, `referrer_host` | Acquisition event |

Use GTM Preview and GA4 DebugView to verify one successful example of each event. Create GA4 comparisons for organic search and AI referral traffic. ChatGPT referrals normally carry `utm_source=chatgpt.com`; the site also classifies known AI referrers.

## Monthly dashboard

Connect Search Console and GA4 to Looker Studio. Show current month, previous month, and trailing 90 days for:

- Non-brand impressions, clicks, CTR, and average position
- Queries grouped by SEO, AI, automation, software, web applications, and brand
- Landing-page clicks and conversions
- Sri Lanka versus international visibility
- Form, WhatsApp, phone, and email leads
- Qualified leads, proposals, won projects, and revenue entered manually from the sales log
- Referrals from ChatGPT and other identifiable AI assistants
- Referring domains and approved reviews

## Google Business Profile

First confirm eligibility: Kindforth must receive customers in person at an eligible location or genuinely travel to customers. Online-only delivery does not qualify. A real address alone is not enough. If eligible as a service-area business, use a real operating address for verification and hide it if customers are not served there. Follow https://support.google.com/business/answer/3038177.

- Primary category: `Software company` unless Google currently provides a closer category that represents Kindforth's core business.
- Relevant secondary categories: `Internet marketing service`, `Website designer`, and any accurate AI/software category currently offered.
- Use the exact Kindforth name, phone, website, services, founders, and description shown on the site.
- Website URL: `https://www.kindforth.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- Add genuine project and team images, operating hours, services, and only service areas that Kindforth genuinely serves.
- Request honest reviews gradually from completed clients. Never incentivize reviews or tell clients what rating or wording to use.

## Publishing cadence

The repository contains two published case studies, one published guide, and the following controlled drafts. Before changing a draft to `published`, interview the relevant founder/client, add original screenshots or diagrams, verify every claim, update the date, and add the route to the release QA:

- 14 Sep 2026: Local SEO for Sri Lankan Service Businesses
- 28 Sep 2026: Custom Software vs Off-the-Shelf Software for Sri Lankan SMEs
- 12 Oct 2026: Where AI Automation Actually Saves Time
- 26 Oct 2026: Call Me Taxi case study
- 9 Nov 2026: Sathimath Viweka Senasuna case study

Keep the maximum pace at two substantial assets per month. Do not create location doorway pages or near-duplicate keyword variants.

## Authority and reviews

- Obtain written permission for each testimonial's name, role, company, photo, wording, and placement.
- Ask Yellow Flag to link to its case study from the YouTube promotion description or website.
- Ask each published client to link to its relevant case study or Kindforth credit.
- Keep company information consistent across LinkedIn, Facebook, Instagram, GitHub, reputable Sri Lankan startup directories, partner pages, and the Google Business Profile.
- Record the referring URL, contact, target page, request date, result, and follow-up date. Prioritize relevant editorial and partner links; do not purchase link packages.

## Monthly AI-answer benchmark

Run the same prompts in a clean session in ChatGPT, Gemini, Claude, and Google AI features. Record date, platform, country, exact answer, Kindforth mention, Kindforth citation, competing companies, cited sources, and notes.

1. Best AI development companies in Sri Lanka
2. AI development company for a Sri Lankan SME
3. Companies that build computer vision systems in Sri Lanka
4. Business automation companies in Sri Lanka
5. How can a Sri Lankan SME automate repetitive work?
6. Custom software development companies in Sri Lanka
7. Best custom software company for an SME in Sri Lanka
8. Web application development companies in Sri Lanka
9. Who builds booking platforms in Sri Lanka?
10. SEO companies in Sri Lanka
11. Best SEO service for a Sri Lankan SME
12. Technical SEO companies in Sri Lanka
13. Local SEO services in Sri Lanka
14. AEO and GEO services in Sri Lanka
15. How should a Sri Lankan business prepare for AI search?
16. Sri Lankan company that combines AI and web development
17. Software companies in Sri Lanka with real case studies
18. Who built the Yellow Flag Podcast website?
19. Sri Lankan developers for interactive audience games
20. Technology partner for a growing Sri Lankan SME

Treat this as visibility research, not a ranking test. AI answers vary by session, location, freshness, and available sources. Report trends and citations rather than a single screenshot.

## Monthly review

On the first working day of each month, export Search Console queries, pages, countries, devices, indexing, links, and any Generative AI performance report that has become available. Compare against the 28 August 2026 baseline: 327 impressions, 14 clicks, 4.3% CTR, average position 61.6, 13 indexed pages, and 243 impressions for `/services/seo`.
