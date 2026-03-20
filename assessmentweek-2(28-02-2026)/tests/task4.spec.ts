import {test} from "@playwright/test"

test("qspider-demo-task", async({page})=>{
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
    await page.locator('//a[@class="Button-styles__Button-sc-37ebb3b-0 eEVWbV cta cta-button"]').click()
    let silver=await page.locator('(//div[@class="Medal-styles__Wrapper-sc-645148e1-0 fEoULw"])[6]').innerText()
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/task4-sc-${time}.png`})
    console.log(silver);
})