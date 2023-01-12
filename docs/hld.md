# Saleor Simple Storefront Project Proposal

This document contains a high-level proposal for an open source example for building a scalable, feature-rich eCommerce site using Saleor, NextJS, and Vercel

## Motivation

- Provide free community-maintained example that's easy to follow
- Utilize React Server Components and Next 13's `app` dir to highlight the advantages when applied to eCommerce development
- Generate interest and adoption of Saleor and Vercel for new and existing projects

## Requirements

### Functional

- Working storefront
  - Core pages
  - Backing starter "inventory" (from existing create example?)
  - Multi-channel support
- Minimal, extensible design
- Automatic dark mode toggle
  
### Non-Functional

- Uses Next 13 / `app` dir features
  - React server components
  - Layouts / nested routes
  - `<Image>` component
  - i18n
- Uses Saleor GraphQL API and ideally `@saleor/app-sdk`
- Deployed to Vercel
- Minimal dependencies
- HTTP Caching
- Can easily integrate or replace systems (theming, layout, etc.) independently of each other
- SEO optimized
  - Most content available from server response
  - Sitemaps and robots.txt well-formatted
  - Pages have JSON+LD info in <head>
  - Consistent use of canonical links
  - Good web vitals scores

### Out of Scope

- Checkout - Use Saleor Checkout
  - Will need to work with Saleor to figure out best path to doing this

## Solution Overview

```mermaid
flowchart LR

  User -- API request --> Saleor["Saleor Cloud"]
  Project["`app` dir project"] -- push to main --> Vercel["Vercel Deployment"]
  Vercel -- Web Page --> User
  Project -- saleor cli --> Saleor

```

### Boilerplate

- Single-package (not monorepo)
- Generated from `yarn create`
- Written in Typescript
- NextJS `app` dir
- Tailwind-based styling 

### Route Structure

- `app`
  - `[locale]`
    - `login`
    - `[channel]`
      - `(home)`
      - `collections/[id]`
      - `products/[id]`
    - `cart`
    - `checkout`
    - `account`
    - `orders`

### Components

- Uses React Server Components for everything possible
- Avoid `"use client;"` except in places where needed (adding to cart, advance carousel, load analytics, etc.)
- Styling should be done using Tailwind

#### Component Structure

Components are organized into the `src/components` folder using the following general rules:

- `src/components/`
  - `commerce/` - reusable commerce-related components not covered by free versions of Tailwind
    - `AddToCartButton`
    - `Card`
    - `ProductList`
    - `ProductCard`
    - `ProductOverview`
    - `ProductCarousel`
    - `Price`
  - `views/` - bespoke arrangements of Tailwind-styled HTML and `commerce` components used in `page`s and `layout`s
    - `LoginForm`
    - `ShoppingCart`
    - `ProductDetails`
    - `...` (full set to be identified w/ further interest!)

### State Management

All state management will be done using `React` itself, via one of its several built-in mechanisms.

State management choices should be made conscious of React Server Component constraints on context usage.

### Business Logic

Business logic, utilities, and other code should be written in Typescript as ES modules.

The folder structure might look like the following:

  - `src/core`
    - `auth`
    - `analytics`
    - `formatting`
    - `...`

### Authentication

Authenticate will be integrated using Saleor's [email/password auth](https://docs.saleor.io/docs/3.x/api-usage/authentication#user-authentication-using-email-and-password)

### Observability

For the MVP, Vercel Analytics will be used on the deployment. 

### Testing

Tests will be written using [Cypress](https://www.cypress.io/). 

Coverage of all user flows will be performed in a single language.

Coverage of "happy path" only will be performed for other language / channel combinations (vs. matrix-style testing).

### Linting

ESLint with default NextJS rules will be utilized.

### Mocks

Mocks will not be used in the initial version of the app. Instead, calls to the Saleor's API will be made directly.

### Deployments

Deployments will be done via Vercel. 

All defaults are to be used for branch names, preview environments, etc. No special conventions or setup should be required for a user to create their storefront.

If this is not possible, one fallback could be to use Vercel's [Terraform provider](https://vercel.com/guides/integrating-terraform-with-vercel) to define infrastructure as code for automating the setup.

## Open Source Model

The following is a proposed list of roles and responsibilities. 

Time commitments to be figured out based on priority and availability by interested parties.

- Core maintainers
  - NW Computing
  - Saleor

- Design system
  - NW Computing

- Community advocates
  - Vercel* (we need to talk to them)
  - Jack Herrington

- Community contributions
  - Current / former nike.com and walmart.com engineers
  - Other Saleor partners* (we could use an intro!)

## Timeline / Schedule

TBD based on resourcing commitments.

Tentatively we would like to launch this in Q1 / early Q2 2023, but have not done full estimations or resourcing plans towards a specific date.

## Future Ideas

### `yarn create` generator

- `yarn create` generator
- Examples folder for common integrations
  - Advanced Saleor features (multi-currency, custom product attributes)
  - Alternate UI Frameworks (Material UI, DaisyCSS)
  - Checkout integrations
  - Alternate analytics providers
  - Search (Algolia, Elastic)
  - OAuth / OIDC Logins
  - Monorepo

