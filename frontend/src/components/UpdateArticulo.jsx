import React, { useState } from 'react';
import { API_ROUTES } from '../routes';

const UpdateArticulo = () => {
  const [id, setId] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_ROUTES.UPDATE_ARTICLE(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
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
      <h1>Actualizar un Artículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Artículo:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
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
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default UpdateArticulo;
