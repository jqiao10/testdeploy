        import React,{useState, useEffect} from 'react';
        import { RiDeleteBinLine, RiSettings2Fill } from "react-icons/ri";
        import { MdRemoveRedEye } from "react-icons/md";
        import { Link } from 'react-router-dom';
        import ConfirmDelete from './ConfirmDelete';


        function ListingCard({propertyImg, title, city, state, country, features, amenities, safety,id}) {
            const [showConfirmModal, setShowConfirmModal] = useState(false);

            const handleShow = () => setShowConfirmModal(true);
            const handleClose = () => setShowConfirmModal(false);
            const handleConfirmDelete = () => {
              console.log('Item deleted');
              setShowConfirmModal(false);
            };


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
        <p>Features: {features}</p>
        <p>Amenities: {amenities}</p>
        <p>Safety: {safety}</p>
        </div>

        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out">
        <RiSettings2Fill size="1.5em"/>
        </div>


        <div className="flex justify-end items-center space-x-4">
        <div className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out">
        <Link  to={`/previewproperty/${id}`} className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out">
         <MdRemoveRedEye size="1.5em"/>
         </Link>

        </div>

        <div className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out" onClick={handleShow}>
        <RiDeleteBinLine size="1.5em"/>
        </div>
        </div>
        </div>
        <ConfirmDelete
        isOpen={showConfirmModal}
        onClose={handleClose}
        onConfirm={handleConfirmDelete}
      />
        </div>
        );
        }

        export default ListingCard;
