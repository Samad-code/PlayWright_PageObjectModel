
import {test, expect} from '@playwright/test'   

test('Select multiple options', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);
const itemName = await page.selectOption('#colors', ['Blue', 'Yellow', 'Red']);
console.log(itemName);
//Assertions
// Check number of options in dropdown
const options = page.locator('#colors option')
await expect(options).toHaveCount(7);

//2) check number of options in dropdown using JS array
const optionItem = await page.$$('#colors option')
console.log("Number of options are:", optionItem.length);
await expect(optionItem.length).toBe(7);

//3) check presence of the items in the drop down
const content = await page.locator('#colors').textContent();
await expect(content.includes('Blue')).toBeTruthy;
await expect(content.includes('Blue')).toBeFalsy;

await page.waitForTimeout(1000);
    
})