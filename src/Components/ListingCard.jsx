import React,{useState, useEffect} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { RiDeleteBinLine, RiSettings2Fill } from "react-icons/ri";
import '../app/global.css';

function ListingCard({title, city, state, country, features, amenities, safety}) {
   
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
                    <Card.Link href="/uploadlisting/title" className='text-blue-800'><RiSettings2Fill/></Card.Link>
                    <Card.Link href="/properties" className='text-blue-800'><RiDeleteBinLine /></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ListingCard;
