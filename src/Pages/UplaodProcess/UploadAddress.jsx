import { Container,Row, Col } from "react-bootstrap";
import NormalBox from "../../Components/NormalBox";
import NormalBtn from "../../Components/NormalBtn";
import DescriptionBox from "../../Components/DescriptionBox";
import NavigationBar from "../../Components/NavigationBar";

function UploadAddress(){
return(
  <div>
  <header className='stickyHeader'>
  <NavigationBar/>
  </header>
  <div className="uplaod">
    <Container fluid className="uploadContainer">
        <h1 className="uploadQuestion">Please let us know the address</h1>
    <p className="explain"> It ensures accuracy in location data, helping customers, delivery services, or visitors to find the place without confusion or delay. This level of detail enhances user experience, improves operational efficiency, and can contribute to safety by ensuring that emergency services can quickly locate the property if needed.</p>
    <br/>
    <div>
        <NormalBox children="Country"/>
        <br/>
        <NormalBox children="Address"/>
        <br/>
        <NormalBox children="City"/>
        <br/>
        <NormalBox children="Province/State"/>
        <br/>
        <NormalBox children="Postal"/>
        <br/>
        <p>Instruction (Optional)</p>
        <DescriptionBox children="DirectionInstruction"/>
    </div>
    <br/>
    <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/img">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/price">Next</NormalBtn>
  </Col>
</Row>
</Container>
    </Container>
    </div>
    </div>
)
}
export default UploadAddress;