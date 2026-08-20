import { request } from '@playwright/test';

export async function postJson(baseURL: string, path: string, data: unknown) {
  const context = await request.newContext({ baseURL });
  const response = await context.post(path, { data });
  const body = await response.json();
  await context.dispose();
  return { response, body };
}
