const productsRouter = require('./productsRouter')
const categoryRouter = require('./categoryRouter')
const combosRouter = require('./combosRouter')
const tiposCombosRouter = require('./tiposCombosRouter')
// const usersRouter = require('./usersRouter')
// const adminRouter = require('./adminRouter')

// Inicialido el enrutador de express
const { Router } = require('express')
const mainRouter = Router()


// Sub Rutas
mainRouter.use('/productos', productsRouter)
mainRouter.use('/categorias', categoryRouter)
mainRouter.use('/combos', combosRouter)
mainRouter.use('/tiposcombos', tiposCombosRouter)

module.exports = mainRouter
