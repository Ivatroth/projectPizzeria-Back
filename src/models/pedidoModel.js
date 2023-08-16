const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define(
    "pedido",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      telefonoComprador: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM(
          "PENDIENTE",
          "ENVIADO",
          "ENTREGADO",
          "RECHAZADO",
          "CANCELADO"
        ),
        defaultValue: "PENDIENTE",
      },
      metodoPago: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Aqui se agregaran los FOREIGN KEY de userId (comprador) y empresaId (vendedor)
    },
    {
      timestamps: false,
    }
  );
};
