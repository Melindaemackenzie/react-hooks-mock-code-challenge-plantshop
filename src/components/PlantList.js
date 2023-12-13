import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then ((data) => {
        setPlants(data);
      });
    },[]);
    console.log(plants)
  return (
    <ul className="cards">
      {plants.map((plant)=> {
        return <PlantCard plant={plant} key={plant.id} />
      })}
    </ul>
  );
}

export default PlantList;
