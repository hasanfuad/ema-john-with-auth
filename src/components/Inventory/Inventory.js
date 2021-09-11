import React from "react";
import fakeData from "../../fakeData";

const Inventory = () => {
  const handleProduct = () => {
    fetch('http://localhost:5000/addProducts',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fakeData)
    }
    )
  };

  
  return (
    <div>
      <button onClick={handleProduct}>Add Product</button>
      
    </div>
  );
};

export default Inventory;
