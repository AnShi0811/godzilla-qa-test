import { Page } from '@playwright/test';

export async function dismissAllPopups(page: Page) {
    await dismissCookies(page);
    await dismissSimplePopups(page);
}

export async function dismissCookies(page: Page) {
    const cookies = page.getByRole('button', { name: 'Decline Non-Essential Cookies',exact: true});

    if (await cookies.isVisible().catch(() => false)) {
        await Promise.all([
            page.waitForEvent('load'),
            cookies.click(),
        ]);
    }
}

export async function dismissSimplePopups(page: Page) {
  const popupButtons = [
    'Close',
    'Close Dialog',
    'Save',
  ];

  for (const name of popupButtons) {
    const button = page.getByRole('button', { name, exact: true });

    if (await button.isVisible().catch(() => false)) {
      await button.click();
    }
  }
}