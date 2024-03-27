import React, {useState}from "react";


function CheckboxOthers({children, ...rest} ){
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
return(
 
        <div>
        <label className='flex text-center gap-10'>
         <input type="checkbox" {...rest} checked={isChecked} onChange={handleCheckboxChange}/>
        {children}
        <br/>
        <input className="border-1 border-cyan-500" placeholder="Others" />
        </label>
        </div>
 
)
}
export default CheckboxOthers;