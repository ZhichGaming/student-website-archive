const FormData = require("form-data");
const Captcha = require("2captcha")

module.exports = function filter(req, res, next) {
  if (req.headers["content-type"] != "application/json") return next();

  let form = new FormData();
  form.append("_Fields", "GKfUxiJY9eL6Lgw19Ck6FDm7Y0/YzI2NRYHLQ86DaVe5c1HphAvntNdDDuRQSRQEzp+SHc/RWHhLdRHrH40G2zWtZh3USNSCejNryUeDmmgaKTbZnJspNyWQGfpB8cV+Ed085A")
  form.append("_NoSeqWeb", "GKfUxvmW7RTHuT0EqOUjjRiS0iOvZ2NAoTgdHW+VaWhOOstziX8jYd8UWCPHgyJtT0l1s/xqR9VFRzpTkrxgP28NMPI")
  form.append("g-recaptcha-response", "03AFY_a8XTs7tsa1n6mRcQISediT6Nm1TRn4vkvI2dBoB6kW5G902wmmRMgC5ryHsDbtGJ212iwaEjDLpjVMhHzdTmAHTPEfZfWjVu_lyo_LAN8ypa2roReSxCbmmbCXHhybq6wn-F8E3oP-dKNCZCC6aq5Eipk69T7xCFhRhJ4sZ6H2y5HE0yyn3lsTAC2qBN3aGHHLAn42QacB7mEYCkb8nseYtir52Ke44mA19qRc1SrhPxnfAlQjYgkyWSAFG6-Y6aNhL2gLODiMHVBpYTmx-ci1ZZDv4H9YQWfVqIv2cxvv7dOfY4fy_ljDWjcCalcd2cF2fuw5L-sL57nvzgN2LBeglDEbO8haBB8M0BhDqp2kY490W23eZjHqy_qckNpL_55qo1hZ92cV-F8Mi3Dp-tQHnF0mRox2dfOl9XRqyJRcgYSOdyjdM1X6_S7VRti4i45Yq4s-Pu1V9mGstkBBazYS1pfQrKviGxh1DYGpSiK_m_9Q4t8ElU7K6ub0lUoppKIcZ6Mw_0m2qP5bA50U9NDvugZ0cx5g")
  form.append("btnConnecter.x", 0);
  form.append("btnConnecter.y", 0);
  for (let x in req.body) {
    form.append(x, req.body[x]);
  }

  form.submit("http://localhost:3001/login", (err, response) => {
    if (err) throw err;

    let body = [];
    response.on('data', function (chunk) {
      body.push(chunk);
    });
    response.on('end', function () {
      body = Buffer.concat(body).toString();
      res.send(body)
    });
  })

  solver.recaptcha("6LdQsT8kAAAAALwguzJrXH0L75cg7AzQV3eEg9P-", "https://portailc.jdlm.qc.ca/pednet/login.asp")
  .then((res) => {
  console.log(res)
  })
}

// 6LdQsT8kAAAAALwguzJrXH0L75cg7AzQV3eEg9P-