const puppeteer = require("puppeteer");
const createPage = require("./createPage.js");

async function main() {
  const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
  const page = await createPage(browser, "https://portailc.jdlm.qc.ca/pednet/login.asp");

  page.type("#txtCodeUsager", "TESTTEST");
  page.type("#txtMotDePasse", "TESTTEST");
}
main();

