import React,{useState} from 'react';



function CheckboxBtn ({children, IconComponent, ...rest  }){
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='gridItem'>
        <br/>
    <input type="checkbox" {...rest} checked={isChecked} onChange={handleCheckboxChange}/>
        <br/>
    {IconComponent && <IconComponent size={50}/>}
    {children}
  </label>
    
  );
};

export default CheckboxBtn;