const createPage = require("./createPage.js");
const puppeteer = require("puppeteer");

const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

let page;

app.post("/login", async (req, res) => {
  if (!page) {
    const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
    page = await createPage(browser, "https://portailc.jdlm.qc.ca/pednet/login.asp");
  }

  const { username, password } = req.body;

  await page.type("#txtCodeUsager", username);
  await page.type("#txtMotDePasse", password);
  await page.click("#btnConnecter");

  let changed = await page.$(".logbody");
  if (changed != null) {
    return res.status(401).send("failed");
  }

  await page.waitForSelector("center");
  let t = await page.$eval("center", (el) => el.innerText);

  t = t.split("\n");
  const name = t.at(0);
  const id = t.at(-4).split(" ").at(-1);
  const group = t.at(-3).split(" ").at(-1);
  const locker = t.at(-2).split(" ").at(-1);
  const permcode = t.at(-1).split(" ").at(-1);

  t = { name, id, group, locker, permcode };

  res.status(200).json(t);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

