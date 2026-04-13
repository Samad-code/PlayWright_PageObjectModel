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
        const allProducts = await this.page.$$(this.productlist);

        for(const productName of allProducts){
            console.log(await productName.textContent());
            if(product == await productName.textContent()){
                console.log(`Product "${product}" is present in the product list.`);
                return;

            }

        }
    
    }
    };