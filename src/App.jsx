import React from "react";
import Form from "./Components/Form";
import TravelList from "./Components/TravelList";
import Logo from "./Components/Logo";
import Stats from "./Components/Stats";
import TravelItem from "./Components/TravelItem";

export default function App() {
  const [items, setItems] = React.useState([]);

  const addItems = (item) => {
    setItems((items) => {
      return [...items, item];
    });
  };

  const handleCheck = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div>
      <Logo />
      <Form addItems={addItems} />
      <TravelList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Stats items={items} handleClear={handleClear} />
    </div>
  );
}
