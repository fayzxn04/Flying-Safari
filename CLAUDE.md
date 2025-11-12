# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flying Safari is a travel website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. The project uses the Next.js App Router architecture with route groups and server components by default.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Note: This project uses webpack explicitly (`--webpack` flag) instead of the default Turbopack.

## Architecture

### App Structure

- **App Router**: Uses Next.js App Router (not Pages Router)
- **Route Groups**: Routes are organized with route groups, e.g., `app/(home)/page.tsx` for the home page
- **Layout System**: Root layout at [app/layout.tsx](app/layout.tsx) handles global metadata and font configuration

### Component Organization

Components are organized by feature and type:
- `components/common/`: Shared components used across features (e.g., Banner)
- `components/home/`: Home-specific components
- `components/about/`: About-specific components

Each feature typically has a parent component (e.g., `HomeParent.tsx`) that orchestrates child components.

### Styling

- **Tailwind CSS v4**: Uses the new `@theme inline` syntax in [app/globals.css](app/globals.css)
- **Custom Theme Variables**:
  - `--color-primary: #48503b` (olive green)
  - `--color-secondary: #d9a551` (gold)
- **Global Classes**:
  - `.max-width`: Responsive container with max-width of 1440px
  - `.main-container`: Vertical spacing utility
- **Typography**: Uses Pacifico font (Google Fonts) as the display font, loaded in root layout

### Path Aliases

TypeScript is configured with `@/*` alias pointing to the root directory for cleaner imports:
```typescript
import HomeParent from "@/components/home/HomeParent";
```

### Image Handling

- Static images are stored in `public/images/`
- Uses Next.js `Image` component with optimization
- Banner images use `fill` layout with `object-cover` for full-width backgrounds

## Key Patterns

1. **Client Components**: Components using browser APIs or interactivity need `"use client"` directive (see [components/common/Banner.tsx](components/common/Banner.tsx))
2. **Metadata**: Each route can export metadata for SEO (title, description)
3. **Server Components**: Default for all components unless marked with `"use client"`
