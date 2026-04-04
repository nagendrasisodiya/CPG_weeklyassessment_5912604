import {expect, test} from "@playwright/test";
// @ts-ignore
import fs from "node:fs";
import path = require("node:path");


const filePath = path.join(__dirname, '../Data-Files/globalVariables.json');
const bookingDataFilePath=path.join(__dirname, '../Data-Files/bookingData.json');
let json_data=fs.readFileSync(filePath)
let json_data2=fs.readFileSync(bookingDataFilePath)
let global_data=JSON.parse(json_data)
let booking_data=JSON.parse(json_data2)

test("get-token", async ({request})=>{
    let response=await request.post("https://restful-booker.herokuapp.com/auth",{
        data:{
            username:"admin",
            password:"password123"
        },
        ignoreHTTPSErrors:true,
    })
    expect(response.status()).toBe(200)
    let body=await response.json()
    let jwtToken=await body.token
    console.log(body)
    console.log(jwtToken)
    global_data.token=jwtToken
    fs.writeFileSync(filePath, JSON.stringify(global_data, null, 2))
})


test("create-booking", async ({request})=>{
    let response=await request.post("https://restful-booker.herokuapp.com/booking", {
        data:{
            firstname:booking_data.firstname,
            lastname:booking_data.lastname,
            totalprice:booking_data.totalprice,
            depositpaid:booking_data.depositpaid,
            bookingdates:{
                checkin:booking_data.bookingdates.checkin,
                checkout:booking_data.bookingdates.checkout
            },
            additionalneeds:booking_data.additionalneeds
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${global_data.token}`
        }
    })
    expect(response.status()).toBe(200)
    let body=await response.json()
    console.log(body)
})

test("get_booking", async ({request})=>{
    let booking_response=await request.get("https://restful-booker.herokuapp.com/booking", {
        params:{
            firstname:"Jim",
            lastname:"Brown",
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${global_data.token}`
        }
    })
    expect(booking_response.status()).toBe(200)
    let body=await booking_response.json()
    let bookingId=await body[0]?.bookingid
    console.log(body)
    console.log(bookingId)
    global_data.booking_id=bookingId
    fs.writeFileSync(filePath,JSON.stringify(global_data, null, 2))
})

test("get-booking-byId", async ({request})=>{
    let response=await request.get(`https://restful-booker.herokuapp.com/booking/${global_data.booking_id}`, {
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${global_data.token}`
        }
    })
    expect(response.status()).toBe(200)
    let body=await response.json()
    console.log(body)
})

test("update-booking", async ({ request }) => {
    let update_response = await request.put(
        `https://restful-booker.herokuapp.com/booking/${global_data.booking_id}`,
        {
            data: {
                firstname: "ram",
                lastname: "gen",
                totalprice: 134,
                depositpaid: true,
                bookingdates: {
                    checkin: "2026-02-04",
                    checkout: "2026-06-04"
                },
                additionalneeds: "Breakfast"
            },
            headers: {
                Cookie: `token=${global_data.token}`
            },
            ignoreHTTPSErrors: true
        }
    );

    expect(update_response.status()).toBe(200);
    let body = await update_response.json();
    console.log(body);
});


test("delete_booking" , async({request})=>{
    const delete_response = await request.delete(`https://restful-booker.herokuapp.com/booking/${global_data.booking_id}` , {
        headers: {
            Cookie: `token=${global_data.token}`
},
    ignoreHTTPSErrors:true
})

    // if response 405 already deleted booking
    expect(delete_response.status()).toBe(201);
    let body=delete_response.text()
    console.log(body)
});
