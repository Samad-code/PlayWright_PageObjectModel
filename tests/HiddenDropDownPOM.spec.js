import {test, expect} from '@playwright/test';
import {HiddenDropDown} from '../pages/HiddenDropDown.js';

test.only('Hidden DropDown Test', async ({ page }) => {



    const login = new HiddenDropDown(page);
    await login.website();
    await login.login('Admin', 'admin123');

    login.clickPIM();
});