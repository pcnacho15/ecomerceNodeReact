// Configuración dotenv para llamar a las variables de entorno
require('dotenv').config();
// Crear objeto tipo Server
const Server = require('./server/server');
// Crear una nueva instancia del servidor
const server = new Server();
// Iniciar servidor
server.listen();