import { Container,Row, Col} from "react-bootstrap";
import NormalBtn from "../../Components/NormalBtn";
import ImgBtn from "../../Components/ImgBtn";


function UploadLicense(){
    return(
      <div>
      <div className="mt-5 pt-5">
      <h1 className="text-2xl text-center mt-1 mb-5"> Please Upload property License/ Cetificiate</h1>
      <p className="text-center mr-5 ml-5">It's crucial to upload, we will verify it before renting. </p>
    <br/>
    <ImgBtn/>
    <br />

    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/uploadlisting/price" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/finish" className='ml-10'>Next</NormalBtn>
      </div>


    </div>
        </div>
    )
}
export default UploadLicense