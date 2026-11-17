import { test, expect } from '@playwright/test';
import { dismissAllPopups } from '../helpers/popups';


test('3 featured articles', async ({ page }) => {

    await page.goto('https://godzilla.com/');

    await dismissAllPopups(page);

    await page.locator('.header-navigation__item-title').filter({ hasText: 'News' }).click();
    await page.click('#news');

    const featured = await page.locator('.blog-featured-articles');

    await expect(featured.locator('.article-card')).toHaveCount(3);
})

test('new tags', async ({ page }) => {

    await page.goto('https://godzilla.com/blogs/news');

    await dismissAllPopups(page);

    const tags = await page.locator('.blog_tags');

    await expect(tags.locator('.blog__tag-link')).toHaveCount(8);
})

test('featured article exists', async ({ page }) => {

    await page.goto('https://godzilla.com/blogs/news');

    await dismissAllPopups(page);

    const featured = await page.locator('.blog-featured-articles');
    const article = await featured.locator('.article-card').first()

    await article.click()

    await expect(page).not.toHaveURL('https://godzilla.com/404');
    await expect(page.getByRole('heading', {name:'404'})).toHaveCount(0);
})