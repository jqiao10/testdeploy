import { Container,Row, Col} from "react-bootstrap";
import NormalBtn from "../../Components/NormalBtn";
import ImgBtn from "../../Components/ImgBtn";


function UploadLicense(){
    return(
      <div>
      <div className="upload">
        <Container fluid className="uploadContainer">
    <h1 className="uploadQuestion">Please Upload property License/ Cetificiate</h1>
    <p className="explain">It's crucial to upload, we will verify it before renting. </p>
    <br/>
    <ImgBtn/>
    <br />
  <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/price">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/finish">Done</NormalBtn>
  </Col>
</Row>
</Container>
    </Container>
    </div>
        </div>
    )
}
export default UploadLicense