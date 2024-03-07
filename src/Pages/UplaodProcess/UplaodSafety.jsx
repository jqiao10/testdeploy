import React from "react"
import NormalBtn from "../../Components/NormalBtn"
import CheckboxBtn from "../../Components/CheckboxBtn"
import { WiSmoke } from "react-icons/wi";
import { Tb24Hours,TbLadder } from "react-icons/tb";
import { FaFirstAid, FaFireExtinguisher} from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { Container,Row, Col} from "react-bootstrap";
import CheckboxOthers from "../../Components/CheckboxOthers";
import NavigationBar from "../../Components/NavigationBar";

function UploadSafety(){
    return(
      <div>
      <header className='stickyHeader'>
            <NavigationBar/>
            </header>
        <div className="upload">
        <Container fluid className="uploadContainer">
        <h1 className="uploadQuestion">Tell us what Safety feature you offered</h1>
        <p className="explain">Tell your potential tenant what safety feature you have for this property</p>
        <br/>


        <div className="checkgrid">
           {/* Smoke Alarm */}
           <CheckboxBtn
        children="Smoke Alarm"
        IconComponent={WiSmoke}
      />
           {/* 24/7 Security */}
           <CheckboxBtn
        children="24/7 Security"
        IconComponent={Tb24Hours}
      />
           {/* First Aid Kit */}
           <CheckboxBtn
        children="First Aid Kit"
        IconComponent={FaFirstAid}
      />

           {/* Fire Extinguisher */}
           <CheckboxBtn
        children="Fire Extinguisher"
        IconComponent={FaFireExtinguisher}
      />

           {/* Emergency Exit */}
           <CheckboxBtn
        children="Emergency Exit"
        IconComponent={IoIosExit}
      />

           {/* Security System */}
           <CheckboxBtn
        children="Security System"
        IconComponent={MdOutlineSecurity}
      />

           {/* Fire Escape Ladder */}
           <CheckboxBtn
        children="Fire Escape Ladder"
        IconComponent={TbLadder}
      />

      {/* others */}
      <CheckboxOthers children="Others"/>
        </div>
       

        <br />
  <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/amentities">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/description">Next</NormalBtn>
  </Col>
</Row>
</Container>
</Container>
</div>
</div>
    )
}
export default UploadSafety