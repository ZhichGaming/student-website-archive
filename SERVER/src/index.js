const createPage = require("./createPage.js");
const puppeteer = require("puppeteer");

const port = process.env.PORT ?? 8000;
const io = require("socket.io")(port, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", async (socket) => {
  if (!socket.handshake.headers.origin) return;
  const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
  const page = await createPage(browser, "https://portailc.jdlm.qc.ca/pednet/login.asp");

  socket.on("login", async ({ username, password }) => {
    await page.type("#txtCodeUsager", username);
    await page.type("#txtMotDePasse", password);
    await page.click("#btnConnecter");
    await page.$("body#logbody");
  });

  socket.on("disconnect", () => {
    browser.close();
  });
});

