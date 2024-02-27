import React from "react";
import TravelItem from "./TravelItem";

export default function TravelList({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <TravelItem
            {...item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
