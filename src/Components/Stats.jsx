import React from "react";

export default function Stats({ items, handleClear }) {
  const lenghtOfList = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / lenghtOfList) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You have fully packed for your journey.</em>
      ) : (
        <em>
          You have {lenghtOfList} items on your list and you have packed{" "}
          {packedItems} ({percentage}%)
        </em>
      )}
      <button onClick={handleClear}>Clear All</button>
    </footer>
  );
}
