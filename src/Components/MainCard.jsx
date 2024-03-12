import React from 'react';
import { Card, ListGroup, Carousel } from 'react-bootstrap';
import '../app/global.css';

function MainCard() {
    return (
        // The card will take full width on small screens and scale down to 1/4 of the width on larger screens.
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'> 
            <Card>
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
                    <ListGroup.Item>Some amenities: d, e, f</ListGroup.Item>
                    <ListGroup.Item>Some Safety: g, h, i</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default MainCard;
