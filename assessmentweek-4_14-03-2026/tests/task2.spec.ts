import {test} from "@playwright/test";
import * as fs from "node:fs";
import path = require("node:path");

let json_data=fs.readFileSync(path.join(__dirname, '../testing-data/task2_data.json'))
// @ts-ignore
let data=JSON.parse(json_data)

test("task-2", async ({page})=>{
    for(let d of data){
        await page.goto("https://demoqa.com/automation-practice-form")
        await page.getByPlaceholder("First Name").fill(d.firstName)
        await page.getByPlaceholder("Last Name").fill(d.lastName)
        await page.getByPlaceholder("name@example.com").fill(d.email)
        await page.getByPlaceholder("Mobile Number").fill(d.phoneNumber)
        await page.locator(`//label[text()='${d.gender}']`).click()
        await page.locator('#dateOfBirthInput').fill(d.dob);
        await page.locator('body').click();
        await page.getByLabel(`${d.hobbies}`).click()
        await page.locator('#uploadPicture').setInputFiles(
            "D:/WrokSpace/Capg-Assessment/Playwright/testing-data/task2.png"
        )
        await page.getByPlaceholder("Current Address").fill(d.address)
        await page.locator('(//div[@class="css-1wy0on6"])[1]').click()
        await page.locator('#react-select-3-input').click();
        await page.getByRole('option', { name: 'NCR' }).click();
        await page.locator("#react-select-4-input").click()
        await page.getByRole('option', { name: 'Delhi' }).click();
        await page.locator('//button[@id="submit"]').click()
        await page.waitForTimeout(3000)
        let time=new Date().getTime()
        await page.screenshot({path:`screenshot/day19-task2-sc-${time}.png`})
    }
})

