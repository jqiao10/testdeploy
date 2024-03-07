import React, {useState}from "react";
import { InputGroup,Form } from "react-bootstrap";

function CheckboxOthers({children, ...rest} ){
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
return(
 
        <InputGroup>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='gridItem'>
         <input type="checkbox" {...rest} checked={isChecked} onChange={handleCheckboxChange}/>
        {children}
        <br/>
        <Form.Control aria-label="Text input with checkbox" />
        </label>
        </InputGroup>
 
)
}
export default CheckboxOthers;