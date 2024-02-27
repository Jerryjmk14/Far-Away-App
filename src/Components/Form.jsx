import React from "react";

export default function Form({ addItems }) {
  const [quantity, setQuantity] = React.useState(1);
  const [description, setDescription] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);
    addItems(newItems);
    setDescription("");
    setQuantity("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.target.value));
        }}>
        {Array.from({ length: 30 }, (_, i) => {
          return i + 1;
        }).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Enter Items"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button>Add Items</button>
    </form>
  );
}
