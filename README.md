# highvisionreno.com.au

Astro static rebuild of [High Vision Renovations](https://highvisionreno.com.au) for Cloudflare Pages.

## Stack

- [Astro](https://astro.build) (`output: 'static'`)
- `@astrojs/sitemap`
- Cloudflare Pages (`wrangler.toml`, `_headers`, `_redirects`)

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview
```

Static files are written to `dist/`.

## Cloudflare Pages deploy

Credentials are not required in this repo. When a Cloudflare account is ready:

### Option A — Dashboard (recommended first time)

1. In Cloudflare → **Workers & Pages** → **Create** → **Pages** → connect the GitHub repo `swazzy-co/highvisionreno.com.au`.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (or matching `engines` in `package.json`)
3. Save and deploy. Point the custom domain `highvisionreno.com.au` at the Pages project when ready.

### Option B — Wrangler CLI

```bash
npm run build
npx wrangler pages project create highvisionreno
npx wrangler pages deploy dist --project-name=highvisionreno
```

`wrangler.toml` sets `pages_build_output_dir = "dist"`.

## Contact form

The project enquiry form posts to [FormSubmit](https://formsubmit.co) for `info@highvisionreno.com.au` (static-hosting friendly).

- On first submission, FormSubmit may email a confirmation link to activate the inbox.
- To swap providers later (Cloudflare Turnstile + Pages Function, Formspree, Getform), update `src/components/ContactForm.astro`.
- Attachments from the live site are not reimplemented in this static form; clients can email files to `info@highvisionreno.com.au`.

## Content map

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/about-high-vision-renovations` | About |
| `/renovation-services` | Services index |
| `/renovation-service/[slug]` | Individual services |
| `/renovation-projects` | Projects index |
| `/renovation-project/[slug]` | Project case studies (Toorak, Burwood) |
| `/contact-high-vision-renovations` | Contact |
| `/tell-us-about-your-renovation-project` | Lead / project form |
| `/faqs`, `/faqs/[slug]` | FAQ library |
| `/[suburb]`, `/[suburb]/[service]` | Local SEO landing pages |
| Legal pages | Privacy, terms, disclaimer, copyright |

## Notes / blockers

- Brand photography for heroes and galleries lives in `public/images` (sourced from the live CDN).
- Live Typekit Helvetica Neue kit is replaced with [Fontshare Satoshi](https://www.fontshare.com/fonts/satoshi) (matches the live CSS `--font-primary: Satoshi` token) so Pages does not need Adobe kit credentials.
- Suburb × service pages are generated from shared service content with localised titles; they are not one-to-one scrapes of every long-tail CMS page.
- Cloudflare account setup is not required to ship the static build — connect Pages when credentials are available.
