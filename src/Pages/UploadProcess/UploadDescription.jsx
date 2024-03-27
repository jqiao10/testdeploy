import React from "react";
import NormalBtn from "../../Components/NormalBtn";
import DescriptionBox from "../../Components/DescriptionBox";


function UploadDescription(){
return(
  <div>
    <div className="mt-1 pt-1">
      <h1 className="text-2xl text-center mt-5 mb-5" >Please write a description for your property</h1>
    <p className="text-center mr-10 ml-10">Describe vividly convey the space's ambiance, features, and unique qualities, enabling guests to visualize their stay and feel more connected to the listing. This comprehensive narrative not only helps set guest expectations accurately but also boosts the property's appeal.</p>
    <br/>
    <div className="text-center">
        <DescriptionBox/>

    </div>
    <br />

    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/uploadlisting/safety" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/cleaning" className='ml-10'>Next</NormalBtn>
      </div>

    </div>
    </div>
)
}
export default UploadDescription;