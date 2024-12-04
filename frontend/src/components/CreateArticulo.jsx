import React, { useState } from 'react';
import { API_ROUTES } from '../routes';
import { Link } from 'react-router-dom';

const CreateArticulo = () => {
  const [articulo, setArticulo] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticulo({ ...articulo, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch(API_ROUTES.CREATE_ARTICLE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify(articulo),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Redirige o muestra un mensaje de éxito
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h1>Agregar un Artículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={articulo.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" name="descripcion" value={articulo.descripcion} onChange={handleChange} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" name="precio" value={articulo.precio} onChange={handleChange} required />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" name="stock" value={articulo.stock} onChange={handleChange} required />
        </div>
        <button type="submit">Agregar</button>
      </form>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default CreateArticulo;

