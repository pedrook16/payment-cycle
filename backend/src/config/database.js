const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb://localhost:27017/mymoney", {useNewUrlParser: true, useUnifiedTopology: true})