import {Locator, Page} from "@playwright/test";
class Reg{
    page:Page
    data:any
    signUpPageBTN:Locator
    registerBTN:Locator
    nameINPUT:Locator
    mobileNumberINPUT:Locator
    createPasswordINPUT:Locator
    submitBTN:Locator
    otpINPUT:Locator
    loginBTN:Locator

    constructor(page:Page, data:any) {
        this.page=page
        this.data=data
        this.signUpPageBTN=page.locator('//a[@class="btn-border nav-login nav-interact "]')
        this.registerBTN=page.locator('//a[@id="registerLink"]')
        this.nameINPUT=page.getByPlaceholder("Full Name")
        this.mobileNumberINPUT=page.getByPlaceholder("Mobile Number")
        this.createPasswordINPUT=page.getByPlaceholder("Password")
        this.submitBTN=page.getByRole('button', { name: 'Send OTP' })
        // this.otpINPUT=page.getByPlaceholder("Please enter the 6 digit OTP here to verify")
        this.loginBTN=page.getByRole('button', { name: 'patientregisterOTP' })
    }

    async register(){
        await this.signUpPageBTN.click()
        await this.registerBTN.click()
        await this.nameINPUT.fill(this.data.fullName)
        await this.mobileNumberINPUT.fill(this.data.mobileNumber)
        await this.createPasswordINPUT.fill(this.data.password)
        await this.submitBTN.click()
        // await this.otpINPUT.fill()
        await this.loginBTN.click()
    }
}
export default Reg