import { test, expect } from '@playwright/test';

test('Hidden Dropdown Test', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login to the application
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.getByRole('link', { name: 'PIM' }).click();

    await page.waitForTimeout(2000);
    const jobTitleDropdown = await page.locator('div.oxd-grid-item').filter({ has: page.locator('label:text("Job Title")') }).locator('div.oxd-select-text');

    await jobTitleDropdown.click();

    await page.waitForTimeout(1000);

    const listItems = await page.$$("//div[@role='listbox']//span");
    for (const item of listItems) {
        const itemName = await item.textContent();
        console.log(`Dropdown item: ${itemName}`);

        await page.waitForTimeout(500);
        if (itemName.includes('Software Engineer')) {


            await item.click({ force: true });
            console.log(`Selected ${itemName} from dropdown`);
            break;

        }

    }
    await page.waitForTimeout(5000);
});

test.only
('Hidden Dropdown Test SUb Unit', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login to the application
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.getByRole('link', { name: 'PIM' }).click();

    await page.waitForTimeout(2000);
    const subUnitDropdown = await page.locator('div.oxd-grid-item').filter({ has: page.locator('label:text("Sub Unit")') }).locator('div.oxd-select-text');

    await subUnitDropdown.click();

    await page.waitForTimeout(1000);

    const unitlistItems = await page.$$("//div[@role='listbox']//span");
    for (const item of unitlistItems) {
        const itemName = await item.textContent();
        console.log(`Dropdown item: ${itemName}`);

        await page.waitForTimeout(500);
        if (itemName==='Human Resources') {


            await item.click({ force: true });
            console.log(`Selected ${itemName} from dropdown`);
            break;

        }

    }

});