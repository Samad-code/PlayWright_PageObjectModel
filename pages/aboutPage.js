

import {test, expect} from '@playwright/test';



export class AboutPage {

    constructor(page) {
        this.page = page;
        this.menuburger = '#react-burger-menu-btn';
        this.aboutLink = '[data-test="about-sidebar-link"]';                              
    }


    async navigateToAboutPage() {
        await this.page.click(this.menuburger);
        await this.page.waitForSelector(this.aboutLink);
        await this.page.click(this.aboutLink);

    }

};