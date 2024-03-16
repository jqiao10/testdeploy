function BookingCard({propertyImg, title, city, state, country, guest_firstname, guest_lastname, guest_email, startDate, endDate}){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg"> 
        <img src={propertyImg} alt="Property" className="w-full"/>
    
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                Address: {city}, {state}, {country}
            </p>
        </div>
    
        <div className="px-6 py-4">
            <p>Guest: {guest_firstname}, {guest_lastname}</p>
            <p>Contact: {guest_email}</p>
            <p>Duration: {startDate} to {endDate}</p>
        </div>
    </div>

    )
}
export default BookingCard;