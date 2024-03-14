import React,{useState,useEffect} from "react";


import ListingCard from "../../Components/ListingCard";


function LandlordPage(){
    const [property, setProperty] = useState([]);

    //local
    useEffect(() => {
        fetch('http://localhost:3001/property'||'api/property')
        .then(response => response.json())
        .then(data => setProperty(data))
        .catch(error => console.error('Error:', error));
    }, []);
    return(
      <div>
      <div className="grid  grid-col-1 md:grid-cols-3 gap-5">
      {property.map((item, index) => (
      <div className="min-h-0 md:max-lg:min-h-full">
      <ListingCard
      id = {item.id}
      key={index}
      title={item.title}
      city={item.address.city}
      state = {item.address.state}
      country = {item.address.country}
      features = {item.features.slice(0,2).map(a=>(
      <p className="sameline">{a},</p>
      ))}
      amenities = {item.amenities.slice(0,2).map(a=>(
      <p className="sameline">{a},</p>
      ))}
      safety = {item.safety.slice(0,2).map(a=>(
      <p className="sameline">{a},</p>
      ))}
      />
      </div>
      ))}
      </div>
      </div>
    )
}
export default LandlordPage;
