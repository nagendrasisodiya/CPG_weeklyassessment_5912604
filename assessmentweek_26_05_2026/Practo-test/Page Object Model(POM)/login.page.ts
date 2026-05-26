import {Locator, Page} from "@playwright/test";

class LoginPage {
    page:Page
    data:any
    signUpPageBTN:Locator
    mobileNumberINPUT:Locator
    password:Locator
    loginBTN:Locator

    constructor(page:Page, data:any) {
        this.page=page
        this.data=data
        this.signUpPageBTN=page.locator('//a[@class="btn-border nav-login nav-interact "]')
        this.mobileNumberINPUT=page.getByPlaceholder("Mobile Number / Email ID")
        this.password=page.getByPlaceholder("Password")
        this.loginBTN=page.getByRole('button', { name: 'Login' })
    }
    async login(){
        await this.signUpPageBTN.click()
        await this.mobileNumberINPUT.fill(this.data.mobileNumber)
        await this.password.fill(this.data.password)
        await this.loginBTN.click()
    }
}

export default LoginPage