      import React,{useState,useEffect} from "react";
      import { RiDeleteBinLine, RiSettings2Fill } from "react-icons/ri";
      import { MdRemoveRedEye } from "react-icons/md";
      import { Link } from 'react-router-dom';
      import ConfirmDelete from '../../Components/ConfirmDelete';
      import {iconMap} from '../../info/icons';


      function LandlordPage(){
      const [property, setProperty] = useState([]);
      const [showConfirmModal, setShowConfirmModal] = useState(false);

      const handleShow = () => setShowConfirmModal(true);
      const handleClose = () => setShowConfirmModal(false);
      const handleConfirmDelete = () => {
      console.log('Item deleted');
      setShowConfirmModal(false);
      };

      //local
      useEffect(() => {
      fetch('http://localhost:3001/property')
      .then(response => response.json())
      .then(data => setProperty(data))
      .catch(error => console.error('Error:', error));
      }, []);

      return(
      <div className="items-center ml-20 mr-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {property.map((item, index) => (
      <div key={index} className="min-h-0 md:max-lg:min-h-full bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={item.propertyImg[0]} alt="Property" className="w-full"/>

      <div className="p-6">
      <div className="font-bold text-xl mb-2">{item.title}</div>
      <p className="text-gray-700 text-base">
      Address: {item.address.city}, {item.address.state}, {item.address.country}
      </p>
      <div>
      <p>Features: {item.features.map(a => (
        <span className="inline-flex items-center mr-2">{iconMap.find(i => i.name === a)?.icon}</span>
      ))}</p>
      <p>Amenities: {item.amenities.map(a => (
        <span className="inline-flex items-center mr-2">{iconMap.find(i => i.name === a)?.icon}</span>
      ))}</p>
      <p>Safety: {item.safety.map(a => (
        <span className="inline-flex items-center mr-2">{iconMap.find(i => i.name === a)?.icon}</span>
      ))}</p>
      </div>
      </div>

      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
      <Link to={`/settingproperty/${item.id}`} className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out">
      <RiSettings2Fill size="1.5em"/>
      </Link>

      <div className="flex justify-end items-center space-x-4">
      <Link to={`/previewproperty/${item.id}`} className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out">
        <MdRemoveRedEye size="1.5em"/>
      </Link>

      <div className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out" onClick={handleShow}>
        <RiDeleteBinLine size="1.5em"/>
      </div>
      <ConfirmDelete
      isOpen={showConfirmModal}
      onClose={handleClose}
      onConfirm={handleConfirmDelete}
      /> 
      </div>
      </div>
      </div>
      ))}
      </div>
      </div>

      )
      }
      export default LandlordPage;
