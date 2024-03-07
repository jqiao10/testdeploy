import React from 'react';
import {Container,Nav, Navbar,NavDropdown} from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'; 
import { GiNightSleep } from "react-icons/gi";

function NavigationBar(){
    return(
        <div>
        <Navbar className='bar'>
          <Container>
          <Nav className='justify-content-front bar'>
            <Navbar.Brand href='/'><GiNightSleep color='#08415c' size={30}/></Navbar.Brand>
            </Nav>
            <Nav className="me-auto barcontent">
              <Nav.Link href='/UpcomingT'>Upcoming Tenant</Nav.Link>
              <Nav.Link href='/CurrentT'className='bardetail'>Current Tenant</Nav.Link>
              <Nav.Link href='/PreviousT'className='bardetail'>Previous Tenant</Nav.Link>
              
            </Nav>

            <Nav className='justify-content-end barcontent'>
           
            <NavDropdown title={<FaUserCircle size={30}/>} className='barcontent'>
                <NavDropdown.Item className='barcontent' href="/uploadlisting/title">New Listing</NavDropdown.Item>
                <NavDropdown.Item className='barcontent' href="/setting">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  className='barcontent' href="/">Sign Out</NavDropdown.Item>
              </NavDropdown>


            </Nav>
          </Container>
        </Navbar>
       
      </div>
    );
}
export default NavigationBar;