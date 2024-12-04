import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>CRUD-Articulos de Librería</h1>
            <ul>
                <li><Link to="/articulos">Ver todos los Artículos</Link></li>
                <li><Link to="/create">Agregar un Articulo</Link></li>
                <li><Link to="/find">Buscar un Articulo</Link></li>
                <li><Link to="/update">Actualizar un Articulo</Link></li>
                <li><Link to="/delete">Eliminar un Articulo</Link></li>
            </ul>
        </div>
    );
};

export default Home;
