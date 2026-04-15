import { expect,test } from "@playwright/test";


exports.HomePage = class HomePage{

    constructor(page){
        this.page = page;
        this.productlist = '.inventory_item_name';
    }

    async verifyProductList(product){
        const productNames = await this.page.locator(this.productlist).allTextContents(); 
        //console.log(productNames);
        //expect(productNames.length).toBeGreaterThan(0);
        // $$ returns an array of elements, we can iterate through them to find the matching product name
        //$ return only the first element that matches the selector, we can use it to check if the product is present in the list
        // .all() returns an array of elements, we can iterate through them to find the matching product name same as $$ but with locator
        //const allProducts = await this.page.$$(this.productlist);
        const allProducts = await this.page.locator(this.productlist).all();

        for(const productName of allProducts){
            console.log(await productName.textContent());
            if(product == await productName.textContent()){
                console.log(`Product "${product}" is present in the product list.`);
                return;

            }

        }
    
    }

    
/*
    async addToCart(productName){
        const slug = productName.toLowerCase().replace(/ /g, '-');
        const addToCartButton = await this.page.locator(`[data-test="add-to-cart-${slug}"]`);
        if(await addToCartButton.isVisible()){
            await addToCartButton.click();
            console.log(`Product "${productName}" added to cart.`);
        } else {
            throw new Error(`Add to cart button for "${productName}" not found.`);
        }
    }*/
};