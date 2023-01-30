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

  req.body = form.getBuffer();

  req.headers = req.headers || {}
  req.headers = {...req.headers, ...form.getHeaders()}

  next()
}