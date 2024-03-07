import { Container, Col} from "react-bootstrap";
import ConfettiBtn from '../../Components/ConfettiBtn';
import NavigationBar from "../../Components/NavigationBar";


function UploadSuccess(){
    return(
      <div>
      <header className='stickyHeader'>
      <NavigationBar/>
      </header>
      <div className="upload">
        <Container fluid className="uploadContainer">
    <h1 className="uploadQuestion">Congratulations! </h1>
    <p className="explain">We will let you know after verification </p>
    <br/>
    </Container>
  <Container>

  <Col className="center">
    <ConfettiBtn href="/">Done</ConfettiBtn>
  </Col>
    </Container>
    </div>
    </div>
        
    )
}
export default UploadSuccess