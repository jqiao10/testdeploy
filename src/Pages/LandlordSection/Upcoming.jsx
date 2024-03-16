import React,{useState, useEffect} from "react";
import BookingCard from "../../Components/BookingCard";
function Upcoming(){
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
  const upcomingBookings = (bookings) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log("today type:", typeof(today)); 
  
    return bookings.filter(item => {
      const startDate = new Date(item.startDate);
      console.log("start date type:", typeof(startDate)); 
      return startDate > today;
    });
  };
  
  const resultBookings = upcomingBookings(booking);
    
    return(
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
          <p>No Upcoming Booking</p>
        )}
      </div> : null}
    </div>
    )


}
export default Upcoming;