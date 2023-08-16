// Inicialido el enrutador de express
const { Router } = require('express')
const tiposCombosRouter = Router()
const { setTipoCombo, getTiposCombos } = require("../handlers/tipoCombosHandler")


// metodos CRUD

tiposCombosRouter.post('/', setTipoCombo)
tiposCombosRouter.get('/', getTiposCombos)

module.exports = tiposCombosRouter