//! aqui todos los handlers de combos

const { 
    findAllCombos, 
    createCombo,
    findAllCombosXTipo,
   } = require("../controllers/combosControllers")
  
/***** CREACIONES *****/
  //! Handlers para crear combos
  const setCombos = async (req, res) => {
    try {
      const { name, img, price, description, productos, tipo } = req.body;
      const newCombo = await createCombo({ name, img, price, description, productos, tipo });
      res.status(200).json(newCombo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


/***** BUSQUEDAS *****/
    //! Handlers para buscar todas las combos
  const getAllCombos = async (req, res) => {
      try {
        const result = await findAllCombos();
        res.status(200).send(result);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    };
  
    
    //! Handlers para buscar todas las combos x tipo small...etc
    const getAllCombosXTipo = async (req, res) => {
      const {tipo} = req.params
      try {
        const result = await findAllCombosXTipo({tipo});
        res.status(200).send(result);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    };


    module.exports = { 
      getAllCombos, 
      setCombos, 
      getAllCombosXTipo,
    };