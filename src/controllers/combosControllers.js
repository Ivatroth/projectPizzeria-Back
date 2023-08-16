// se importan los modelos a usar
const { combo, tipocombo } = require("../db")

/****** CREACIONES ******/

//!aca tambien debeen venir los id de los productos involucrados y el tipo
//para sacar el precio, para hacer el descuento y para guardar en 
//la tabra de muchos a muchos
const createCombo = async ({name, img, price, description, productos, tipo}) => {
    //! aqui buscar el id del tipo
    let tipoId=0
    try {
        const tipoComb = await tipocombo.findOne({ where:{ name: tipo }})
        tipoId = tipoComb.id
    } catch (error) {
        throw new Error('El tipo de Combo seleccionado es invalido')
    }
    try {
        //! aqui hacer map del array productos para hacer un newcom.addProductos(cada uno)
        const newcom = await combo.create({name, img, price, description, tipocomboId: tipoId});
        productos.map((p)=>{
            newcom.addProducts(p)
        })
        return newcom;
    } catch (error) {
        throw new Error('Error al craer el combo')
    }
}

/****** BUSQUEDAS ******/
const findAllCombos = async () => {
    try {
        const allcat = await combo.findAll();
        return allcat;
    } catch (error) {
        throw new Error('Error al buscar los combos')
    }
}

const findAllCombosXTipo = async ({tipo}) => {
    console.log(tipo);
    let tipoId=0
    try {
        const tipoComb = await tipocombo.findOne({where:{name: tipo}})
        tipoId = tipoComb.id
    } catch (error) {
        throw new Error('El tipo de Combo seleccionado es invalido')
    }
    try{
        const allcat = await combo.findAll({where:{tipocomboId:tipoId}});
        return allcat;
    } catch (error){
        throw new Error('Error al buscar los combo')
    }
}

module.exports = {
    findAllCombos,
    createCombo,
    findAllCombosXTipo,
}