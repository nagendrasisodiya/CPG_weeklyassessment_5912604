import {Locator, Page} from "@playwright/test";

class CheckOut{
    page:Page
    data:any
    checkOutBtn1:Locator
    checkOutBTN2:Locator
    emailIF:Locator
    firstNameIF:Locator
    lastNameIF:Locator
    addressIF:Locator
    apartmentIF:Locator
    cityIF:Locator
    pinIF:Locator
    phoneIF:Locator
    cardNumberIF:Locator
    expiryDate:Locator
    securityCodeIF:Locator
    nameOnCard:Locator
    payBTN:Locator
    constructor(page:Page, data:any) {
        this.data=data
        this.page=page
        this.checkOutBtn1=page.locator('//a[@class="checkout"]')
        this.checkOutBTN2=page.locator('//div[@class="six columns omega actions"]/input[@id="checkout"]')
        this.emailIF=page.locator('//input[@id="email"]')
        this.firstNameIF=page.locator('//input[@placeholder="First name (optional)"]')
        this.lastNameIF=page.locator('//input[@placeholder="Last name"]')
        this.addressIF=page.locator('//input[@placeholder="Address"]')
        this.apartmentIF=page.locator('//input[@placeholder="Address"]')
        this.cityIF=page.locator('//input[@placeholder="City"]')
        this.pinIF=page.locator('//input[@placeholder="PIN code"]')
        this.phoneIF=page.locator('(//input[@name="phone"])[1]')
        this.cardNumberIF=this.page
            .frameLocator('iframe[name*="card-fields-number"]')
            .getByPlaceholder("Card number")
        this.expiryDate=this.page.frameLocator('iframe[name*="card-fields-expiry"]')
            .getByPlaceholder("Expiration date (MM / YY)")
        this.securityCodeIF=this.page.frameLocator('iframe[name*="card-fields-verification_value"]')
            .getByPlaceholder("Security code")
        this.nameOnCard=this.page
            .frameLocator('iframe[name*="card-fields-name"]')
            .locator('//input[@id="name"]')
        this.payBTN=page.locator('//button[@id="checkout-pay-button"]')
    }

    async shop(){
        await this.checkOutBtn1.click()
        await this.checkOutBTN2.click()
        await this.emailIF.fill(this.data.email)
        await this.firstNameIF.fill(this.data.firstName)
        await this.lastNameIF.fill(this.data.lastName)
        await this.addressIF.fill(this.data.address)
        await this.apartmentIF.fill(this.data.apartment)
        await this.cityIF.fill(this.data.city)
        await this.pinIF.fill(this.data.pin)
        await this.phoneIF.fill(this.data.phone)

        await this.cardNumberIF.waitFor({state: 'attached', timeout: 10000})
        await this.cardNumberIF.fill(this.data.cardDetails.cardNumber)

        await this.expiryDate.waitFor({state: 'attached', timeout: 10000})
        await this.expiryDate.fill(this.data.cardDetails.expireDate)

        await this.securityCodeIF.waitFor({state: 'attached', timeout: 10000})
        await this.securityCodeIF.fill(this.data.cardDetails.securityCode)

        await this.nameOnCard.waitFor({state: 'attached', timeout: 10000})
        await this.nameOnCard.fill(this.data.cardDetails.cardName)

        await this.payBTN.click()
    }

}
export default CheckOut