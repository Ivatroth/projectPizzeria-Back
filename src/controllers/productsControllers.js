// se importan los modelos a usar
const { product, categorias } = require("../db")
const { Op } = require('sequelize');

const findAllProductos = async () => {
    try {
        const allcat = await product.findAll();
        return allcat;
    } catch (error) {
        throw new Error('Error al buscar todos los productos')
    }
}

const findAllProdXCat = async ({categoria}) => {
    try {
        const prod = await product.findAll({
            include: {
                model: categorias,
                where: { name: {[Op.iLike]: `%${categoria}%`}},
              },
        });
        return prod;
    } catch (error) {
        throw new Error('Error al buscar los productos x categoria')
    }
}


const findAllProdXName = async ({name}) => {
    try {
        const prod = await product.findAll({
            where: {
                name: {
                  [Op.iLike]: `%${name}%`,
                }
            },
        });
        return prod;
    } catch (error) {
        throw new Error('Error al buscar los productos x nombre')
    }
}

const createProducto = async ({name, img, price, description, categor}) => {
    try {
        const idCat = await categorias.findOne({
            where:{
            name: categor
        }})
        const categoriaId = idCat.id
        const newprod = await product.create({name, img, price, description, categoriaId});
        return newprod;
    } catch (error) {
        throw new Error('Error al crear producto')
    }
}

module.exports = {
    findAllProductos,
    createProducto,
    findAllProdXCat,
    findAllProdXName
}