import React, { useState, useEffect }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [newPlant, setNewPlant] = useState({})

  function handleFormSubmit (name, image, price) {
    setNewPlant({
      name: name,
      image:image,
      price: price
    })
  } 
  useEffect(() => {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPlant)
    })
  },[newPlant])

console.log(newPlant)
  return (
    <main>
      <NewPlantForm handleFormSubmit={handleFormSubmit}/>
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
