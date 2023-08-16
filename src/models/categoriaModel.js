const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define(
    "categorias",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,

      },
      //Aqui se agregaran los FOREIGN KEY de rubro
    },
    {
      timestamps: false,
    }
  );
};
