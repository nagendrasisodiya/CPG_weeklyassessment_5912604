import {test} from "@playwright/test"

test("amazon-task", async({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let price=await page.locator('//span[@class="a-price-whole"]').first().innerText()
    let name=await page.locator('(//span[@class="a-truncate-cut"])[2]').innerText()
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/sc-${time}.png`})
    console.log(price);
    console.log(name);
})