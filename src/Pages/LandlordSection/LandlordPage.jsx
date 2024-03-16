import React,{useState,useEffect} from "react";
import {iconMap} from '../../info/icons';


import ListingCard from "../../Components/ListingCard";


function LandlordPage(){
    const [property, setProperty] = useState([]);

    //local
    useEffect(() => {
        fetch('http://localhost:3001/property')
        .then(response => response.json())
        .then(data => setProperty(data))
        .catch(error => console.error('Error:', error));
    }, []);
    
    return(
      <div className="items-center ml-20 mr-10">
      <div className="grid  grid-col-1 md:grid-cols-3 gap-5">
      {property.map((item, index) => (
      <div className="min-h-0 md:max-lg:min-h-full">
      <ListingCard 
      id = {item.id}
      key={index}
      propertyImg={item.propertyImg[0]}
      title={item.title}
      city={item.address.city}
      state = {item.address.state}
      country = {item.address.country}
      features = {item.features.map(a=>(
      <p className="inline-flex items-center">{iconMap.find(i=>i.name === a )?.icon} &nbsp; &nbsp;</p>
      ))}
      amenities = {item.amenities.map(a=>(
      <p className="inline-flex items-center">{iconMap.find(i=>i.name === a )?.icon} &nbsp; &nbsp;</p>
      ))}
      safety = {item.safety.map(a=>(
      <p className="inline-flex items-center">{iconMap.find(i=>i.name === a )?.icon} &nbsp; &nbsp;</p>
      ))}
      />
      </div>
      ))}
      </div>
      </div>
    )
}
export default LandlordPage;
