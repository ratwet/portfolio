# Kaushal Kumar Portfolio

Personal portfolio for Kaushal Kumar, built with Astro and deployed as a static site on GitHub Pages.

## Stack

- Astro 6
- Astro Content Collections
- Native Astro ClientRouter transitions
- Vanilla CSS and TypeScript
- Self-hosted Geist fonts via Fontsource
- Astro sitemap integration

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run check
npm run build
npm run preview
```

## Deployment

Pushes to `main` build and deploy the static output to GitHub Pages through GitHub Actions. Dependencies are monitored by Dependabot and audited in CI.
