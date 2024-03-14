import ImgBtn from "../../Components/ImgBtn";
import { Container,Row, Col} from "react-bootstrap";
import NormalBtn from "../../Components/NormalBtn";


function UploadImg(){
    return(
      <div>
      <div className="upload">
        <Container fluid className="uploadContainer">
    <h1 className="uploadQuestion">Please Upload some Pictures of your property</h1>
    <p className="explain">It's crucial to upload professional photos because high-quality, accurate photos visually communicate the space's appeal, layout, and amenities, helping potential guests to envision themselves in the property. </p>
    <br/>
    <div>
    <ImgBtn/>
    </div>
    <br />
  <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/cleaning">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/address">Next</NormalBtn>
  </Col>
</Row>
</Container>
    </Container>
    </div>
      </div>
    )
}
export default UploadImg