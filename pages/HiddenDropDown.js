
import {test, expect} from '@playwright/test';

export class HiddenDropDown {


constructor(page){
    this.page = page;
    this.userName= 'input[name="username"]', 
    this.password = 'input[name="password"]'   

 this.pim = page.getByRole('link', { name: 'PIM' })

}

async website(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

}

async login(username, password){
    await this.page.fill(this.userName, username);
    await this.page.fill(this.password, password);
    await this.page.click('button[type="submit"]');
    await this.pim.click();
}

async clickPIM(){
await this.pim.click();
await this.page.waitForTimeout(2000);
}
}