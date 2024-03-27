import React from "react";

function NormalBox({children}) {
  return (
    <div className="flex flex-col items-center w-2/3 px-10">
       <div className="flex justify-between w-2/3 mb-2">
    <label for={children} className='text-left w-1/3'>{children}:  </label>
    <input type="text" id={children} name={children} className="border-1 border-cyan-500 w-2/3 text-left" /><br/>
    </div>
    </div>
  );
}

export default NormalBox;