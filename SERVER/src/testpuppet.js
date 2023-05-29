const puppeteer = require("puppeteer");
const createPage = require("./createPage.js");

async function main() {
  const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
  const page = await createPage(browser, "https://portailc.jdlm.qc.ca/pednet/login.asp");

  await page.type("#txtCodeUsager", "TESTTEST");
  await page.type("#txtMotDePasse", "TESTTEST");
}
main();

