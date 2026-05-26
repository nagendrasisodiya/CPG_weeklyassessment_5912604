import {Locator, Page} from "@playwright/test";

class HealthArticles{
    page:Page
    seeAllArticlesBTN:Locator
    article:Locator
    // to subscribe newsletter
    emailFiled:Locator
    subscribeToEmailBTN:Locator
    constructor(page:Page) {
        this.page=page
        this.seeAllArticlesBTN=page.getByRole('button', {name:'See all articles'})
        this.article=page.locator('//div[@class="fit-feed-post col-xs-12 col-sm-6 col-md-4"]').nth(2)
        this.emailFiled=page.getByRole('textbox', { name: 'Your Email Address' })
        this.subscribeToEmailBTN=page.locator('.email-subscription-submit').nth(1)
    }
    async exploreArticle(){
        await this.seeAllArticlesBTN.click()
        await this.article.click()
        await this.emailFiled.fill("user@gmail.com")
        await this.subscribeToEmailBTN.click()
    }
}
export default HealthArticles