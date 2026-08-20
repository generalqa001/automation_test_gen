import { test } from '../../fixtures/test';
import { AiPage } from '../../pages/AiPage';
import { aiPrompts } from '../../data/ai';

test.describe('AI test domain @regression @ai', () => {
  for (const data of aiPrompts) {
    test(`AI responds to prompt: ${data.prompt} ${data.tag}`, async ({ page }) => {
      const ai = new AiPage(page);
      await ai.goto();
      await ai.ask(data.prompt);
      await ai.expectResponse(data.expected);
    });
  }

  test('AI prompt is required @p1 @ai', async ({ page }) => {
    const ai = new AiPage(page);
    await ai.goto();
    await ai.ask('');
    await ai.expectResponse('Prompt is required');
  });
});
