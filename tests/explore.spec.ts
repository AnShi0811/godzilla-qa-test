
import { test, expect } from '@playwright/test';
import { dismissAllPopups } from '../helpers/popups';
import { scrolldown } from '../helpers/scroll';


test('monsterpedia browse', async ({ page }) => {
  // Open the website

  await page.goto('https://godzilla.com/');

  await dismissAllPopups(page);

  await page.locator('.header-navigation__item-title').filter({ hasText: 'Explore' }).click();
  await page.getByRole('link', { name: 'MONSTERS', exact: true }).click();

  await page.getByRole('heading', { name: 'DESTOROYAH', exact: true }).click();

  await scrolldown(page);

  await expect(page.getByRole('heading', {name: 'DESTOROYAH By The Numbers', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', {name: 'DESTOROYAH Through The Ages', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Destoroyah in the Store', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Movies & WHERE TO STREAM', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Godzilla vs. Destoroyah', exact: true })).toBeVisible();
  
});

test('Movies browse', async ({ page }) => {
  // Open the website

  await page.goto('https://godzilla.com/');

  await dismissAllPopups(page);

  await page.locator('.header-navigation__item-title').filter({ hasText: 'Explore' }).click();
  await page.getByRole('link', { name: 'MOVIES', exact: true }).click();

  await scrolldown(page);

  await expect(page.getByRole('heading', {name: 'TOHO CLASSICS', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', {name: 'HOLLYWOOD', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', {name: 'ANIME', exact: true })).toBeVisible();
  
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