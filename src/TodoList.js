import { useState } from "react";
import React from "react";
import ItemsList from "./Components/ItemsList";
import InputeItems from "./Components/InputeItems";

function TodoList() {
  const [itemsList, setItemsList] = useState([]);
  const handelDelet = (id) => {
    const newList = itemsList.filter((item) => item.id !== id);
    setItemsList(newList);
  };

  const handelAdd = (item) => {
    let newId = itemsList.map((it) => {
      return it.id;
    });
    newId = newId + 1;
    let newItem = [];
    newItem.push({ id: newId, desc: item });
    setItemsList([...itemsList, ...newItem]);
  };
  return (
    <div className="todo-list">
      <InputeItems handelAdd={handelAdd} />
      <ItemsList itemsList={itemsList} handelDelet={handelDelet} />
    </div>
  );
}

export default TodoList;
