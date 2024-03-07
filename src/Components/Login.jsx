import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      
      
    };
  
    return (
      <Container className="justify-content-center align-items-center login">
        <Form style={{ width: '300px' }} onSubmit={handleLogin}>
          <Form.Group >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
            <br/>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
            <div className='center'>
          <Button className='landlordButton' type="submit"> Login </Button>
          </div>
        </Form>
      </Container>
    );
  }
  export default Login