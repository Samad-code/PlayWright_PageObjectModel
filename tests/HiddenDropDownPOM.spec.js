import {test, expect} from '@playwright/test';
import {HiddenDropDown} from '../pages/HiddenDropDown.js';

test.only('Hidden DropDown Test', async ({ page }) => {
test.setTimeout(60000);


    const login = new HiddenDropDown(page);
    await login.website();
    await login.login('Admin', 'admin123');
    await page.waitForTimeout(3000);

    login.clickPIM();
    await page.waitForTimeout(3000);

    login.clickJobTitle('QA Engineer');
    await page.waitForTimeout(3000);
});