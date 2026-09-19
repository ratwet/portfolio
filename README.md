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

## Security headers on GitHub Pages

The site keeps a Content Security Policy as a meta tag because GitHub Pages does not provide a supported project-level configuration for arbitrary HTTP response headers. The meta-delivered policy intentionally excludes `frame-ancestors`, which is not honored through that delivery mechanism.

GitHub Pages also cannot enforce `X-Frame-Options`, `X-Content-Type-Options`, or `Permissions-Policy` from page markup. If real response-header enforcement is required, place the site behind a header-aware host or CDN such as Cloudflare, or deploy the same static output to a platform that supports a `_headers` file.

Do not treat the current GitHub Pages deployment as having clickjacking or MIME-sniffing protection from HTML meta tags alone.
