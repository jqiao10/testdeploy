import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function CounterBtn({children}) {
  const [count, setCount] = useState(0); 
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Container>
    <Row className="justify-content-between align-items-center">
      <Col>
        <h4 className="text-start questiontitle">{children}</h4> 
      </Col>
      <Col xs="auto" className='counter'>
        <Button onClick={decrement} className='btn'>-</Button>
        <span className="mx-2" >{count}</span> 
        <Button onClick={increment} className='btn'>+</Button>
      </Col>
    </Row>
  </Container>
  );
};

export default CounterBtn;