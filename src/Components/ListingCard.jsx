import React,{useState, useEffect} from 'react';
import { Card, ListGroup, Modal, Button} from 'react-bootstrap';
import { RiDeleteBinLine, RiSettings2Fill } from "react-icons/ri";
import '../app/global.css';

function ListingCard({title, city, state, country, features, amenities, safety}) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const confirmDelete=()=>{
        console.log();
        setShowModal(false);
    }
   
    return (
       
        <div> 
            <Card>
                <Card.Img variant="top" src={require(`../imgs/house1.jpeg`)}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Address: {city},{state},{country}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Some features: {features}...</ListGroup.Item>
                    <ListGroup.Item>Some amenities: {amenities} ...</ListGroup.Item>
                    <ListGroup.Item>Some Safety: {safety} ...</ListGroup.Item>
                </ListGroup>
                <Card.Body className="flex justify-between">
                    <Card.Link href="/uploadlisting/title" className='text-cyan-500'><RiSettings2Fill/></Card.Link>
                    <Card.Link href="/" className='text-cyan-500' onClick={handleShow}><RiDeleteBinLine /></Card.Link>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to proceed with this action?</Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={confirmDelete}>Confirm</button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default ListingCard;
