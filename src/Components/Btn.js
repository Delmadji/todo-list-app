import React from "react";

function Btn({ handelAdd, inputValue }) {
  return (
    <div>
      <button onClick={() => handelAdd(inputValue)}>add</button>
    </div>
  );
}

export default Btn;
