import {test} from "@playwright/test";
import Signup from "../Page object model(POM)/signup.page";
import path = require("node:path");
import * as fs from "node:fs";
import Login from "../Page object model(POM)/loging.page";
import AddToCart from "../Page object model(POM)/addToCart.page";

let json_data=fs.readFileSync(path.join(__dirname, '../Utility-Data/signup.json'))
// @ts-ignore
let data = JSON.parse(json_data)

test("login-account", async ({page})=>{
    let obj2=new Login(page)
    await obj2.login(data)
})