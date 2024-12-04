import React, { useState } from 'react';
import { API_ROUTES } from '../routes';

const FindArticulo = () => {
  const [id, setId] = useState('');
  const [articulo, setArticulo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_ROUTES.FIND_ARTICLE(id))
      .then(response => response.json())
      .then(data => setArticulo(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Buscar un Artículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Artículo:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <button type="submit">Buscar</button>
      </form>
      {articulo && (
        <div>
          <h2>{articulo.nombre}</h2>
          <p>{articulo.descripcion}</p>
          <p>Precio: {articulo.precio} USD</p>
          <p>Stock: {articulo.stock}</p>
        </div>
      )}
    </div>
  );
};

export default FindArticulo;

