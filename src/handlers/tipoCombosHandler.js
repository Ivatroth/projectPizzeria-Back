const { 
    createTipoCombo,
    findAllTiposCombos
   } = require("../controllers/tipoComboControllers")
  
/***** CREACIONES *****/

  //! Handlers para crear tipo de combos
  const setTipoCombo = async (req, res) => {
    console.log('Entra al handlers de creacion del tipo');
    try {
      const { name, descuento} = req.body;
      const newCombo = await createTipoCombo({ name, descuento });
      res.status(200).json(newCombo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

/***** BUSQUEDAS *****/  

    //! Handlers para buscar todas las tipos de combos
    const getTiposCombos = async (req, res) => {
      console.log('Entra al handlers de busqueda del tipo');
      try {
        const result = await findAllTiposCombos();
        res.status(200).send(result);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    };

    module.exports = { 
      setTipoCombo,
      getTiposCombos
    };