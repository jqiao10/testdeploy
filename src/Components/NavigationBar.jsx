import React,{useState} from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { GiNightSleep } from 'react-icons/gi';
import { IoMdCloseCircle } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";



function NavigationBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
 <nav className="bg-cyan-500 shadow-md">
      <div className="max-w-6xl mx-auto px-1">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7 items-center">
              <a href="/" className="flex py-4 items-center">
                <GiNightSleep size={30} color='white' className="mr-10 ml-0"/>
              </a>
              </div>
              
          <div className="hidden md:flex items-center space-x-10">
            {/* hover:text-black*/}
            <a href='/upcomingt' className="py-4 px-2 text-white">Upcoming Tenant</a>
            <a href='/currentt' className="py-4 px-2 text-white">Current Tenant</a>
            <a href='/previoust' className="py-4 px-2 text-white">Previous Tenant</a>
          </div>
          
       

          <div className='hidden md:flex items-center px-0'>
          <a href='/uploadlisting/title' className='py-4 px-10 text-white'> Add New Property</a>
          <a href='/accountl' className='py-4 px-0 text-white'>My Account</a>
        </div>
          

          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
              <CgMenuGridR className={`h-6 w-6 ${isNavExpanded ? 'hidden' : 'block'}`} />
              <IoMdCloseCircle className={`h-6 w-6 ${isNavExpanded ? 'block' : 'hidden'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isNavExpanded ? 'block' : 'hidden'}`}>
        <a href='/upcomingt' className="block py-2 px-4 text-sm">Upcoming Tenant</a>
        <a href='/currentt' className="block py-2 px-4 text-sm">Current Tenant</a>
        <a href='/previoust' className="block py-2 px-4 text-sm">Previous Tenant</a>
        <a href='/uploadlisting/title' className="block py-2 px-4 text-sm">Add New Property</a>
        <a href='accountl' className="block py-2 px-4 text-sm"> My Account</a>
      </div>
    </nav>
    </div>
  );
}

export default NavigationBar;