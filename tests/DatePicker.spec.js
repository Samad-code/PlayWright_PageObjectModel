import { test, expect } from '@playwright/test';

test('Date Picker Test', async ({ page }) => {



   await page.goto('https://testautomationpractice.blogspot.com/');

    const Year = 2026;
    const Month = 'July';
    const Date = '06';


   const calendar =  await page.locator('p #datepicker');
   await calendar.waitFor({ state: 'visible' });
    await calendar.click();
    //await page.locator("//input[@id='datepicker']").click();
    //await page.waitForTimeout(6000);
 await page.locator('.ui-datepicker-year').waitFor();

    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const CurrentMonth = await page.locator('.ui-datepicker-month').textContent();
        if (currentYear == Year && CurrentMonth == Month) {
            break;
        }
        await page.click('.ui-datepicker-next');
    }

    /*const dateElements = await page.$$('.ui-state-default');
    for (const dateElement of dateElements) {
        const dateText = await dateElement.textContent();
        if (dateText === Date) {
            await dateElement.click();
            break;
        }
        await page.waitForTimeout(500);
    } */
   

        //Without loop
        await page.click("//a[class='ui-state-default'] [text()= '+Date+']");
        await page .click("//a[@class")
});