import React,{useState, useEffect} from 'react';
import { RiDeleteBinLine, RiSettings2Fill } from "react-icons/ri";
import '../app/global.css';

function ListingCard({propertyImg, title, city, state, country, features, amenities, safety}) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const confirmDelete=()=>{
        console.log();
        setShowModal(false);
    }
   
    return (
       
        <div className="max-w-sm rounded overflow-hidden shadow-lg"> 
        <img src={propertyImg} alt="Property" className="w-full"/>
    
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                Address: {city}, {state}, {country}
            </p>
        </div>
    
        <div className="px-6 py-4">
            <p>Features: {features}...</p>
            <p>Amenities: {amenities}...</p>
            <p>Safety: {safety}...</p>
        </div>
    
        <div className="px-6 pt-4 pb-2 flex justify-between">
            <div className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out" onClick={handleShow}>
                <RiSettings2Fill size="1.5em"/>
            </div>
            <div className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out" onClick={handleShow}>
                <RiDeleteBinLine size="1.5em"/>
            </div>
        </div>
    </div>
    );
}

export default ListingCard;
