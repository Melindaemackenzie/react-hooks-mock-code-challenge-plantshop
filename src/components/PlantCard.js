import React, { useState, useEffect } from "react";

function PlantCard({plant}) {

  
  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock((prevIsInStock) => !prevIsInStock)

  };

  

  return (
        <li className="card" key={plant.id}>
        <img src={plant.image} alt={plant.name} />
        <h4>{plant.name}</h4>
        <p>Price: {plant.price}</p>
        <button className={isInStock ? "primary" : ""} onClick={handleClick}>
          {isInStock ? "In Stock" : "Out of Stock"}
        </button>
      </li>
      );
    }

export default PlantCard;
