import {test} from "@playwright/test"

test("flipkart-task", async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator('//span[@class="b3wTlE"]').click()
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("phones")
    await page.locator('(//button[@class="XFwMiH"])[1]').click()
    await page.locator('(//div[@class="ybaCDx"])[1]').click()
    let price=await page.locator('(//div[@class="hZ3P6w DeU9vF"])[3]').innerText()
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/task2-sc-${time}.png`})
    console.log(price);
})