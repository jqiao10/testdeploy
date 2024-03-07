import React from "react";
import NormalBtn from "../../Components/NormalBtn";
import DescriptionBox from "../../Components/DescriptionBox";
import { Container,Row, Col} from "react-bootstrap";
import NavigationBar from "../../Components/NavigationBar";


function UploadDescription(){
return(
  <div>
  <header className='stickyHeader'>
  <NavigationBar/>
  </header>
  <div className="upload"> 
    <Container fluid className="uploadContainer">
    <h1 className="uploadQuestion">Please write a description for your property</h1>
    <p className="explain">Describe vividly convey the space's ambiance, features, and unique qualities, enabling guests to visualize their stay and feel more connected to the listing. This comprehensive narrative not only helps set guest expectations accurately but also boosts the property's appeal.</p>
    <br/>
    <div>
        <DescriptionBox/>

    </div>
    <br />
  <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/safety">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/cleaning">Next</NormalBtn>
  </Col>
</Row>
</Container>
    </Container>
    </div>
    </div>
)
}
export default UploadDescription;