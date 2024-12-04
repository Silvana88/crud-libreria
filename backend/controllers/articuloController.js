const Articulo = require('../models/articulo');

exports.getAllArticulos = async (req, res) => {
    try {
        const articulos = await Articulo.find();
        res.status(200).json(articulos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createArticulo = async (req, res) => {
    const nuevoArticulo = new Articulo(req.body);
    try {
        const articuloGuardado = await nuevoArticulo.save();
        res.status(201).json(articuloGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getArticuloById = async (req, res) => {
    try {
        const articulo = await Articulo.findById(req.params.id);
        if (!articulo) return res.status(404).json({ message: 'Artículo no encontrado' });
        res.status(200).json(articulo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateArticulo = async (req, res) => {
    try {
        const articuloActualizado = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!articuloActualizado) return res.status(404).json({ message: 'Artículo no encontrado' });
        res.status(200).json(articuloActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteArticulo = async (req, res) => {
    try {
        const articuloEliminado = await Articulo.findByIdAndDelete(req.params.id);
        if (!articuloEliminado) return res.status(404).json({ message: 'Artículo no encontrado' });
        res.status(200).json({ message: 'Artículo eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
