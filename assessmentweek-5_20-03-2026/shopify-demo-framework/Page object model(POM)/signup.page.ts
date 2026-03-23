import {expect, Page} from "@playwright/test";

class Signup{
    page:Page
    data:any
    signupBTN:any
    firstNameIF:any
    lastNameIF:any
    emailAddressIF:any
    passwordIF:any
    submitBTN:any
    constructor(page:Page, data:any) {
        this.page=page
        this.data=data
        this.signupBTN=page.locator('//a[@id="customer_register_link" and .="Sign up"]')
        this.firstNameIF=page.locator('//input[@id="first_name"]')
        this.lastNameIF=page.locator('//input[@id="last_name"]')
        this.emailAddressIF=page.locator('//input[@id="email"]')
        this.passwordIF=page.locator('//input[@id="password"]')
        this.submitBTN=page.locator('//input[@value="Create"]')
    }

    async createAccount(){
        await this.page.goto(this.data.url)
        await expect(this.page).toHaveTitle('Sauce Demo');
        await this.signupBTN.click()
        await this.firstNameIF.fill(this.data.firstName)
        await this.lastNameIF.fill(this.data.lastName)
        await this.emailAddressIF.fill(this.data.emailAddress)
        await this.passwordIF.fill(this.data.password)
        await this.submitBTN.click()
    }
}

export default Signup