import { test } from '@playwright/test';


test("CricBuzz-task-3", async({page})=>{
    await page.goto("https://www.cricbuzz.com/")
    await page.getByText("MATCHES").first().click();
    await page.locator("//a[@href='/live-cricket-scores/148720/mly-vs-bhr-1st-t20i-bahrain-tour-of-malaysia-2026']").nth(1).click();
    await page.getByText("Scorecard").click();
    const score= await page.locator("(//div[@class='grid scorecard-bat-grid p-2 border-b border-solid border-cbBorderGrey tb:scorecard-bat-grid-web wb:text-sm wb:scorecard-bat-grid-web'])[4]/child::div[2]").textContent();
    console.log(score);
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/day13-task3-sc-${time}.png`})
})