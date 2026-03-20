import { test , expect} from '@playwright/test'
import * as fs from "node:fs";
import path = require("node:path");


let json_data=fs.readFileSync(path.join(__dirname, '../testing-data/task4.json'))
// @ts-ignore
let data = JSON.parse(json_data)

test("book store" , async({page})=>{
    await page.goto(data.url)
    await page.locator('//div[@class="element-list accordion-collapse collapse show"]/ul/li[@id="item-0"]').click()
    await page.locator('#newUser').click()
    await page.getByPlaceholder('First Name').fill(data.user.firstName)
    await page.getByPlaceholder('Last Name').fill(data.user.lastName)
    await page.getByPlaceholder('UserName').fill(data.user.username)
    await page.getByPlaceholder('Password').fill(data.user.password)
    await page.locator('#register').click()
    await page.locator('#gotologin').click()
    await page.getByPlaceholder('UserName').fill(data.user.username)
    await page.getByPlaceholder('Password').fill(data.user.password)
    await page.locator('#login').click()
    await page.locator('#gotoStore').click()
    await page.getByPlaceholder('Type to search').fill(data.book.title)
    let title = await page.locator('//span[@class="mr-2"]/a').innerText()
    expect(title).toContain("Learning JavaScript Design Patterns")
    await page.locator('//span[@class="mr-2"]/a').click()
    await page.getByRole('button', {name:"Add To Your Collection"}).click()
    page.once("dialog", async dialog => {
        console.log(dialog.message())
        await dialog.dismiss()
    })
    await page.locator('//div[@class="element-list accordion-collapse collapse show"]/ul/li[@id="item-3"]').click()
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/day19-task4-sc-${time}.png`})
    await page.getByRole('button' ,{name:"Logout"})

})