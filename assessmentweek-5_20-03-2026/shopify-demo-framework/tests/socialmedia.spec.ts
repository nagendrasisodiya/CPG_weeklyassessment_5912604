import {test} from "@playwright/test";
import Signup from "../Page object model(POM)/signup.page";
import path = require("node:path");
import * as fs from "node:fs";
import Login from "../Page object model(POM)/loging.page";
import AddToCart from "../Page object model(POM)/addToCart.page";
import SocialMedia from "../Page object model(POM)/socialmedia_handel.page";

let json_data=fs.readFileSync(path.join(__dirname, '../Utility-Data/signup.json'))
// @ts-ignore
let data = JSON.parse(json_data)

test("create-account", async ({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    let obj1=new Signup(page, data)
    await obj1.createAccount()
    let obj2=new Login(page)
    await obj2.login(data)
    let obj3:SocialMedia=new SocialMedia(page)
    await obj3.verifySocialMedia()
})