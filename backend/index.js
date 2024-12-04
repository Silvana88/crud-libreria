const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const articuloController = require('./controllers/articuloController'); // Controlador para Artículos

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors('http://localhost:4000'));

// Middleware para Parseo de Datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Ruta Raíz
app.get('/', (req, res) => {
    res.send('CRUD-backend...');
});

// Rutas CRUD para Artículos
app.get('/articulos/all', articuloController.getAllArticulos);
app.post('/articulos/create', articuloController.createArticulo);
app.get('/articulos/find/:id', articuloController.getArticuloById);
app.put('/articulos/update/:id', articuloController.updateArticulo);
app.delete('/articulos/delete/:id', articuloController.deleteArticulo);

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server en ejecución en el puerto ${PORT}`);
});
