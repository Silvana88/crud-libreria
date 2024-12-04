const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    },
    precio: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
});

const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;
