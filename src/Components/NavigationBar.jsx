import React,{useState} from 'react';
import { GiNightSleep } from 'react-icons/gi';
import { IoMdCloseCircle } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";



function NavigationBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };
  


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
          {/* <a href='/accountl' className='py-4 px-0 text-white'>My Account</a> */}
        </div>

  <div className='relative hidden md:flex items-center px-0'>
  <button onClick={toggleAccountDropdown} className='py-4 px-10 text-white flex'>
    My Account
    {/* You can add an icon here to indicate dropdown */}
  </button>
  {isAccountDropdownOpen && (
     <div className="absolute right-0  top-5 mt-10  pt-20 py-2 w-48 bg-white rounded-md shadow-xl z-20">
     <a href="/cfeedback" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-500 hover:text-white">Cleaning Feedback</a>
     <a href="/accountsettingl" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-500 hover:text-white">Settings</a>
     <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-500 hover:text-white">Logout</a>
   </div>
  )}
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
        <a href='/cfeedback' className="block py-2 px-4 text-sm"> Cleaning Feedback</a>
        <a href='/setting' className="block py-2 px-4 text-sm"> Setting</a>
        <a href='/' className="block py-2 px-4 text-sm"> Logout</a>
      </div>
    </nav>
    </div>
  );
}

export default NavigationBar;