const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("combo", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(400),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
    },
    deleteLogic: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    //Aqui se agregaran los FOREIGN KEY con el tipo de combo
  },
  {
    timestamps: false,
  });
};
