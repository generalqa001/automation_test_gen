import { test, expect } from '../../fixtures/test';
import { productData } from '../../data/products';

test.describe('Product Smoke @smoke @p0 @products', () => {
  test('product catalog loads', async ({ productsPage }) => {
    await productsPage.goto();
    for (const product of productData) {
      await productsPage.expectProductVisible(product.name);
    }
  });

  test('product details opens', async ({ productsPage, page }) => {
    await productsPage.goto();
    await productsPage.openProduct('AI Laptop');
    await expect(page).toHaveURL(/product\.html\?id=1/);
    await expect(page.locator('#product')).toContainText('AI Laptop');
  });
});
