// se importan los modelos a usar
const { categorias } = require("../db")

const findAllCategories = async () => {
    try {
        const allcat = await categorias.findAll();
        return allcat;
    } catch (error) {
        throw new Error('Error al buscar todas las categorias')
    }
}

const createCategory = async (name, icon = '') => {
    try {
        const newcat = await categorias.create(name, icon);
        return newcat;
    } catch (error) {
        throw new Error('Error al buscar todas las categorias')
    }
}

module.exports = {
    findAllCategories,
    createCategory
}