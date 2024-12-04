import React, { useEffect, useState } from 'react';
import { API_ROUTES } from '../routes';

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch(API_ROUTES.GET_ALL_ARTICLES)
      .then(response => response.json())
      .then(data => setArticulos(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Artículos</h1>
      <ul>
        {articulos.map(articulo => (
          <li key={articulo._id}>
            {articulo.nombre} - {articulo.precio} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articulos;

