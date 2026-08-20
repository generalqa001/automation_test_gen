import { test } from '../../fixtures/test';
import { searchData } from '../../data/products';

test.describe('Product catalog @regression @p1 @products', () => {
  test('search is data driven', async ({ productsPage }) => {
    await productsPage.goto();
    for (const item of searchData) {
      await productsPage.search(item.term);
      await productsPage.expectProductVisible(item.expected);
    }
  });

  test('category filter works @p1', async ({ productsPage }) => {
    await productsPage.goto();
    await productsPage.filterCategory('books');
    await productsPage.expectProductVisible('API Notebook');
    await productsPage.expectProductCount(1);
  });

  test('accessories filter works @p2', async ({ productsPage }) => {
    await productsPage.goto();
    await productsPage.filterCategory('accessories');
    await productsPage.expectProductVisible('Test Keyboard');
    await productsPage.expectProductVisible('QA Headset');
  });
});
