const createPage = require("./createPage.js");
const puppeteer = require("puppeteer");

const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000

let page;


app.get("/login", async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
  page = await createPage(browser, "https://portailc.jdlm.qc.ca/pednet/login.asp");

  await page.type("#txtCodeUsager", username);
  await page.type("#txtMotDePasse", password);
  await page.click("#btnConnecter");
  await page.waitForSelector("center");
  await page.$$eval("center", (items) => {
    console.log(items);
  });
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})