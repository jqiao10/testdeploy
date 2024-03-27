import React from "react"
import NormalBtn from "../../Components/NormalBtn"
import CheckboxBtn from "../../Components/CheckboxBtn"
import { WiSmoke } from "react-icons/wi";
import { Tb24Hours,TbLadder } from "react-icons/tb";
import { FaFirstAid, FaFireExtinguisher} from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import CheckboxOthers from "../../Components/CheckboxOthers";

function UploadSafety(){
    return(
      <div>
      <div className="mt-1 pt-1">
      <h1 className="text-2xl text-center mt-5">Tell us what Safety feature you offered</h1>
      <p className="text-center mr-10 ml-10">Tell your potential tenant what safety feature you have for this property</p>
        <br/>


        <div className="flex justify-center">
        <div  class="grid grid-cols-3 gap-5 auto-cols-max mt-5">
           {/* Smoke Alarm */}
           <CheckboxBtn
        children="Smoke Alarm"
        IconComponent={WiSmoke}
      />
           {/* 24/7 Security */}
           <CheckboxBtn
        children="24/7 Security"
        IconComponent={Tb24Hours}
      />
           {/* First Aid Kit */}
           <CheckboxBtn
        children="First Aid Kit"
        IconComponent={FaFirstAid}
      />

           {/* Fire Extinguisher */}
           <CheckboxBtn
        children="Fire Extinguisher"
        IconComponent={FaFireExtinguisher}
      />

           {/* Emergency Exit */}
           <CheckboxBtn
        children="Emergency Exit"
        IconComponent={IoIosExit}
      />

           {/* Security System */}
           <CheckboxBtn
        children="Security System"
        IconComponent={MdOutlineSecurity}
      />

           {/* Fire Escape Ladder */}
           <CheckboxBtn
        children="Fire Escape Ladder"
        IconComponent={TbLadder}
      />

      {/* others */}
      <CheckboxOthers children="Others"/>
        </div>
        </div>
       

        <br />
    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/uploadlisting/amentities" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/description" className='ml-10'>Next</NormalBtn>
      </div>
</div>
</div>
    )
}
export default UploadSafety;