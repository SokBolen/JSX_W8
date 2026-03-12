import React, { useState } from "react";
export default function StuffForm({onAddStuff}) {
  const [name, setName]= useState("");
  const [price, setPrice] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    onAddStuff(name, price);
    setName("");
    setPrice(0);
  }

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="text" value={name} onChange={(e)=> setName(String(e.target.value))} />

      <p>Stuff price</p>
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />

      <button>Add Stuff</button>
    </form>
  );
}
