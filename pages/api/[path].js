import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {
  const data = await getData(req, res)
  JSON.stringify(data).split(" ")
  res.status(200).send(data)
}

async function getData(req, res) {
  proxy.web(req, res, { target: "https://portailc.jdlm.qc.ca/pednet/login.asp", changeOrigin: true })
}