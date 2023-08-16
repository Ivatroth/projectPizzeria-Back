//! aqui todos los handlers del Producto

const { 
    findAllProductos, 
    createProducto,
    findAllProdXCat,
    findAllProdXName
   } = require("../controllers/productsControllers")
  
  
    //! Handlers para buscar todas los productos
  const getAllProductos = async (req, res) => {
      try {
        const result = await findAllProductos();
        res.status(200).send(result);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    };

     //! Handlers para buscar productos x categoria
    const getProdXCat = async (req, res) => {
        const {categoria} = req.params;
        try {
          const result = await findAllProdXCat({categoria});
          res.status(200).send(result);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
      };


      
      const getProdXName = async (req, res) => {
        const {name} = req.params;
        try {
          const result = await findAllProdXName({name});
          res.status(200).send(result);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
      };
    //! Handlers para crear productos
  const setProductos = async (req, res) => {
      try {
        const { name, img, price, description, categor } = req.body;
        const newProducto = await createProducto({ name, img, price, description, categor });
        res.status(200).json(newProducto);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };
  
  
    module.exports = { 
        setProductos,
        getAllProductos,
        getProdXCat,
        getProdXName
    };