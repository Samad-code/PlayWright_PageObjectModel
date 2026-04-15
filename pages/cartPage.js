import { test, expect } from "@playwright/test";

exports.CartPage = class CartPage{

    constructor(page){
        this.page = page;
        this.cart = '.shopping_cart_link';
        this.cartItem = '.cart_list .cart_item .inventory_item_name';
    }

    async verifyCart(item){
        await this.page.click(this.cart);
        expect(this.page.url()).toBe('https://www.saucedemo.com/cart.html');
        console.log("Cart page is displayed");
        const cartElements = await this.page.$$(this.cartItem);
        for(const element of cartElements){
            const text = await element.textContent();
            console.log(`Cart item: ${text}`);
            if(item === text){
                console.log(`Product "${item}" is present in the cart.`);
                return;
            }
        }
        throw new Error(`Product "${item}" not found in cart`);
    }
};