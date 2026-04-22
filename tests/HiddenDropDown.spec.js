import {test, expect} from '@playwright/test';

test.only('Hidden Dropdown Test', async ({ page }) => {

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
    if(itemName.trim() === 'Automation Tester'){ 
        await item.click();
        console.log(`Selected ${itemName} from dropdown`);
        break;
         
    }
}
    

});