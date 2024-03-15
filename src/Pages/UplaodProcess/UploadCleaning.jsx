import React from "react";
import NormalBtn from "../../Components/NormalBtn";
import DescriptionBox from "../../Components/DescriptionBox";
import { Container,Row, Col} from "react-bootstrap";


function UploadCleaning(){
return(
  <div>
   <div className="mt-1 pt-1">
      <h1 className="text-2xl text-center mt-5 mb-5">Please write a cleaning instruction</h1>
    <p className="text-center mr-10 ml-10">These instructions help maintain the property's cleanliness and quality, contributing to a positive experience for both guests and future bookings, while also protecting the property from potential damage or excessive wear.</p>
    <br/>
    <div className="text-center">
        <DescriptionBox/>
    </div>
    <br />
 

    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/uploadlisting/description" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/img" className='ml-10'>Next</NormalBtn>
      </div>

    </div>
    </div>
)
}
export default UploadCleaning;