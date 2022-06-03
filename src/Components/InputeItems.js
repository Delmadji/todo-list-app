import React from "react";
import { useState } from "react";
import Btn from "./Btn";
import Inpute from "./Inpute";

function InputeItems({ handelAdd }) {
  const [inputValue, setInputValue] = useState("");

  const changeValue = (e) => {
    if (e.key === "Enter") {
      handelAdd(inputValue);
      setInputValue("");
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <div>
      <Inpute inputValue={inputValue} changeValue={changeValue} />
      <Btn handelAdd={handelAdd} inputValue={inputValue} />
    </div>
  );
}

export default InputeItems;
