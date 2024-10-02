import React from 'react';
import Navigation from './Navigation'; // Asegúrate de que la ruta sea correcta

const Header = () => {
    return (
        <header>
            <h1>LoveMatch</h1>
            <Navigation /> {/* Componente de navegación */}
        </header>
    );
};

export default Header;
