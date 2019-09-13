const express = require('express')
const cors = require('cors')
const queryParse = require('express-query-int')
const port = process.env.PORT || 5000

const serve = express()
serve.use(cors())
serve.use(queryParse())


serve.use(express.urlencoded({ extended: true }))
serve.use(express.json())

serve.listen(port)

module.exports = serve