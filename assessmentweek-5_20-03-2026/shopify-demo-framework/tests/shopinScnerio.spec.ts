import {test} from "@playwright/test";
import Signup from "../Page object model(POM)/signup.page";
import path = require("node:path");
import * as fs from "node:fs";
import Login from "../Page object model(POM)/loging.page";
import AddToCart from "../Page object model(POM)/addToCart.page";
import CheckOut from "../Page object model(POM)/checkOut.page";

let json_data1=fs.readFileSync(path.join(__dirname, '../Utility-Data/signup.json'))
let json_data2=fs.readFileSync(path.join(__dirname, '../Utility-Data/checkoutdetail.json'))

// @ts-ignore
let user_data = JSON.parse(json_data1)
// @ts-ignore
let checkout_data=JSON.parse(json_data2)


test("create-account", async ({page})=>{
    let obj=new Signup(page, user_data)
    await obj.createAccount()
    let obj2=new Login(page)
    await obj2.login(user_data)
    let obj3=new AddToCart(page)
    await obj3.addProductToCart()
    let obj4=new CheckOut(page, checkout_data)
    await obj4.shop()
})