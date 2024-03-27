import ImgBtn from "../../Components/ImgBtn";
import NormalBtn from "../../Components/NormalBtn";


function UploadImg(){
    return(
      <div>
      <div className="mt-1 pt-1">
      <h1 className="text-2xl text-center mt-5 mb-5">Please Upload some Pictures of your property</h1>
      <p className="text-center mr-10 ml-10">It's crucial to upload professional photos because high-quality, accurate photos visually communicate the space's appeal, layout, and amenities, helping potential guests to envision themselves in the property. </p>
    <br/>
    <div className="text-center">
    <ImgBtn/>
    </div>
    <br />

    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/uploadlisting/cleaning"className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/address" className='ml-10'>Next</NormalBtn>
      </div>
  
    </div>
      </div>
    )
}
export default UploadImg