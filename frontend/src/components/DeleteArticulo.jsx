import React, { useState } from 'react';
import { API_ROUTES } from '../routes';

const DeleteArticulo = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    await fetch(API_ROUTES.DELETE_ARTICLE(id, {
        headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        }), { method: 'DELETE',
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
      <h1>Eliminar un Artículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Artículo:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
};

export default DeleteArticulo;



