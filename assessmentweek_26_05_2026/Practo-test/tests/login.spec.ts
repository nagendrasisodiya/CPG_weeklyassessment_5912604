import {test} from "@playwright/test";
import loginPage from "../Page Object Model(POM)/login.page";
import LoginPage from "../Page Object Model(POM)/login.page";
// @ts-ignore
import fs from "node:fs";
import path = require("node:path");

let json_data=fs.readFileSync(path.join(__dirname, '../Data Files/regUserData.json'))
// @ts-ignore
let data = JSON.parse(json_data)
test('login', async ({page}) => {
    await page.goto('https://www.practo.com/')
    let loginPageObj:LoginPage=new LoginPage(page, data)
    await loginPageObj.login()
})