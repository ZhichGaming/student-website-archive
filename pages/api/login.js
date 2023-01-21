import httpProxy from "http-proxy";
import FormData from "form-data";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    // bodyParser: false,
  },
};



export default function handler(req, res) {
  console.log(req.body);

  // let form = new FormData();
  // form.append("_Fields", "GKfUxiJY9eL6Lgw19Ck6FDm7Y0/YzI2NRYHLQ86DaVe5c1HphAvntNdDDuRQSRQEzp+SHc/RWHhLdRHrH40G2zWtZh3USNSCejNryUeDmmgaKTbZnJspNyWQGfpB8cV+Ed085A")
  // form.append("_NoSeqWeb", "GKfUxvmW7RTHuT0EqOUjjRiS0iOvZ2NAoTgdHW+VaWhOOstziX8jYd8UWCPHgyJtT0l1s/xqR9VFRzpTkrxgP28NMPI")
  // form.append("btnConnecter.x", 0)
  // form.append("btnConnecter.y", 0)
  // for (let x in req.body) {
  //   form.append(x, req.body[x])
  // }
  // req.body = form

  proxy.on('proxyRes', (proxyRes, req, res) => {
    var body = [];
    proxyRes.on('data', (chunk) => {
      body.push(chunk);
    });
    proxyRes.on('end', () => {
      body = Buffer.concat(body).toString();
      let re = body.match("Object moved")
      if (re && re.length > 0) {
        re = body.match(/"(.*?)"/g)[0].match(/[^\\"]+/)[0]
        res.status(200).json({link: re})
      }
      res.status(403).send("Authentification failed");
    });
    proxyRes.on("error", (err) => {
      res.end(`${err}`)
    })
  });

  proxy.web(req, res, {
    target: "https://portailc.jdlm.qc.ca/pednet/login.asp",
    selfHandleResponse : true,
    changeOrigin: true,
  });
}