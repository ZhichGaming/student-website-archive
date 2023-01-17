import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

export default function middleware(req, res) {
  cors(req, res, (result) => {
    if (result instanceof Error) {
      return
    }

    handler(req, res)
  })
}

function handler(req, res) {
  fetch("https://portailc.jdlm.qc.ca/pednet/login.asp")
    .then(response => {
      res.status(200).json({ response, test: "true"})
    })
}