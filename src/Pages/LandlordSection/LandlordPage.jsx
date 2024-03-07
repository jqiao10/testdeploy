import React from "react";
import { Container} from "react-bootstrap";

import ListingCard from "../../Components/ListingCard";
import NavigationBar from "../../Components/NavigationBar";


function LandlordPage(){
    return(

        <div>
        <header className='stickyHeader'>
        <NavigationBar/>
        </header>
        <Container className="container">
           {/* Will use mapping function when connecting to database */}
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
        </Container>
</div>
    )
}
export default LandlordPage;
