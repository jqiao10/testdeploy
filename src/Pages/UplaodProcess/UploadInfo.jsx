import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import CounterBtn from '../../Components/CounterBtn';
import NormalBtn from '../../Components/NormalBtn';
import NavigationBar from "../../Components/NavigationBar";

function uplaodListing(){

    return(
      <div>
      <header className='stickyHeader'>
      <NavigationBar/>
      </header>
        <div className="upload">
            <Container fluid className="uploadContainer">
            <h1 className="uploadQuestion">Give us some basic information about your property</h1>
            <p className="explain">Ensure potential tenants have a clear understanding of what is being offered, it helps match the property with the right renters, facilitates a smoother rental process, and enhances the overall user experience by setting accurate expectations.</p>
            <br/>
            {/* Living room */}
           <div>
         <CounterBtn>Living Room: </CounterBtn>
         <br/>
         {/* Kitchen */}
         <CounterBtn>Kitchen: </CounterBtn>
         <br/>
         {/* Bathroom */}
         <CounterBtn>Bathroom: </CounterBtn>
         <br/>
         {/* Bedroom */}
         <CounterBtn>Bedroom: </CounterBtn>
         <br/>
         {/* Guest Number */}
         <CounterBtn>Guests: </CounterBtn>
           </div>
            </Container>
            


      <br />
      <Container fluid className="buttons">
    <Row className="justify-content-between mb-2">
      <Col xs="auto">
        <NormalBtn href="/uploadlisting/title">Back</NormalBtn>
      </Col>
      <Col xs="auto">
        <NormalBtn href="/uploadlisting/feature">Next</NormalBtn>
      </Col>
    </Row>
  </Container>
</div>
        </div>
    )
}
export default uplaodListing;