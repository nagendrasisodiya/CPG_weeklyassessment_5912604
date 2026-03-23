import {expect, Locator, Page} from "@playwright/test";

class SocialMedia{
    page:Page
    homeBTN:Locator
    instaTAG:Locator
    facebookTag:Locator

    constructor(page:Page) {
        this.page=page
        this.instaTAG=page.locator('//a[@class="instagram "]')
        this.homeBTN=page.locator('(//a[.="Home"])[1]')
        this.facebookTag=page.locator('//a[@class="facebook "]')

    }
    async verifySocialMedia(){
        await this.homeBTN.click()
        const [instaPage]=await Promise.all([
            this.page.waitForEvent("popup"),
            this.instaTAG.click()
        ])
        let insta:SocialMedia=new SocialMedia(instaPage)
        await insta.page.waitForLoadState('networkidle');
        await expect(insta.page).toHaveTitle('Shopify (@shopify) • Instagram photos and videos', { timeout: 10000 });
        let time=new Date().getTime()
        await insta.page.waitForTimeout(5000)
        await insta.page.screenshot({path:`screenshot/shopify-insta-page-${time}.png`})
        await insta.page.goBack()
        const [facebookPage]=await Promise.all([
            this.page.waitForEvent("popup"),
            this.facebookTag.click()
        ])
        let facebook=new SocialMedia(facebookPage)
        await facebook.page.waitForLoadState('networkidle');
        await expect(facebook.page).toHaveTitle('Shopify | Facebook', { timeout: 10000 });
        time=new Date().getTime()
        await facebook.page.waitForTimeout(5000)
        await facebook.page.screenshot({path:`screenshot/shopify-facebook-page-${time}.png`})
    }
}

export default SocialMedia