import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { GiNightSleep } from 'react-icons/gi';
import MainSearchBar from './MainSearchBar';
import '../app/global.css';

function MainNavigation() {
  return (
    <div >
      <Navbar className='bg-white shadow-md fixed w-full z-30 pt-20'>
        <Container className='h-16 flex justify-between items-center px-10 pt-20'>
          <Nav className='hidden md:block'>
            <Navbar.Brand href='/'><GiNightSleep className='text-blue-600' size={30} /></Navbar.Brand>
          </Nav>
          <MainSearchBar />
          <Nav>
            <NavDropdown title={<FaUserCircle size={30} />} className='text-black'>
              <NavDropdown.Item href="/loginT">Tenant Login</NavDropdown.Item>
              <NavDropdown.Item href="/LoginL">Landlord Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavigation;