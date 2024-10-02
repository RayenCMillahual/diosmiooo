// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre Nosotros</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/profile">Mi Perfil</Link>
            <Link to="/matches">Matches</Link>
        </nav>
    );
};

export default Navigation;
