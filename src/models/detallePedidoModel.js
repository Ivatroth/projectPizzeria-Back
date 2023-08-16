const { DataTypes } = require('sequelize')
require('pg')

module.exports = (sequelize) => {
    sequelize.define(
        "detallePedido",
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          subTotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
          }
          //Aqui se agregaran los FOREIGN KEY de pedidoId y productId
        },
    
        {
          timestamps: false,
        }
    );
}