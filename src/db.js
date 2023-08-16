const  Sequelize =require('sequelize')
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DB_DEPLOY } = process.env;

// requerimos los modelos
const detallePedidoModel =require("./models/detallePedidoModel");
const productModel =require("./models/productModel");
const pedidoModel =require("./models/pedidoModel");
const categoriaModel =require("./models/categoriaModel");
const combosModel = require("./models/combosModel")
const tipoComboModel = require("./models/tipoComboModel");

// instanciamos a Sequelize que se conecta con nuestra base de datos de postgres y en el futuro a l que este deployada
// const sequelize = new Sequelize(
//  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//  {
//   logging: false,
//   native: false,
//  }
// );

const sequelize = new Sequelize(DB_DEPLOY, {
    logging: false,
    native: false,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Esto puede ser necesario en algunos entornos
        },
      },
 });


// se definen los modelos
detallePedidoModel(sequelize);
productModel(sequelize);
pedidoModel(sequelize);
categoriaModel(sequelize);
combosModel(sequelize);
tipoComboModel(sequelize);

// se desestructuran los modelos
const { 
    product, 
    detallePedido, 
    pedido, 
    categorias,
    combo,
    tipocombo
 } = sequelize.models;

// se definen las relaciones entre los modelos

combo.belongsToMany(product, { through: 'comboproduct' });
product.belongsToMany(combo, { through: 'comboproduct' });

tipocombo.hasMany(combo);
combo.belongsTo(tipocombo);

categorias.hasMany(product);
product.belongsTo(categorias);

product.hasMany(detallePedido);
detallePedido.belongsTo(product);

pedido.hasMany(detallePedido);
detallePedido.belongsTo(pedido);

// se exportan todos os modelos y la coneccion a la base
module.exports = {
    conn: sequelize,
    ...sequelize.models
} 
