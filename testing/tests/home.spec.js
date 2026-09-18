import { test, expect } from '@playwright/test';

test('homepage has a header', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toContainText("Testing in Next.js");
});