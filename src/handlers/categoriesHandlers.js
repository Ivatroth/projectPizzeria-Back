//! aqui todos los handlers de categorias

const { 
  findAllCategories, 
  createCategory,
 } = require("../controllers/categoriesControllers")


  //! Handlers para buscar todas las categorias
const getAllCategories = async (req, res) => {
    try {
      const result = await findAllCategories();
      res.status(200).send(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  //! Handlers para crear categorias
const setCategories = async (req, res) => {
    try {
      const { name, icon } = req.body;
      const newCategory = await createCategory({ name, icon });
      res.status(200).json(newCategory);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  module.exports = { 
    getAllCategories, 
    setCategories, 
  };