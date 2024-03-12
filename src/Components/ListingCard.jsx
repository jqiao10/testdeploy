import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { RiDeleteBinLine, RiSettings2Fill } from "react-icons/ri";
import '../app/global.css';

function ListingCard() {
    return (
       
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'> 
            <Card>
                <Card.Img variant="top" src={require(`../imgs/house1.jpeg`)}/>
                <Card.Body>
                    <Card.Title>Sample Property Name</Card.Title>
                    <Card.Text>
                        Address: Property address
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Some features: a, b, c</ListGroup.Item>
                    <ListGroup.Item>Some amenities: d, e, f</ListGroup.Item>
                    <ListGroup.Item>Some Safety: g, h, i</ListGroup.Item>
                </ListGroup>
                <Card.Body className="flex justify-between">
                    <Card.Link href="/uploadlisting/title" className='text-blue-800'><RiSettings2Fill/></Card.Link>
                    <Card.Link href="/properties" className='text-blue-800'><RiDeleteBinLine /></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ListingCard;
