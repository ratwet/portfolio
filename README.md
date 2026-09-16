# Kaushal Kumar — Portfolio

Personal portfolio for Kaushal Kumar, built with Astro and deployed to GitHub Pages.

## Stack

- Astro 6
- TypeScript
- Content collections for projects, experience, and certifications
- Responsive CSS with light/dark themes
- GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

## Content

Project case studies live under `src/data/projects/`. Experience and certifications are Markdown data under their respective directories, so content can be updated without changing page templates.

## Deployment

Every push to `main` builds the site and deploys `dist/` through GitHub Pages.
