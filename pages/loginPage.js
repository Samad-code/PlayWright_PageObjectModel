import{test,expect} from '@playwright/test';

export class LoginPage{

    constructor(page){
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
        
    }
    /*    this.page = page
        this.username= page.getByLabel('Username')
        this.password = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })    }
    */

    async gotologinPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username, password){
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.click(this.loginButton);
    }
    


};