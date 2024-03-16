import React, { useState, useEffect } from "react";
import BookingCard from "../../Components/BookingCard";

function Current() {
  const [property, setProperty] = useState([]);
  const [booking, setBooking] = useState([]);
  const [isLoadingBooking, setIsLoadingBooking] = useState(true);
  const [isLoadingProperty, setIsLoadingProperty] = useState(true);

  //local
  useEffect(() => {
    fetch('http://localhost:3001/property')
      .then(response => response.json())
      .then(data => {
        setProperty(data);
        setIsLoadingProperty(false);
        console.log('property:',property);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:3001/booking')
      .then(response => response.json())
      .then(data => {
        setBooking(data);
        setIsLoadingBooking(false);
        console.log('booking:',booking);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  
const currentBookings = (bookings) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  console.log("today type:", typeof(today)); 

  return bookings.filter(item => {
    const endDate = new Date(item.endDate);
    const startDate = new Date(item.startDate);
    console.log("start date type:", typeof(startDate)); 

    return endDate > today && startDate < today;
  });
};
const resultBookings = currentBookings(booking);

  return (
    <div className="items-center ml-20 mr-10">
    {(!isLoadingBooking && !isLoadingProperty) ? 
    <div className="grid  grid-col-1 md:grid-cols-3 gap-5">
      {resultBookings.length > 0 ? (
        resultBookings.map((item, index) => (
          <div className="min-h-0 md:max-lg:min-h-full">
          <BookingCard
            index={index}
            propertyImg={property.find(p => p.pid === item.houseid)?.propertyImg[0] || 'Property Image Not Found'}
            title={property.find(p => p.pid === item.houseid)?.title || 'Title Not Found'}
            city={property.find(p => p.pid === item.houseid)?.address.city || 'City not found'}
            state={property.find(p => p.pid === item.houseid)?.address.state || 'State not found'}
            country={property.find(p => p.pid === item.houseid)?.address.country || 'Country not found'}
            guest_firstname={item.guest_firstname}
            guest_lastname={item.guest_lastname}
            guest_email={item.guest_email}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        </div>
           
          ))
          
        ) : (
          <p>No Current Booking</p>
        )}
      </div> : null}
    </div>
  )

  // {!isLoadingBooking && !isLoadingProperty ? 
  // <div>
  //   {booking.length > 0 ? (
  //     booking.map((item, index) => (
  //       <div key={index}>
  //         <p>Start Date: {item.startDate}</p>
  //         <p>House ID: {item.houseid}</p>
  //         <h1>House information: </h1>
  //         <p></p>
  //         <p>House name: {property.find(property => property.id === item.houseid)?.title || 'Title not found'}</p>


  //         <p>Guest First Name: {item.guest_firstname}</p>
  //         <p>Guest Last Name: {item.guest_lastname}</p>
  //         <p>Guest Contact Email: {item.guest_email}</p>
  //       </div>
  //     ))
  //   ) : (
  //     <p>No Booking with an end date earlier than today.</p>
  //   )}
  // </div>) : null}
  //)
}
export default Current;