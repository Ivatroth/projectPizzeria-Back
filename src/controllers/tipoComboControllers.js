// se importan los modelos a usar
const { tipocombo } = require("../db")

/****** CREACIONES ******/

const createTipoCombo = async ({name,descuento}) => {
    console.log('Entra al controllers de cracion de tipos de combos');
    try {
        const newcom = await tipocombo.create({name, descuento});
        return newcom;
    } catch (error) {
        throw new Error('Error al craer el tipo de combo')
    }
}

/****** BUSQUEDAS ******/

const findAllTiposCombos = async () => {
    console.log('Entra al controllers de busqueda de tipos de combos');
    try {
        const allTipos = await tipocombo.findAll({where: {deleteLogic: true}});
        return allTipos;
    } catch (error) {
        throw new Error('Error al buscar los combos')
    }
}


module.exports = {
    createTipoCombo,
    findAllTiposCombos
}