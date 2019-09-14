import React from 'react';



function Card({name, country, searches}) {
    return (
  
      <div className="card">
        <h1>{name}</h1>
        <h2>{country}</h2>
        <p>{searches}</p>
      </div>
  
);
}

export default Card;