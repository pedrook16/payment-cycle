const express = require('express')
const port = process.env.PORT || 5000
const serve = express()


serve.use(express.urlencoded({ extended: true }))
serve.use(express.json())

serve.listen(port)

module.exports = serve