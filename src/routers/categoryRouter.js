// Inicialido el enrutador de express
const { Router } = require('express')
const categoryRouter = Router()
const { getAllCategories, setCategories } = require("../handlers/categoriesHandlers")


// metodos CRUD
categoryRouter.get('/', getAllCategories)
categoryRouter.post('/', setCategories)


module.exports = categoryRouter