import { Container,Row, Col} from "react-bootstrap";
import NormalBtn from "../../Components/NormalBtn";
import NormalBox from "../../Components/NormalBox";
import ChooseDate from "../../Components/ChooseDate";

function UploadPrice(){
    return(
      <div>
       <div className="mt-5 pt-5">
      <h1 className="text-2xl text-center mt-1 mb-5" >Please let us know the price</h1>
      <p className="text-center mr-5 ml-5 mb-5">Show your potential tanent price, we recommand lower price for regular weekday and slighly higher for holiday and weekends</p>
        <br/>
        <div class="flex flex-col items-center">
            <NormalBox children="Weekday"/>
            <br/>
            <NormalBox children="Weekend/Holiday"/>
            <br/>
            <ChooseDate children="Start Date "/>
            <br/>
            <ChooseDate children="End Date "/>

        </div>
        <br/>

    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/uploadlisting/address" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/license" className='ml-10'>Next</NormalBtn>
      </div>

        </div>
        </div>
    )

}
export default UploadPrice;