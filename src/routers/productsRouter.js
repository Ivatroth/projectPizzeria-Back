// Inicialido el enrutador de express
const { Router } = require('express')
const productsRouter = Router()
const { getAllProductos, getProdXCat, setProductos, getProdXName } = require('../handlers/productsHandlers')


// metodos CRUD
productsRouter.get('/', getAllProductos)
productsRouter.post('/', setProductos)
productsRouter.get('/search/:name', getProdXName)
productsRouter.get('/:categoria', getProdXCat)

module.exports = productsRouter