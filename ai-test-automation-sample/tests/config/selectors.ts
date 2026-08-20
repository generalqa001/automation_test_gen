export const SELECTORS = {
  login: {
    email: '[data-testid="email"]',
    password: '[data-testid="password"]',
    submit: 'button[type="submit"]',
    message: '#message'
  },
  register: {
    name: '[data-testid="name"]',
    email: '[data-testid="email"]',
    password: '[data-testid="password"]',
    submit: 'button[type="submit"]',
    message: '#message'
  },
  products: {
    search: '#search',
    category: '#category',
    card: '[data-testid^="product-"]'
  }
} as const;
