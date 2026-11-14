# Maroon Rides Website

https://maroonrides.app

SvelteKit site, prerendered with `adapter-static` and deployed to Cloudflare Pages by
`.github/workflows/deploy.yml`. Pushes to `master` go to production; pull requests get a preview
at `pr<number>.<project>.pages.dev`. The Pages project, domains and deploy credentials are managed
in [Maroon-Rides/infra](https://github.com/Maroon-Rides/infra) (`tofu/modules/pages-site`).

```sh
mise install
pnpm install
pnpm dev
```

Release notes for the What's New page live in `src/lib/changelog.ts`.
