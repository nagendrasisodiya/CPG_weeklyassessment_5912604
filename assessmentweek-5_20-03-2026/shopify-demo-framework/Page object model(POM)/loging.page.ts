import {Page} from "@playwright/test";

class Login{
    page:Page
    loginBTN:any
    emailIF:any
    passwordIF:any
    signinBTN:any
    constructor(page:Page) {
        this.page=page
        this.loginBTN=page.locator('//a[@id="customer_login_link" and .="Log In"]')
        this.emailIF=page.locator('//input[@id="customer_email"]')
        this.passwordIF=page.locator('//input[@id="customer_password"]')
        this.signinBTN=page.locator('//input[@value="Sign In"]')
    }
    async login(data:any){
        await this.page.goto(data.url)
        await this.loginBTN.click()
        await this.emailIF.fill(data.emailAddress)
        await this.passwordIF.fill(data.password)
        await this.signinBTN.click()
    }
}

export default Login