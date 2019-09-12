const express = require('express')
const port = 5000 || process.env.PORT
const serve = express()


serve.use(express.urlencoded({ extended: true }))
serve.use(express.json())

serve.listen(port, () => {
    console.log(`Porta usada ${port}`)
})

module.exports = serve