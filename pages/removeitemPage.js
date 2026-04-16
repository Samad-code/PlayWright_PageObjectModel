import {test, expect} from '@playwright/test';


export class RemoveItems{

    constructor(page){
        this.page = page;
        this.cart = '.shopping_cart_link';
    }

async removeItems(productNames) {

    await this.page.click(this.cart);
    expect(this.page.url()).toBe('https://www.saucedemo.com/cart.html');
    console.log("Cart page is displayed");

        for (const productName of productNames) {

            const slug = productName.toLowerCase().replace(/ /g, '-');

            const removeBtn = this.page.locator(`[data-test="remove-${slug}"]`);

            await expect(removeBtn).toBeVisible();

            await removeBtn.click();

            console.log(`Removed "${productName}" from cart`);
        }
    }
};
