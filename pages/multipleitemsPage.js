import { test, expect } from '@playwright/test';


exports.MultipleItems = class MultipleItems {

    constructor(page) {
        this.page = page;
        // this.product = 'data-test="add-to-cart-"';
    }

    // 🔹 Add multiple specific items (e.g., 3 items)
    async addMultipleItems(productNames) {
        for (const productName of productNames) {
            const slug = productName.toLowerCase().replace(/ /g, '-');
            const addToCartButton = await this.page.locator(`[data-test="add-to-cart-${slug}"]`);
            await expect(addToCartButton).toBeVisible({ timeout: 5000 });
            if (await addToCartButton.isVisible()) {
                await addToCartButton.click();

                console.log(`Product "${productName}" added to cart.`);
            }
            else {
                throw new Error(`Add to cart button for "${productName}" not found.`);
            }
        }
    }
};
