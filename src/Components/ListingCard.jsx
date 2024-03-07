import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { RiDeleteBinLine,RiSettings2Fill } from "react-icons/ri";


function ListingCard(){
  // use {} add component from db for future developmemt
    return (
        <div className='pro-card'>
        <Card style={{ width: '25vw' }}>
        <Card.Img variant="top" src={require(`../imgs/house1.jpeg`)}/>
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

      <Card.Body>
        <Card.Link href="/uploadlisting/title" className='cardlink'><RiSettings2Fill/></Card.Link>
        <Card.Link href="/properties" className='cardlink'><RiDeleteBinLine /></Card.Link>
        
      </Card.Body>
    </Card>

            
        </div>
    )
}
export default ListingCard