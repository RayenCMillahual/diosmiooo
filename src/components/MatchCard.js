import React from 'react';

const MatchCard = ({ name, age, description }) => {
    return (
        <div className="match-card">
            <h3>{name}, {age}</h3>
            <p>{description}</p>
        </div>
    );
};

export default MatchCard;
