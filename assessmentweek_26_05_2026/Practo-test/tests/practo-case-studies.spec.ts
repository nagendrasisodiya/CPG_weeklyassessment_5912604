import {test} from "@playwright/test";
// @ts-ignore
import fs from "node:fs";
import path = require("node:path");
import LoginPage from "../Page Object Model(POM)/login.page";
import ConsultPage from "../Page Object Model(POM)/consult.page";
import PractoCaseStudies from "../Page Object Model(POM)/practoCaseStudies.page";


let json_data=fs.readFileSync(path.join(__dirname, '../Data Files/regUserData.json'))
// @ts-ignore
let data = JSON.parse(json_data)
test("case study", async ({page}) => {
    await page.goto('https://www.practo.com/')
    let login:LoginPage=new LoginPage(page, data)
    let caseStudy:PractoCaseStudies=new PractoCaseStudies(page)
    await login.login()
    await caseStudy.caseStudies()
})