
import { test, expect } from '@playwright/test';
import { time } from 'node:console';

export class HiddenDropDown {


    constructor(page) {
        this.page = page;
        this.userName = 'input[name="username"]',
            this.password = 'input[name="password"]'
        this.submitButton = 'button[type="submit"]',

            this.pim = '//span[normalize-space()="PIM"]'
        this.jobTitleDropdown = this.page.locator('div.oxd-grid-item').filter({ has: this.page.locator('label:text("Job Title")') }).locator('div.oxd-select-text');
        //this.listItems = this.page.$$("//div[@role='listbox']//span");
    }

    async website() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    }

    async login(username, password) {
        await this.page.fill(this.userName, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.submitButton);

    }

    async clickPIM() {

        //await this.page.getByRole('link', { name: 'PIM' }).click();
        await this.page.click(this.pim);
        expect(this.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        console.log("PIM page is displayed");
       // await this.page.waitForTimeout(5000);
    }

    async clickJobTitle(dropdownOption) {

        await this.jobTitleDropdown.click();
        //locate the whole list first and then the individual items name either in span or options and read all the items using for loop.
        this.listItems = await this.page.$$("//div[@role='listbox']//span");
        for (const item of this.listItems) {
            const itemName = await item.textContent();
            console.log(`Dropdown item: ${itemName}`);
            //await this.page.waitForTimeout(500);
            if (itemName===dropdownOption) {
                //Forced click-Click this element no matter what, even if it’s not normally clickable.
                //await item.click({ force: true });
                await item.click();
                console.log(`Selected ${itemName} from dropdown`);
                break;
            }
        }
    }
        
};
