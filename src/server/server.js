const express = require('express');
const cors = require('cors');
const db = require('../db/connection');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);

        // Conexión base de datos
        this.dbConnection();
        // Uso de los middlewares
        this.middlewares();
        // Uso de rutas
        //this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Conexión a base de datos exitosa');
          } catch (error) {
            console.error('Falló al conectar a la db:', error);
          }
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //INICIAR APLICACIÓN CON TIPO DE DATOS JSON
        this.app.use(express.json());
        //DIRECTORIO PÚBLICO
        //this.app.use(express.static('public'));
    }

    routes() {
        //this.app.use('/api/roles', require('../routes/roles.routes'));
        //this.app.use('/api/usuarios', require('../routes/usuarios.routes'));
        //this.app.use('/api/clientes', require('../routes/clientes.routes'));
        //this.app.use('/api/ventas', require('../routes/ventas.routes'));
        //this.app.use('/api/ventas-productos-detalles', require('../routes/ventaProductoDetalles.routes'));
        //this.app.use('/api/productos', require('../routes/productos.routes'));
        //this.app.use('/api/producto-proveedores', require('../routes/productoProveedores.routes'));
        //this.app.use('/api/proveedores', require('../routes/proveedores.routes'));
        //this.app.use('/api/categorias', require('../routes/categorias.routes'));
        //this.app.use('/api/login', require('../routes/auth.routes'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }
}

module.exports = Server;