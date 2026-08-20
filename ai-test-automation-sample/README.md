# AI Test Automation Sample Repository

A medium-complexity demo e-commerce website plus a Playwright TypeScript automation framework.

## Included

- Demo website with:
  - Login/logout
  - Registration
  - Product listing/search/filter
  - Product details
  - Cart
  - Checkout
  - Profile
  - Orders
- Page Object Model (POM)
- Data-driven tests
- Centralized selectors/routes/test data/config
- Utility and helper layers
- Session/auth-state implementation
- Test tags
- Priority and product-domain based test organization
- API-ready AI test endpoint
- Reusable fixtures
- Screenshots, videos and traces on failure

## Project structure

```text
src/
  server.ts                 # Demo application
  public/                   # HTML/CSS/JS

tests/
  config/                   # Routes, selectors and constants
  data/                     # Data-driven test datasets
  fixtures/                 # Shared Playwright fixtures
  pages/                    # Page objects
  utils/                    # Reusable utilities
  flows/                    # Reusable business flows
  specs/
    smoke/                  # P0 critical journeys
    regression/             # P1/P2 regression
    domains/
      auth/                 # Authentication domain
      products/             # Product domain
      cart/                 # Cart domain
      checkout/             # Checkout domain
      profile/              # Profile domain
      orders/               # Orders domain
      ai/                   # AI test examples
```

## Tags

Examples:

- `@smoke`
- `@regression`
- `@p0`
- `@p1`
- `@p2`
- `@auth`
- `@products`
- `@cart`
- `@checkout`
- `@ai`

## Run

Install dependencies:

```bash
npm install
npx playwright install
```

Start the demo website:

```bash
npm run app
```

In another terminal:

```bash
npm test
```

Smoke only:

```bash
npm run test:smoke
```

Authentication:

```bash
npm run test:auth
```

Products:

```bash
npm run test:products
```

AI tests:

```bash
npm run test:ai
```

Generate an HTML report:

```bash
npm run report
```

## Demo users

- `qa@example.com` / `Password123!`
- `admin@example.com` / `Admin123!`

## AI API

The demo website contains a simple `/api/ai` endpoint. It runs without an API key by returning a deterministic mock response.

To use a real OpenAI integration, add:

```text
OPENAI_API_KEY=your_key
OPENAI_MODEL=your_model
```

to `.env`, then replace the mock implementation in `src/server.ts` with your preferred current OpenAI SDK integration.

Never commit API keys.
