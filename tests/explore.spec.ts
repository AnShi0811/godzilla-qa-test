
import { test, expect } from '@playwright/test';
import { dismissAllPopups } from '../helpers/popups';


test('monsterpedia-landscape', async ({ page }) => {
  // Open the website

  await page.goto('https://godzilla.com/');

  await dismissAllPopups(page);

  await page.locator('.header-navigation__item-title').filter({ hasText: 'Explore' }).click();
  await page.getByRole('link', { name: 'MONSTERS', exact: true }).click();

  await expect(page.getByText('MONSTERPEDIA', { exact: true })).toBeVisible();
});

test.describe('Portrait layout', () => {
  test.use({
    viewport: { width: 390, height: 844 },
  });

  test('monsterpedia-portrait', async ({ page }) => {
    // Open the website


    await page.goto('https://godzilla.com/');

    await dismissAllPopups(page);

    await page.locator('.header-util__mobile-nav-open').click();
    await page.getByRole('button', { name: 'Explore', exact: true}).click({force:true});
    await page.getByRole('link', { name: 'MONSTERS', exact: true}).click();

    await expect(page.getByText('MONSTERPEDIA', { exact: true })).toBeVisible();
  });
});