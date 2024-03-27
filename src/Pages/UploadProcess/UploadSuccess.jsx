import React from 'react';
import ConfettiBtn from '../../Components/ConfettiBtn';


function UploadSuccess(){
    return(
      <div>
    <div className="mt-5 pt-5">
      <h1 className="text-2xl text-center mt-1 mb-5"> Congratulations! </h1>
    <p className="text-center mr-5 ml-5">We will let you know after verification </p>
    <br/>



      <div className="text-center mt-5 flex justify-center space-x-20">
    <ConfettiBtn href="/">Done</ConfettiBtn>
    </div>

    </div>
    </div>
        
    )
}
export default UploadSuccess