# Next-Generation Saleor Storefront

## Motivation

- Provide free, community-maintained starter kit for building a scalable, feature-rich eCommerce site using Saleor, NextJS, and Vercel
- Utilize React Server Components and Next 13's `app` dir to highlight the advantages when applied to eCommerce development
- Generate interest and adoption of tech stack for new and existing projects
- Lower cost of standing up a maintainable eCommerce site

## Requirements

### Functional

- Product
  - Working storefront
    - Core pages
      - Sign in
      - Landing (Home)
      - Collections
      - Search Results
      - Product Details
      - Cart
      - Order History
      - Account
    - Backing starter "inventory" (from existing create example?)
    - More than one channel
  - Minimal, extensible design
  - Automatic dark mode toggle
  
- Development Experience
  - Can be created, built, deployed with single command
  - README w/ format similar to NextJS starter kit
  - Single entry point for customizing or replacing theme
  - Configure GraphQL integration using only Saleor API key
  - Examples for common scenarios
    - OAuth / Social Login
    - Analytics (Vercel + GA + other community examples)
    - RUM
    - CMS
    - Component library
    - Storybook
    - Bonuses
      - Distributed development of `app` dir components
      - Distributed development 
  

### Non-Functional

- Uses Next 13 `app` dir features
  - Minimize `use client`
  - Layouts / nested routes
  - `<Image>` component
  - i18n
- Uses Saleor backend and ideally `@saleor/app-sdk`
- Deployed to Vercel
- WCAG-AA Compliant
- Minimal dependencies
- HTTP Caching
- Can easily integrate or replace systems (theming, layout, etc.) independently of each other
- SEO optimized
  - Most content available from server response
  - Sitemaps and robots.txt well-formatted
  - Pages have JSON+LD info in <head>
  - Consistent use of canonical links
  - Good web vitals scores

### Needs Discussion

- Saleor CLI integration
- UI Kit
- Saleor Docs integration
- Blue Collar Coder co-marketing

### Out of Scope

- Checkout - Use Saleor Checkout
  - Do we have to integrate into the monorepo to do this?