import {Locator, Page} from "@playwright/test";

class PractoCaseStudies{
    page:Page
    helpAndSecurityDRPD:Locator
    //help page tag
    help:Locator
    primaryCaseStudies:Locator
    caseStudy:Locator
    constructor(page:Page) {
        this.page=page
        this.helpAndSecurityDRPD=page.locator('(//span[@class="u-d-item up-triangle"])[3]')
        this.help=page.locator('//span[@class="u-d-item" and .="Help"]')
        this.primaryCaseStudies=page.locator('//div[@class="column col-half 4"]//ul[@class="sub-categories"][1]//a')
        this.caseStudy=page.locator('//h2[@class="entry-title"]').nth(0)
    }
    async caseStudies(){
        await this.helpAndSecurityDRPD.click()
        await this.help.click()
        await this.primaryCaseStudies.click()
        await this.caseStudy.click()
    }
}

export default PractoCaseStudies