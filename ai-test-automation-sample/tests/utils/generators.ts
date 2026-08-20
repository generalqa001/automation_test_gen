export function uniqueEmail(prefix = 'user') {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}@example.com`;
}

export function randomName() {
  return `Automation User ${Date.now()}`;
}
