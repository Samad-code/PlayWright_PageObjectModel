import { expect,test } from "@playwright/test";
exports.CartPage = class CartPage{

    constructor(page){
        this.page = page;
        this.cart = '.shopping_cart_link';
        this.cartItem = '.inventory_item_name';
    }

    async verifyCart(item){
        await this.page.click(this.cart);
        expect(this.page.url()).toBe('https://www.saucedemo.com/cart.html');
        console.log("Cart page is displayed");
        const cartItems = await this.page.locator(this.cartItem).textContent();
        for(const Item of cartItems){
        if(item == await Item.textContent()){
            console.log('Product "${item}" is present in the cart.');
            return;
        }


    }
}
};