import React from "react";

export default function TravelItem({
  description,
  quantity,
  packed,
  id,
  handleCheck,
  handleDelete,
}) {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => handleCheck(id)} />
      <span style={packed ? { textDecoration: "line-through" } : undefined}>
        {quantity} : {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
}
