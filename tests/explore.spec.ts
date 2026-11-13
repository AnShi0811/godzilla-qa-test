
import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  // Open the website
  await page.goto('https://godzilla.com/');

  await page.locator('.header-navigation__item-title')
    .filter({ hasText: 'Explore' }).click();

  await page.getByRole('link', { name: 'MONSTERS', exact: true }).click();

  await expect(page.getByText('MONSTERPEDIA', { exact: true })).toBeVisible();
});
