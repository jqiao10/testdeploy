import React from "react"
import NormalBtn from "../../Components/NormalBtn";
import CheckboxBtn from "../../Components/CheckboxBtn";
import CheckboxOthers from "../../Components/CheckboxOthers";
import { FaHotTub, FaWater, FaChair, FaMountain} from "react-icons/fa";
import { MdOutdoorGrill,MdOutlineFireplace, MdDinnerDining} from "react-icons/md";
import { FaWaterLadder } from "react-icons/fa6";
import { GiPoolTableCorner,GiHeatHaze} from "react-icons/gi";
import { CgGym } from "react-icons/cg";


function UplaodAmentities(){
    return(
      <div>
     <div className="mt-1 pt-1">
      <h1 className="text-2xl text-center mt-5" >Tell us some amentities you offered</h1>
      <p className="text-center mr-5 ml-5">Tell your potential tenant what anmentities to expected from this property</p>
        <br/>


        <div className="flex justify-center">
        <div  class="grid grid-cols-3 gap-5 auto-cols-max mt-5">
            {/* hot tub */}
            <CheckboxBtn
        children="Hot Tub"
        IconComponent={FaHotTub}
      />
            {/* BBQ Grill */}
            <CheckboxBtn
        children="BBQ Grill"
        IconComponent={MdOutdoorGrill}
      />
            {/* Patio */}
            <CheckboxBtn
        children="Patio"
        IconComponent={FaChair}
      />

            {/* Outdoor/ Backyard Dinning area */}
            <CheckboxBtn
        children="Outdoor Dinning Area"
        IconComponent={MdDinnerDining}
      />

            {/* Lake access */}
            <CheckboxBtn
        children="Lake Access"
        IconComponent={FaWater}
      />

      {/* Mountain view */}
      <CheckboxBtn
        children="Mountain View"
        IconComponent={FaMountain}
      />
            {/* GYM */}
            <CheckboxBtn
        children="GYM"
        IconComponent={CgGym}
      />
            {/* Pool table */}
            <CheckboxBtn
        children="Pool Table"
        IconComponent={GiPoolTableCorner}
      />
            {/* Fireplace */}
            <CheckboxBtn
        children="Firepalce"
        IconComponent={MdOutlineFireplace}
      />

            {/* Pool */}
            <CheckboxBtn
        children="Swimming pool"
        IconComponent={FaWaterLadder}
      />

      {/* sauna */}
      <CheckboxBtn
        children="Sauna"
        IconComponent={GiHeatHaze}
      />
      
       {/* others */}
       <CheckboxOthers children="Others"/>
      
        </div>
        </div>

        <br />
    <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
      <NormalBtn href="/uploadlisting/feature" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/safety" className='ml-10'>Next</NormalBtn>
      </div>
 
</div>
</div>
    )
}
export default UplaodAmentities