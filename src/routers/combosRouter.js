// Inicialido el enrutador de express
const { Router } = require('express')
const comboRouter = Router()
const { getAllCombos, setCombos, getAllCombosXTipo } = require("../handlers/combosHandlers")


// metodos CRUD
comboRouter.get('/', getAllCombos)
comboRouter.post('/', setCombos)
comboRouter.get('/:tipo', getAllCombosXTipo)


module.exports = comboRouter