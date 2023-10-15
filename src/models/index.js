/*
Esta clase index nos sirve para importar todas las clases de mapeo dentro de una sola,
también para realizar las relaciones de las mismas.
*/

const Categoria = require('./categoria');
const Producto = require('./producto');


// Relación de uno a muchos (Categoria - Producto)
// Una categoría pues estar en varios productos
Producto.belongsTo(Categoria, {foreignKey : 'categorias_id'});
Categoria.hasMany(Producto, {foreignKey : 'id'});


module.exports = {
    Categoria,
    Producto
}