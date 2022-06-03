import React from "react";

function Inpute({ inputValue, changeValue }) {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => changeValue(e)}
        onKeyDown={(e) => changeValue(e)}
      ></input>
    </div>
  );
}

export default Inpute;
