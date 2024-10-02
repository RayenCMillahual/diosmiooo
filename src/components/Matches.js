import React, { useState, useEffect } from 'react';

const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        // Simular una llamada a una API para obtener coincidencias
        const fetchMatches = () => {
            // Esto debería ser reemplazado por tu lógica de obtención de datos
            const dummyMatches = [
                { id: 1, name: 'John', age: 28, description: 'Loves hiking' },
                { id: 2, name: 'Jane', age: 26, description: 'Enjoys reading' },
            ];
            setMatches(dummyMatches);
        };

        fetchMatches();
    }, []);

    return (
        <div>
            <h1>Matches Page</h1>
            <p>Aquí puedes ver tus coincidencias:</p>
            <ul>
                {matches.map((match) => (
                    <li key={match.id}>
                        {match.name}, {match.age}: {match.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Matches;