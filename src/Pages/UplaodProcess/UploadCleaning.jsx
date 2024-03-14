import React from "react";
import NormalBtn from "../../Components/NormalBtn";
import DescriptionBox from "../../Components/DescriptionBox";
import { Container,Row, Col} from "react-bootstrap";


function UploadCleaning(){
return(
  <div>
    <div className="upload">
    <Container fluid className="uploadContainer">
    <h1 className="uploadQuestion">Please write a cleaning instruction</h1>
    <p className="explain">These instructions help maintain the property's cleanliness and quality, contributing to a positive experience for both guests and future bookings, while also protecting the property from potential damage or excessive wear.</p>
    <br/>
    <div>
        <DescriptionBox/>
    </div>
    <br />
  <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/description">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/img">Next</NormalBtn>
  </Col>
</Row>
</Container>
    </Container>
    </div>
    </div>
)
}
export default UploadCleaning;