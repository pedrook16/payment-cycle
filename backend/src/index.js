const serve = require('../src/config/serve')
require('../src/config/database')
require('./config/routes')(serve)