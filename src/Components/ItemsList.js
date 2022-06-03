import React from "react";
import DeleteBtn from "./DeleteBtn";

function ItemsList({ itemsList, handelDelet }) {
  return (
    <div>
      {itemsList.map((item) => {
        return (
          <li key={item.id}>
            {item.desc}

            <DeleteBtn handelDelet={handelDelet} id={item.id} />
          </li>
        );
      })}
    </div>
  );
}

export default ItemsList;
