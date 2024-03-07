import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';


function MainCard(){
      // use {} add component from db for future developmemt
    return(
        <div className='pro-card'>
        <Card style={{ width: '25vw' }}>
            {/* Carousels, use mapping function with db data */}
            <Carousel interval={null}> 
            <Carousel.Item>
              <Card.Img variant="top" src={require(`../imgs/house1.jpeg`)} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="top" src={require(`../imgs/detail1.jpeg`)} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="top" src={require(`../imgs/detail2.jpeg`)} />
            </Carousel.Item>
        </Carousel>

      <Card.Body>
        <Card.Title>Sample Property Name</Card.Title>
        <Card.Text>
         Address: Property address
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Some features: a, b, c</ListGroup.Item>
        <ListGroup.Item>Some amentites: d, e, f</ListGroup.Item>
        <ListGroup.Item>Some Safety: g, h, i</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
    )
}
export default MainCard