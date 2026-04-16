
import{test, expect} from '@playwright/test';

exports.AdditemPage = class AdditemPage{

    constructor(page){
        this.page = page;
        //this.productlist = '.inventory_item_name';
    }

async addToCart(productName){
        const slug = productName.toLowerCase().replace(/ /g, '-');
        const addToCartButton = await this.page.locator(`#add-to-cart-${slug}`);
        console.log(await addToCartButton.count());
        console.log(`Attempting to add "${addToCartButton}" to cart...`);
        await expect(addToCartButton).toBeVisible({ timeout: 5000 });
        if(await addToCartButton.isVisible()){
            await addToCartButton.click();
            console.log(`Product "${productName}" added to cart.`);
        } else {
            throw new Error(`Add to cart button for "${productName}" not found.`);
        }
    }
};