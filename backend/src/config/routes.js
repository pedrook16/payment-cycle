const express = require('express')

module.exports = (serve) => {

    //Defini URL base para todas as rotas
    const router = express.Router()
    serve.use('/api', router)

    //Rotas de Ciclo de Pagamento
    const BillingCycle = require('../controller/BillingCycleController')
    BillingCycle.register(router, '/billingCycle')

}
