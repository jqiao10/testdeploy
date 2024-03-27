import React from "react";
import { useParams } from 'react-router-dom';

function PropertyPreview(){
    const { id } = useParams()
    return(
        <div>
        <h1>Property Preview for ID: {id}, Waiting for the page from the tenant side </h1>
      </div>
    )
    

}
export default PropertyPreview;