# Kaushal Kumar — Portfolio

Personal portfolio of **Kaushal Kumar**, a B.Tech Mathematics & Computing student focused on applied AI, computer vision, embedded systems, robotics, and software engineering.

🌐 **Live site:** https://kaushal.is-a.dev

## Stack

- Astro
- TypeScript
- Vanilla CSS
- Fontsource Geist
- GitHub Actions
- GitHub Pages

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

## Project structure

```text
src/
├── components/        # Reusable Astro UI components
├── data/              # Projects, experience, and certifications
├── layouts/           # Shared page layout and metadata
├── pages/             # Site routes
└── styles/            # Design tokens and global styles

public/
├── media/             # Project visuals
├── og.png             # Social preview image
└── ...
```

## Deployment

Pushes to `main` are built and deployed to GitHub Pages through GitHub Actions. The production domain is configured as **kaushal.is-a.dev**.

The deployment workflow runs type checking, an Astro production build, and a generated-dist link/asset validation before publishing.

## License

MIT
