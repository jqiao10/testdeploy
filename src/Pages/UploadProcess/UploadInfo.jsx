import React from "react";
import CounterBtn from '../../Components/CounterBtn';
import NormalBtn from '../../Components/NormalBtn';

function UploadInfo(){

  return(
    <div>
    <div className="upload">
    <div className="mt-1 pt-1">
    <h1  className="text-2xl text-center mt-5 mb-5">Give us some basic information about your property</h1>
    <p className="text-center mr-10 ml-10">Ensure potential tenants have a clear understanding of what is being offered, it helps match the property with the right renters, facilitates a smoother rental process, and enhances the overall user experience by setting accurate expectations.</p>
    <br/>
    {/* Living room */}
    <div className="grid justify-center ">
    <CounterBtn>Living Room: </CounterBtn>
    <br/>
    {/* Kitchen */}
    <CounterBtn>Kitchen: </CounterBtn>
    <br/>
    {/* Bathroom */}
    <CounterBtn>Bathroom: </CounterBtn>
    <br/>
    {/* Bedroom */}
    <CounterBtn>Bedroom: </CounterBtn>
    <br/>
    {/* Guest Number */}
    <CounterBtn>Guests: </CounterBtn>
    </div>
    </div>



    <br />
    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
    <NormalBtn href="/uploadlisting/title">Back</NormalBtn>
    <NormalBtn href="/uploadlisting/feature">Next</NormalBtn>
    </div>
    </div>
    </div>
  )
}
export default UploadInfo;