import {test} from "@playwright/test"

test("qspider-demo-task", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('//input[@id="name"]').fill("user1")
    await page.locator('//input[@id="email"]').fill('user1@gmail.com')
    await page.locator('//input[@id="password"]').fill('user1passs')
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//input[@id="email"]').fill('user1@gmail.com')
    await page.locator('//input[@id="password"]').fill('user1passs')
    await page.locator('//button[@type="submit"]').click()
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/task3-sc-${time}.png`})
})