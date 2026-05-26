import {test} from "@playwright/test";
import Reg from "../Page Object Model(POM)/register.page";
// @ts-ignore
import fs from "node:fs";
import path = require("node:path");


let json_data=fs.readFileSync(path.join(__dirname, '../Data Files/regUserData.json'))
// @ts-ignore
let data = JSON.parse(json_data)
test('user registration', async ({page}) => {
    await page.goto('https://www.practo.com/')
    let regObj:Reg=new Reg(page, data)
    await regObj.register()
})