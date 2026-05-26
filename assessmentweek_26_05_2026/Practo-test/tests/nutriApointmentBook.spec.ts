import {test} from "@playwright/test";

// @ts-ignore
import fs from "node:fs";
import path = require("node:path");
import LoginPage from "../Page Object Model(POM)/login.page";
import NutritionPage from "../Page Object Model(POM)/nutrition.page.";
let json_data=fs.readFileSync(path.join(__dirname, '../Data Files/regUserData.json'))
// @ts-ignore
let data = JSON.parse(json_data)
test("nutrition appointment", async ({page})=>{
    await page.goto('https://www.practo.com/')
    let login:LoginPage=new LoginPage(page, data)
    await login.login()
    let nutriObj:NutritionPage=new NutritionPage(page)
    await nutriObj.bookAppointment()
})