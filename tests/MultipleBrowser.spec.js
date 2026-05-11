import { test, expect, chromium } from '@playwright/test';

test('Open multiple window', async(page)=>{

  // browser contain context 
const browser = await chromium.launch();

//context contains multiple pages
const context = await browser.newContext();

//in this ex context contains 2pages page1 and page2
const page1 = await context.newPage();
const page2 = await context.newPage();


const allPages = context.pages();
console.log("No of pages or windows: ", allPages.length)

await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(page1).toHaveTitle("OrangeHRM");

await page2.goto('https://orangehrm.com/');
await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses ");

});



test.only("Handling multiple window from singale page", async()=>{

const browser = await chromium.launch()
const context = await browser.newContext()
const page1 = await context.newPage();
await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(page1).toHaveTitle("OrangeHRM");

//Create a event- open thsi event is keep the empty tab open and when
//click on the link later that new page is opened in this already opened tab- 
// Hence its kind of a promis the variable pagePromise only have the data of second page once the link of the page is clicked.
const pagePromise = context.waitForEvent('page')
await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

//after clicking the pagePromise has the new window opened so we can assin that new page/window to new variable

const newPage = await pagePromise;
// now using newPage we can perform action on the tab/window
await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses ");

await page1.waitForTimeout(5000);
await newPage.waitForTimeout(5000);


// we can perfor action on bothe page b using the page variable - page1.locator('HDJW') for one page and newPage.locator("DHJJDWD") for another
})
