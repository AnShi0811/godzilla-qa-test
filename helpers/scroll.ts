import { Page } from '@playwright/test';

export async function scrolldown(page: Page) {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
}