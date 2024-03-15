import { Container,Row, Col } from "react-bootstrap";
import NormalBox from "../../Components/NormalBox";
import NormalBtn from "../../Components/NormalBtn";
import DescriptionBox from "../../Components/DescriptionBox";


function UploadAddress(){
return(
  <div>
       <div className="mt-1 pt-1">
      <h1 className="text-2xl text-center mt-5 mb-5">Please let us know the address</h1>
      <p className="text-center mr-10 ml-10">It ensures accuracy in location data, helping customers, delivery services, or visitors to find the place without confusion or delay. This level of detail enhances user experience, improves operational efficiency, and can contribute to safety by ensuring that emergency services can quickly locate the property if needed.</p>
    <br/>
    <div class="flex flex-col px-20 items-center">
        <NormalBox children="Address Liine 1"/>
        <br/>
        <NormalBox children="Address Line 2"/>
        <br/>
        <NormalBox children="City"/>
        <br/>
        <NormalBox children="Province/State"/>
        <br/>
        <NormalBox children="Country"/>
        <br/>
        <NormalBox children="Postal"/>
        <br/>
        </div>
        <div className="text-center">
        <p>Instruction (Optional): </p>
        <DescriptionBox children="DirectionInstruction"/>
        </div>
    <br/>

    <div className="text-center mt-5 flex justify-center space-x-20 gap-20 mb-5">
      <NormalBtn href="/uploadlisting/img" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/price" className='ml-10'>Next</NormalBtn>
      </div>

    </div>
    </div>
)
}
export default UploadAddress;