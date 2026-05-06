import{test, expect} from '@playwright/test'

test("Handling table", async({page})=>{


   await page.goto('https://testautomationpractice.blogspot.com/') 

   const table = await page.locator('#productTable');

   //to check total number of rows & column

   const column = await table.locator('thead tr th')
   console.log('Number of column:', await column.count());

   const row = await table.locator('tbody tr');
   console.log('Number of row:', await row.count());
})