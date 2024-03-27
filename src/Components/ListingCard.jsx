        import React,{useState, useEffect} from 'react';
     

        function ListingCard({propertyImg, title, city, state, country, features, amenities, safety,id}) {
     


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

        </div>
        );
        }

        export default ListingCard;
