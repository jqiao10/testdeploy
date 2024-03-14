import React from "react";
import { Container} from "react-bootstrap";

import ListingCard from "../../Components/ListingCard";


function LandlordPage(){
    return(

        <div>
      
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
