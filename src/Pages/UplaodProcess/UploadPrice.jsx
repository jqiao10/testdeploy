import { Container,Row, Col} from "react-bootstrap";
import NormalBtn from "../../Components/NormalBtn";
import NormalBox from "../../Components/NormalBox";
import ChooseDate from "../../Components/ChooseDate";

function UploadPrice(){
    return(
      <div>
      <div className="upload">
        <Container fluid className="uploadContainer">
        <h1 className="uploadQuestion">Please let us know the price</h1>
        <p className="explain">Show your potential tanent price, we recommand lower price for regular weekday and slighly higher for holiday and weekends</p>
        <br/>
        <div>
            <NormalBox children="Weekday"/>
            <br/>
            <NormalBox children="Weekend/Holiday"/>
            <br/>
            <ChooseDate children="Start Date "/>
            <br/>
            <ChooseDate children="End Date "/>

        </div>
        <br/>
    <Container fluid className="buttons">
<Row className="justify-content-between mb-2">
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/address">Back</NormalBtn>
  </Col>
  <Col xs="auto">
    <NormalBtn href="/uploadlisting/license">Next</NormalBtn>
  </Col>
</Row>
</Container>
        </Container>
        </div>
        </div>
    )

}
export default UploadPrice;