import React from "react";

function NormalBox({children}) {
  return (
    <div>
    <label for={children} className="textSmallLabel">{children}: </label>
    <input type="text" id={children} name={children} className="textboxSmall"/><br/>
    </div>
  );
}

export default NormalBox;