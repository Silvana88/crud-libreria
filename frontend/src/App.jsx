import React, { useState, useEffect } from 'react';

const apiUrl = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [articulos, setArticulos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  // Función para obtener todos los artículos
  const fetchArticulos = async () => {
    const response = await fetch(`${apiUrl}/articulos/all`,{ headers: {
      'ngrok-skip-browser-warning': 'true',
  },});
    const data = await response.json();
    setArticulos(data);

  };

  // Llama a fetchArticulos al cargar el componente
  useEffect(() => {
    fetchArticulos();
  }, []);

  // Agregar un nuevo artículo
  const agregarArticulo = async () => {
    if (nombre && descripcion && precio && stock) {
      const nuevoArticulo = {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        stock: parseInt(stock)
      };
      await fetch(`${apiUrl}/articulos/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoArticulo),
      });
      fetchArticulos(); // Refrescar la lista
      resetForm();
    }
  };

  // Editar un artículo
  const editarArticulo = async (index) => {
    setNombre(articulos[index].nombre);
    setDescripcion(articulos[index].descripcion);
    setPrecio(articulos[index].precio);
    setStock(articulos[index].stock);
    setEditIndex(index);
  };

  // Actualizar un artículo
  const actualizarArticulo = async () => {
    const articuloActualizado = {
      nombre,
      descripcion,
      precio: parseFloat(precio),
      stock: parseInt(stock)
    };
    await fetch(`${apiUrl}/articulos/update/${articulos[editIndex]._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(articuloActualizado),
    });
    fetchArticulos(); // Refrescar la lista
    resetForm();
  };

  // Eliminar un artículo
  const eliminarArticulo = async (index) => {
    await fetch(`${apiUrl}/articulos/delete/${articulos[index]._id}`, {
      method: 'DELETE',
    });
    fetchArticulos(); // Refrescar la lista
  };

  // Resetear el formulario
  const resetForm = () => {
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setStock('');
    setEditIndex(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CRUD - Librería Básica</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          style={styles.input}
        />
        <button onClick={editIndex !== null ? actualizarArticulo : agregarArticulo} style={styles.button}>
          {editIndex !== null ? 'Actualizar' : 'Agregar'}
        </button>
      </div>

      <ul style={styles.list}>
        {articulos.map((articulo, index) => (
          <li key={index} style={styles.listItem}>
            <div>
            {articulo.nombre} - {articulo.descripcion} - ${articulo.precio} - Stock: {articulo.stock}
            </div>
            <div>
            <button onClick={() => editarArticulo(index)} style={styles.editButton}>Editar</button>
            <button onClick={() => eliminarArticulo(index)} style={styles.deleteButton}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap', // Permitir que los inputs se ajusten en varias líneas si es necesario
  },
  input: {
    width: 'calc(25% - 10px)',
    padding: '10px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px', // Espacio entre filas de inputs
  },
  button: {
    padding: '0.5px',
    borderRadius: '4px',
    borderstyle: 'dotte',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    display: 'flex',
    //flexDirection: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  editButton: {
    margin: '5px 0',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5px',
  },
  deleteButton: {
    margin: '5px 0',
    backgroundColor: '#dc3545',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5px', // Reducir tamaño
    //width: '50%', // Ajustar tamaño
  },
};

export default App;


