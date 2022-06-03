import React from "react";

function DeleteBtn({ handelDelet, id }) {
  return (
    <div>
      <button onClick={() => handelDelet(id)}>delet</button>
    </div>
  );
}

export default DeleteBtn;
