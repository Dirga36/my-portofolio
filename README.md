# Dirga36 Portfolio

A personal portfolio website built with Next.js and Once UI. It presents selected work, blog posts, an about/CV page, a visual gallery, social links, and newsletter signup content through a file-based MDX workflow.

## Tech Stack & Prerequisites

- Next.js 16 with the App Router
- React 19 and TypeScript
- Once UI for layout primitives, theming, and design tokens
- MDX for blog posts and project case studies
- Sass modules for component-specific styling
- Node.js 18.17 or newer
- npm
- Optional: a Mailchimp endpoint for newsletter subscriptions

## Quickstart / Local Development Setup

### 1. Clone and install

```bash
git clone https://github.com/Dirga36/my-portofolio.git
cd my-portofolio
npm install
```

### 2. Configure environment variables

Copy the example file and set the protected-route password:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `PAGE_ACCESS_PASSWORD` | Yes for protected routes | Password checked by `/api/authenticate` before protected pages are displayed. |
| `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` | No | Project-provided preview redirect variable; this application does not currently use Supabase routes. |

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful commands

```bash
npm run build     # Create a production build
npm run start     # Serve the production build
npm run lint      # Run Next.js linting
npm run biome-write # Format the repository with Biome
```

## Project Architecture & File Tree

```text
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/                   # About and CV page
│   ├── blog/                    # Blog index and dynamic post pages
│   │   └── posts/*.mdx          # Blog content
│   ├── gallery/                 # Image gallery
│   ├── work/                    # Work index and dynamic project pages
│   │   └── projects/*.mdx       # Project content
│   ├── api/                     # Route handlers for auth, RSS, and OG images
│   ├── layout.tsx               # Root layout, theme setup, header, footer, and guard
│   ├── robots.ts                 # Robots metadata route
│   └── sitemap.ts                # Sitemap metadata route
├── components/                  # Shared UI and feature components
│   ├── blog/                    # Blog listing components
│   ├── work/                    # Project listing components
│   └── about/                   # About-page components
├── resources/
│   ├── content.tsx              # Portfolio, person, blog, work, and gallery content
│   ├── once-ui.config.ts        # Routes, theme, effects, fonts, and site configuration
│   └── custom.css               # Project-level style overrides
public/                          # Static images, videos, and brand assets
```

The App Router maps folders under `src/app` to URLs. Pages read configuration and content from `src/resources`; blog posts and projects are loaded from MDX files and rendered through dynamic `[slug]` routes. Client-side route checks are handled by `RouteGuard`, while server route handlers manage password cookies, RSS output, and generated/open-graph images.

## Key Features & Modules

### Portfolio pages

- **Home (`/`)**: Introductory headline, featured project, recent posts, project listings, and newsletter form.
- **About (`/about`)**: Profile, biography, experience, education, and CV-style content.
- **Work (`/work`)**: Project index with dynamic case studies at `/work/[slug]`.
- **Blog (`/blog`)**: Post index with dynamic articles at `/blog/[slug]`.
- **Gallery (`/gallery`)**: Image gallery backed by local assets and configuration.

### Content management

- Add projects to `src/app/work/projects/*.mdx`.
- Add blog posts to `src/app/blog/posts/*.mdx`.
- Update personal information and page copy in `src/resources/content.tsx`.
- Enable or disable routes and configure styling in `src/resources/once-ui.config.ts`.

### SEO and feeds

- Metadata and structured data are generated with Once UI helpers.
- Open Graph images are generated through `/api/og/generate`.
- RSS output is available at `/api/rss`.
- Robots and sitemap metadata routes are provided by `src/app/robots.ts` and `src/app/sitemap.ts`.

### Protected routes

Routes listed in `protectedRoutes` require the `PAGE_ACCESS_PASSWORD` value. Successful authentication sets an HTTP-only `authToken` cookie for one hour; the browser checks the session through `/api/check-auth`.

## API Routes

| Method | Endpoint | Request | Response |
| --- | --- | --- | --- |
| `POST` | `/api/authenticate` | JSON: `{ "password": "..." }` | `200` with `{ "success": true }` and an HTTP-only cookie, or `401` for an incorrect password. |
| `GET` | `/api/check-auth` | No body | Indicates whether the authentication cookie is valid. |
| `GET` | `/api/rss` | No body | RSS XML feed for published blog content. |
| `GET` | `/api/og/generate?title=...` | Optional `title` query parameter | Generated Open Graph image. |
| `GET` | `/api/og/fetch?url=...` | `url` query parameter | Fetches metadata/image information for OG generation. |
| `GET` | `/api/og/proxy?url=...` | `url` query parameter | Proxies a remote image for OG generation. |

## Deployment & CI/CD

### Vercel

1. Import `Dirga36/my-portofolio` into Vercel.
2. Use the default Next.js build settings.
3. Add `PAGE_ACCESS_PASSWORD` in the project environment variables when protected routes are enabled.
4. Deploy the branch or create a production deployment from the configured production branch.

### Manual production build

```bash
npm ci
npm run build
npm run start
```

The repository does not currently define a CI workflow. Add a GitHub Actions workflow if automated lint, build, or deployment checks are required.

## Troubleshooting & Common Issues

### Protected pages return an error

Confirm that `PAGE_ACCESS_PASSWORD` is present in the environment used by the server. Restart the development server after changing `.env.local`; environment variables are not reliably reloaded during an existing process.

### A new post or project does not appear

Check that the file is in the correct `src/app/blog/posts` or `src/app/work/projects` directory, uses the expected MDX frontmatter, and that the corresponding route is enabled in `src/resources/once-ui.config.ts`.

### Styling or theme changes appear inconsistent

Update the Once UI configuration and restart the dev server if needed. Avoid adding unrelated global styles; component-specific overrides belong in the existing Sass modules or resource stylesheet.

## License

Distributed under the CC BY-NC 4.0 License. Attribution is required, and commercial usage is not permitted without an applicable Once UI license extension. See [`LICENSE`](LICENSE) for the complete terms.

## Related Links

- [Next.js](https://nextjs.org)
- [Once UI](https://once-ui.com)
- [Once UI Magic Portfolio documentation](https://docs.once-ui.com/docs/magic-portfolio/quick-start)
- [Vercel](https://vercel.com)

## TODO

- [TODO: Document the exact MDX frontmatter schema for posts and projects.]
- [TODO: Document the newsletter provider configuration if Mailchimp is enabled.]
- [TODO: Add automated CI checks for linting, type checking, and production builds.]

## Author

Maintained by Dirga36. Repository: [github.com/Dirga36/my-portofolio](https://github.com/Dirga36/my-portofolio).

This project is based on the Magic Portfolio template by Once UI.
