import {Locator, Page} from "@playwright/test";

class LabTestPage {
    page:Page
    labTestANCHOR:Locator
    selectaddress:Locator
    cbcTest:Locator
    buyNowBTN:Locator
    addToCart:Locator
    checkOutAnchor:Locator
    dobINPUT:Locator
    gender:Locator
    email:Locator
    continue:Locator
    //address locators
   continueBTN:Locator

    timeSlot:Locator

    pay:Locator
    constructor(page:Page) {
        this.page=page
        this.labTestANCHOR=page.locator('//a[@href="/tests" and @class="card-link"]')
        this.selectaddress=page.locator('//div[@class="u-d__inline city-selector__city u-marginb--std-half u-pointer" and .="Jaipur"]')
        this.cbcTest=page.locator('//div[@class="c-toptest__title u-font-bold" and .="Complete Blood Count"]')
        this.buyNowBTN=page.locator('//div[@class="c-qc__qc-button std" and .="Book Now"]')
        this.dobINPUT=page.locator('//input[@type="number"]')
        this.gender=page.locator('input[name="gender"][value="MALE"]');
        this.email=page.getByPlaceholder("you@practo.com")
        this.continue=page.locator('//input[@class="u-width--full u-margint--full .c-opaFields-button c-button c-button__button c-button--quad-rounded c-af__button "]')
        this.continueBTN=page.getByRole('button', { name: 'Continue' })
        this.timeSlot=page.locator('//div[@class="c-slot__tp u-pointer" and .="06:00 AM - 06:30 AM"]')
        this.pay=page.locator('//div[@class="c-button c-button__button u-width--full c-button--bigger c-button--quad-rounded o-flex o-flex__justify--center o-flex__align--center"]')
    }

    async booklabTest(){
        await this.labTestANCHOR.click()
        await this.selectaddress.click()
        await this.cbcTest.click()
        await this.buyNowBTN.click()
        await this.dobINPUT.fill("24")
        // await this.gender.click()
        await this.email.fill("user@gmail.com")
        await this.continue.click()
        await this.continueBTN.click()
        await this.timeSlot.click()
        await this.pay.click()
        
    }
}
export default LabTestPage
