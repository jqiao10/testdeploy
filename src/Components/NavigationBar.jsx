import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { GiNightSleep } from 'react-icons/gi';
import '../app/global.css';

function NavigationBar() {
  return (
    <div>
      <Navbar className='bg-white shadow-md fixed top-0 left-0 right-0 z-30'>
        <Container className='h-12 flex justify-between items-center px-10 '>
          <Nav className='hidden md:block'>
            <Navbar.Brand href='/'><GiNightSleep className='text-blue-600' size={30} /></Navbar.Brand>
          </Nav>
          <Nav className="flex gap-3 items-center">
            <Nav.Link href='/UpcomingT' className='text-black font-medium'>Upcoming Tenant</Nav.Link>
            <Nav.Link href='/CurrentT' className='text-black font-medium'>Current Tenant</Nav.Link>
            <Nav.Link href='/PreviousT' className='text-black font-medium'>Previous Tenant</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<FaUserCircle size={30} />} className='text-black'>
              <NavDropdown.Item href="/uploadlisting/title">New Listing</NavDropdown.Item>
              <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;