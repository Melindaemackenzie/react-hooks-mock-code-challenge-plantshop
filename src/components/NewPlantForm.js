import React, { useState } from "react";

function NewPlantForm( {handleFormSubmit} ) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
 
  function handleNameChange(e) {
    setName(e.target.value)
    console.log(name)
  } 

  function handleImageChange(e) {
    setImage(e.target.value)
  }

  function handlePriceChange(e) {
    setPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleFormSubmit(name, image, price)
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form
        onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleNameChange} />
        <input type="text" name="image" placeholder="Image URL" value= {image} onChange={handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePriceChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
