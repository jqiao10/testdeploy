import React from "react";
import { Container,Row, Col} from "react-bootstrap";
import NormalBtn from '../../Components/NormalBtn';
import { FaWifi,FaParking } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { FaHotjar,FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning,TbToolsKitchen3 } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import CheckboxBtn from "../../Components/CheckboxBtn";
import CheckboxOthers from "../../Components/CheckboxOthers";
import { MdPaid } from "react-icons/md";
import NavigationBar from "../../Components/NavigationBar";


function UploadFeature(){
    return(
      <div>
      <header className='stickyHeader'>
      <NavigationBar/>
      </header>
        <div className="upload">
        <Container fluid className="uploadContainer">
        <h1 className="uploadQuestion"> Tell us some features you offered</h1>
        <p className="explain">Tell your potential tenant what features to expected from this property</p>
        <br/>

        <div className="checkgrid">
            {/* Wifi */}
        <CheckboxBtn
        children="Wifi"
        IconComponent={FaWifi}
      />
            {/* parking */}
            <CheckboxBtn
        children="Free Parking"
        IconComponent={FaParking}
      />

            {/* Laundry facilities */}
            <CheckboxBtn
        children="Laundry Facilities"
        IconComponent={MdLocalLaundryService}
      />
            {/* Heating */}
            <CheckboxBtn
        children="Heating"
        IconComponent={FaHotjar}
      />

            {/* AC */}
            <CheckboxBtn
        children="AC"
        IconComponent={TbAirConditioning}
      />

            {/* Paid Parking */}
            <CheckboxBtn
        children="Paid Parking"
        IconComponent={MdPaid}
      />

            {/* Essentail Kitchen Applicances */}
            <CheckboxBtn
        children="Essential Kitchen Applkicances"
        IconComponent={FaKitchenSet}
      />
            {/* Kitchen Utensils */}
            <CheckboxBtn
        children="Kitchen Utensils"
        IconComponent={TbToolsKitchen3}
      />
            {/* TVs */}
            <CheckboxBtn
        children="Tvs"
        IconComponent={PiTelevisionBold}
      />
       {/* others */}
       <CheckboxOthers children="Others"/>
            
        </div>
   </Container>


  <br />
  <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/info">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/amentities">Next</NormalBtn>
  </Col>
</Row>
</Container>

</div>
    </div>
    )
}
export default UploadFeature;