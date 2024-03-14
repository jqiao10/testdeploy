import React from "react";
import {Form, Container, Row, Col} from 'react-bootstrap';
import NormalBtn from "../../Components/NormalBtn";


function uplaodListing(){

    return(
      <div>
        <div className="upload">
            <Container fluid className="uploadContainer">
            <h1 className="uploadQuestion">Give property A title</h1>
            <p className="explain">Please give an attractively summarize the property's main features and appeal to potential renters, making it stand out among numerous listings.</p>
            <br/>
            <Form.Control size="lg" type="text" placeholder="Property A Title" className="title-input "/>
            </Container>
      <br />
     

      <Container fluid className="buttons">
    <Row className="justify-content-between mb-2">
      <Col xs="auto">
        <NormalBtn href="/">Back</NormalBtn>
      </Col>
      <Col xs="auto">
        <NormalBtn href="/uploadlisting/info">Next</NormalBtn>
      </Col>
    </Row>
  </Container>
  </div>
        </div>
    )
}
export default uplaodListing;