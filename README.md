# Faraha Ulfath Khan: Portfolio

A dark, modern personal portfolio for a Product Designer with a software engineering background. Built with Next.js and deployable to Vercel in a few minutes.

## Overview

Sections: Home, About, Experience, Featured Projects, Product Design and UI/UX, Software Engineering, Skills, Leadership, Education, Contact.

14 projects across four standard categories — UI/UX, Web Development, Mobile App, Creative / Visual Design — pulled from the CV plus the GitHub and Behance links provided. Content lives in `src/data/`, so you can update the site without touching components.

## Tech stack

- Next.js 15 (App Router) and React 19
- TypeScript
- Tailwind CSS 3
- Formspree (email) through a Next.js API route
- No animation or UI libraries. Motion is plain CSS plus one small `IntersectionObserver` hook.

## Project structure

```
src/
  app/
    layout.tsx            fonts, SEO metadata, background, nav, footer
    page.tsx              assembles the sections + JSON-LD
    api/contact/route.ts  contact form endpoint (server only)
    opengraph-image.tsx   social sharing image
    icon.svg              favicon
  components/             one file per section, plus ui/ primitives
  data/
    site.ts               name, email, links, profile photo path
    experience.ts          work experience (matches the CV)
    projects.ts            all 14 projects, categories, images, galleries
    skills.ts               skills, grouped
  lib/validate.ts         validation shared by the form and the API
public/images/
  profile.png             profile photo
  projects/                project cover images and galleries
```

## Local setup

Requires Node.js 18.18 or newer.

```bash
npm install
cp .env.example .env.local     # then fill in the values (see below)
npm run dev                    # http://localhost:3000
npm run build                  # production build check
npm run start                  # serve the production build
```

## Project images

- **Profile photo, Learning Hub, NexStyle** and the six **Smart Shop** screenshots are already included under `public/images/`.
- **Behance projects** (Login & Sign-Up, E-Learning Website Design, Food App Design, the social-media-post designs) use Behance's own hosted thumbnails, loaded directly from `mir-s3-cdn-cf.behance.net`. For sharper previews, export a larger image and swap the `image`/`gallery` entry in `src/data/projects.ts` for a local path under `public/images/projects/`.
- **Habit Tracker** has no image yet (its GitHub screenshots use signed, expiring links that can't be embedded reliably). Add a screenshot to `public/images/projects/` and set its `image` in `src/data/projects.ts` when you have one; until then it shows a clean typographic placeholder, which is intentional rather than a stock photo.

Projects with multiple images (Smart Shop, the social-media-post collections) show a thumbnail strip and arrows in the detail view.

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `FORMSPREE_FORM_ID` | Yes | Your Formspree form ID — the part after `/f/` in your form's endpoint URL. |
| `NEXT_PUBLIC_SITE_URL` | No | Your production URL, used for SEO metadata and the sitemap. On Vercel, the production URL is detected automatically if this is unset. |

Never commit `.env.local`. It is already listed in `.gitignore`.

## Contact form setup (Formspree)

How it works:

```
Visitor -> Contact form -> /api/contact (Next.js) -> Formspree -> your inbox
```

The form keeps its own server-side validation, a hidden honeypot field, and a basic rate limit — Formspree only handles delivering the email.

1. **Create a free account** at [formspree.io](https://formspree.io) with the email address where you want to receive messages.
2. **Create a new form:** on the dashboard, click "+ New Form", give it a name (e.g. "Portfolio Contact"), and set the email it should deliver to (your own, by default).
3. **Get the form ID:** your new form's endpoint looks like `https://formspree.io/f/xandalkj` — the part after `/f/` (here, `xandalkj`) is the form ID.
4. **Allow your domain:** in the form's Settings, under "Allowed Domains" / "reCAPTCHA & Security", add your Vercel domain (e.g. `your-project.vercel.app`, and `localhost` while testing locally) so Formspree accepts submissions from it.
5. **Local variable:** copy `.env.example` to `.env.local` and set `FORMSPREE_FORM_ID` to your form ID. Restart `npm run dev`.
6. **Test locally:** open the site, submit the form, and check your inbox (and spam folder the first time). Formspree sets the visitor's email as Reply-To, so replying to the notification email replies straight to them.

The free Formspree plan includes 50 submissions a month, which is normally plenty for a portfolio's contact form.

## GitHub setup

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/khanfaraha/<your-repo-name>.git
git push -u origin main
```

Create the empty repository on GitHub first (github.com/new). Do not tick "Add a README".

## Deploy to Vercel

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Add New, Project, then import the repository. Vercel detects Next.js automatically. Leave the build settings as they are.
3. Before deploying, open **Environment Variables** and add `FORMSPREE_FORM_ID`. Apply it to Production, Preview, and Development.
4. Click **Deploy**.
5. **Test the deployed form:** open the live URL, submit a message, and confirm it arrives.

If you add or change environment variables after deploying, redeploy (Deployments, the latest one, Redeploy) so they take effect.

Every `git push` to `main` deploys automatically from then on.

## Troubleshooting

- **Form says "The contact form is not available right now."** `FORMSPREE_FORM_ID` is missing in this environment. Check `.env.local` locally, or Vercel's settings, then redeploy.
- **Form says the message could not be delivered.** Check the Vercel function logs (Project, Logs). The usual cause is the deployed domain not yet being added to Formspree's "Allowed Domains" for that form.
- **A Behance project image is blank.** The hosted thumbnail failed to load, so the site falls back to the typographic cover. Replace it with a local image as described above.
- **Fonts.** Sora and Figtree are downloaded from Google Fonts at build time and self-hosted by Next.js. The first build needs an internet connection.

## Content notes

- Titles, companies, and dates follow the CV exactly.
- Projects are categorised with standard, recruiter-facing labels (UI/UX, Web Development, Mobile App, Creative / Visual Design) rather than a single "Software Engineering" bucket.
- Learning Hub's description reflects that it's an e-learning site, not e-commerce.
- Habit Tracker's tech stack (Flutter, Dart, Firebase) comes directly from its own GitHub README.
- Two typos in the CV are corrected on the site: "Proffesional" to "Professional" and "SOCITY" to "Society".
