import { test , expect} from '@playwright/test'
import * as fs from "node:fs";
import path = require("node:path");



let json_data=fs.readFileSync(path.join(__dirname, '../testing-data/task1.json'))
// @ts-ignore
let products = JSON.parse(json_data);


test("Validate product details from search results", async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/")
    for(const item of products){
        await page.locator("#twotabsearchtextbox").fill(item.product);
        await page.keyboard.press("Enter");
        await page.waitForLoadState("domcontentloaded");

        const [productPage]=await Promise.all([
            page.waitForEvent("popup"),
            page.locator("//div[@class='puisg-col puisg-col-4-of-4 puisg-col-4-of-8 puisg-col-4-of-12 puisg-col-4-of-16 puisg-col-4-of-20 puisg-col-4-of-24 puis-list-col-left']").first().click()
        ])
        const title = await productPage.locator("#productTitle").first().textContent();
        const price = await productPage.locator("//span[@class='a-price aok-align-center reinventPricePriceToPayMargin priceToPay apex-pricetopay-value']/span/span[@class='a-price-whole']").textContent();
        const rating = await productPage.locator("//span[@class='reviewCountTextLinkedHistogram noUnderline']/span/a/span").first().textContent();
        console.log("Title:", title);
        console.log("Price:", price);
        console.log("Rating:", rating);
        await expect(title).not.toBeNull();
        await expect(price).not.toBeNull();
        await expect(rating).not.toBeNull();
        let time=new Date().getTime()
        await page.screenshot({path:`screenshot/day19-task1-sc-${time}.png`})
        await productPage.close();
        await page.goBack();
    }
})