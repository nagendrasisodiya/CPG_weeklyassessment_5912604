import {test} from "@playwright/test";

// @ts-ignore
import fs from "node:fs";
import path = require("node:path");
import LoginPage from "../Page Object Model(POM)/login.page";
import HealthArticles from "../Page Object Model(POM)/articles.page";
let json_data=fs.readFileSync(path.join(__dirname, '../Data Files/regUserData.json'))
// @ts-ignore
let data = JSON.parse(json_data)
test("subscribe to articles", async ({page})=>{
    await page.goto('https://www.practo.com/')
    let login:LoginPage=new LoginPage(page, data)
    let article:HealthArticles=new HealthArticles(page)
    await login.login()
    await article.exploreArticle()
})