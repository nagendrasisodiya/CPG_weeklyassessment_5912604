import {Locator, Page} from "@playwright/test";

class ConsultPage {
    page:Page
    //this locator leads to new page need to handle new page event
    consultANCHOR:Locator
    consultNowANCHOR:Locator
    symptoms:Locator
    continueBTN:Locator
    continueToPaymentBTN:Locator
    constructor(page:Page) {
        this.page=page
        this.consultANCHOR=page.locator('//a[@href="/consult" and @class="card-link"]')
        this.consultNowANCHOR=page.getByRole('link', { name: 'Consult Now' }).nth(0)
        this.symptoms=page.locator('//textarea[@id="detailed-description"]')
        this.continueBTN=page.getByRole('button', { name: 'Continue' } )
        this.continueToPaymentBTN=page.getByRole('button', { name: ' Continue to payment' } )
    }
    async consult(){
        await this.consultANCHOR.click()
        await this.consultNowANCHOR.click()
        await this.symptoms.fill("fever")
        await this.continueBTN.click()
        await this.continueToPaymentBTN.click()
        await this.page.waitForTimeout(5000)
    }
}
export default ConsultPage