export default function filter(req, res, next) {
  if (req.headers["content-type"] != "application/json") next();

  
}