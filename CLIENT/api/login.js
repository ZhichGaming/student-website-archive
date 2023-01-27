import httpProxy from "http-proxy";
import FormData from "form-data";

const proxy = httpProxy.createProxyServer({});

export default function handler(req, res) {
  let form = new FormData();
  form.append("_Fields", "GKfUxiJY9eL6Lgw19Ck6FDm7Y0/YzI2NRYHLQ86DaVe5c1HphAvntNdDDuRQSRQEzp+SHc/RWHhLdRHrH40G2zWtZh3USNSCejNryUeDmmgaKTbZnJspNyWQGfpB8cV+Ed085A")
  form.append("_NoSeqWeb", "GKfUxvmW7RTHuT0EqOUjjRiS0iOvZ2NAoTgdHW+VaWhOOstziX8jYd8UWCPHgyJtT0l1s/xqR9VFRzpTkrxgP28NMPI")
  form.append("btnConnecter.x", 0);
  form.append("btnConnecter.y", 0);
  for (let x in req.body) {
    form.append(x, req.body[x]);
  }
  let newBody = ""
  const streams = form._streams
  for (let i = 0; i < streams.length/3; i++) {
    newBody += streams[3*i] + streams[(3*i)+1] + "\r\n";
  }
  newBody += form.getBoundary() + "--" + "\r\n" + "";

  req.headers = req.headers || {}
  req.headers["content-type"] = `multipart/form-data ; boundary=${form.getBoundary()}`;

  fetch("/api/sendlogin", {
    cache: "no-cache",
    method: "post",
    body: form,
    headers: req.headers,
  })
    .then(response => {
      res.send(response)
    })
}