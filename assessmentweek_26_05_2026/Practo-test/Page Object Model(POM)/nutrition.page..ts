import {Locator, Page} from "@playwright/test";

class NutritionPage{
    page:Page
    nutritionPage:Locator
    //this one leads to new page event
    nutritionProfile:Locator
    bookAppointmentBTN:Locator
    timeSlot:Locator
    constructor(page:Page) {
        this.page=page
        this.nutritionPage=page.locator('(//a[@class="card-link"])[13]')
        this.nutritionProfile=page.locator('//div[@class="listing-doctor-card"]').nth(0)
        this.bookAppointmentBTN=page.locator('//button[@class="u-t-capitalize u-bold u-round-corner--large c-btn--dark-medium"]')
        this.timeSlot=page.locator('//div[@class="c-day-session__slot "]').nth(3)
    }
    async bookAppointment(){
        await this.nutritionPage.click()
        
        // Handle new page event when clicking nutritionProfile
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.nutritionProfile.click()
        ])
        await newPage.waitForLoadState()
        let newPageObj=new NutritionPage(newPage)
        await newPageObj.bookAppointmentBTN.click()
        await newPageObj.timeSlot.click()
    }
}
export default NutritionPage