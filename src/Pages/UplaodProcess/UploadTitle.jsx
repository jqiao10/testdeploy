import React from "react";
import {Form, Container, Row, Col} from 'react-bootstrap';
import NormalBtn from "../../Components/NormalBtn";


function uplaodListing(){

    return(

      <div>
      <div className="mt-5 pt-5">
      <h1 className="text-2xl text-center mt-5 mb-5" >Give property A title</h1>
      <p className="text-center">Please give an attractively summarize the property's main features and appeal to potential renters, making it stand out among numerous listings.</p>
      </div>
      <br/>
      <div  class="flex justify-center items-center mt-5">
      <input class="placeholder:text-slate-400 block bg-white w-4/6 min-w-24 text-center border border-cyan-500 rounded-md py-3 focus:ring-1 text-xl" placeholder="Enter a title for property ..." type="text" name="search"/> 
      </div>   
      <br/>
      <div>


      <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/info" className='ml-10'>Next</NormalBtn>
      </div>

      </div>
      </div>

    )
}
export default uplaodListing;