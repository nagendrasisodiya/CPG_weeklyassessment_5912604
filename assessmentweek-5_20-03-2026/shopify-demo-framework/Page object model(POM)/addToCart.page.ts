import {Locator, Page} from "@playwright/test";

class AddToCart{
    page:Page
    homeBTN:Locator
    searchFiled:Locator
    productIMG:Locator
    addBTN:Locator
    cartBTN:Locator
    checkOutBTN1:Locator
    constructor(page:Page) {
        this.page=page
        this.homeBTN=page.locator('(//a[.="Home"])[1]')
        this.searchFiled=page.locator('//input[@id="search-field"]')
        this.productIMG=page.locator('//img[@class="product"]')
        this.addBTN=page.locator('//input[@value="Add to Cart"]')
        this.cartBTN=page.locator('//a[@class="toggle-drawer cart desktop "]')
        this.checkOutBTN1=page.locator('//input[@value="Check Out"]')
    }
    async addProductToCart(){
        await this.homeBTN.click()
        await this.searchFiled.fill('top')
        await this.page.keyboard.press("Enter")
        await this.productIMG.click()
        await this.addBTN.click()
        await this.cartBTN.click()
        await this.page.waitForTimeout(3000)
    }
}
export default AddToCart