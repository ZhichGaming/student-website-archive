import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer({});

export default function handler(req, res) {
  proxy.on('proxyRes', (proxyRes, req, res) => {
    var body = [];
    proxyRes.on('data', (chunk) => {
      body.push(chunk);
    });
    proxyRes.on('end', () => {
      body = Buffer.concat(body).toString();
      res.status(200).send(body)
      let re = body.match("Object moved")
      if (re && re.length > 0) {
        re = body.match(/"(.*?)"/g)[0].match(/[^\\"]+/)[0]
        res.status(200).json({link: "re"})
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