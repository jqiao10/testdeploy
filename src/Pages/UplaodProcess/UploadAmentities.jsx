import React from "react"
import NormalBtn from "../../Components/NormalBtn";
import CheckboxBtn from "../../Components/CheckboxBtn";
import CheckboxOthers from "../../Components/CheckboxOthers";
import { Container,Row, Col} from "react-bootstrap";
import { FaHotTub, FaWater, FaChair} from "react-icons/fa";
import { MdOutdoorGrill,MdOutlineFireplace, MdDinnerDining} from "react-icons/md";
import { FaWaterLadder } from "react-icons/fa6";
import { GiPoolTableCorner } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import NavigationBar from "../../Components/NavigationBar";

function UplaodAmentities(){
    return(
      <div>
      <header className='stickyHeader'>
      <NavigationBar/>
      </header>
      <div className="upload">
        <Container fluid className="uploadContainer">
        <h1 className="uploadQuestion">Tell us some amentities you offered</h1>
        <p className="explain">Tell your potential tenant what anmentities to expected from this property</p>
        <br/>


        <div className="checkgrid">
            {/* hot tub */}
            <CheckboxBtn
        children="Hot Tub"
        IconComponent={FaHotTub}
      />
            {/* BBQ Grill */}
            <CheckboxBtn
        children="Hot Tub"
        IconComponent={MdOutdoorGrill}
      />
            {/* Patio */}
            <CheckboxBtn
        children="Patio"
        IconComponent={FaChair}
      />

            {/* Outdoor/ Backyard Dinning area */}
            <CheckboxBtn
        children="Outdoor/ Backyard Dinning Area"
        IconComponent={MdDinnerDining}
      />

            {/* Lake access */}
            <CheckboxBtn
        children="lake Access"
        IconComponent={FaWater}
      />
            {/* GYM */}
            <CheckboxBtn
        children="GYM"
        IconComponent={CgGym}
      />
            {/* Pool table */}
            <CheckboxBtn
        children="Pool Table"
        IconComponent={GiPoolTableCorner}
      />
            {/* Fireplace */}
            <CheckboxBtn
        children="Firepalce"
        IconComponent={MdOutlineFireplace}
      />

            {/* Pool */}
            <CheckboxBtn
        children="lake Access"
        IconComponent={FaWaterLadder}
      />
      
       {/* others */}
       <CheckboxOthers children="Others"/>
      
        </div>

        <br />
  <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/feature">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/safety">Next</NormalBtn>
  </Col>
</Row>
</Container>
</Container>
</div>
</div>
    )
}
export default UplaodAmentities