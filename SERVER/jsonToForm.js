const FormData = require("form-data")

module.exports.jsonToForm =  (req, res, next) => {
  if (req.method !== "POST") next();

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

  form.getLength((err, len) => {
    if (err) {
      this._error(err);
      return;
    }

    req.headers["content-length"] = len
    req.body = form.getBuffer().toString("base64");

    req.headers = {...req.headers, ...form.getHeaders()}
    next()
  })
}