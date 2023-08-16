// Inicilaizo el servidor
const server = require('./src/app')
const { conn } = require("./src/db")
// Declaro un Puerto
const PORT = process.env.PORT || 3001
// Levantamos el servidor con server.listen
server.listen(PORT, ()=>{
    conn.sync({alter: true});
    // conn.sync({force: true});
    console.log(`Server escuchando en el puerto ${PORT}`);
})