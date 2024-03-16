import React from "react";
import NormalBtn from '../../Components/NormalBtn';
import CheckboxBtn from "../../Components/CheckboxBtn";
import CheckboxOthers from "../../Components/CheckboxOthers";
import { MdOutlineCoffeeMaker,MdOutlinePaid, MdLocalLaundryService} from "react-icons/md";
import { GiHotSurface,GiHanger,GiDesk} from "react-icons/gi";
import { BiSolidFridge, BiSolidBlanket} from "react-icons/bi";
import { FaWifi,FaParking } from "react-icons/fa";
import { FaHotjar,FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning,TbToolsKitchen3 } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";



function UploadFeature(){
    return(
      <div>
        
        <div className="mt-1 pt-1">
      <h1 className="text-2xl text-center mt-5" >Tell us some features you offered</h1>
      <p className="text-center mr-5 ml-5">Tell your potential tenant what features to expected from this property</p>
        <br/>

        <div className="flex justify-center">
        <div  class="grid grid-cols-3 gap-5 auto-cols-max mt-5">
            {/* Wifi */}
        <CheckboxBtn
        children="Wifi"
        IconComponent={FaWifi}
      />
            {/* parking */}
            <CheckboxBtn
        children="Free Parking"
        IconComponent={FaParking}
      />

            {/* Laundry facilities */}
            <CheckboxBtn
        children="Laundry Facilities"
        IconComponent={MdLocalLaundryService}
      />
            {/* Heating */}
            <CheckboxBtn
        children="Heating"
        IconComponent={FaHotjar}
      />

            {/* AC */}
            <CheckboxBtn
        children="AC"
        IconComponent={TbAirConditioning}
      />

            {/* Paid Parking */}
            <CheckboxBtn
        children="Paid Parking"
        IconComponent={MdOutlinePaid}
      />

      {/* coffee maker */}
      <CheckboxBtn
        children="Coffee Maker"
        IconComponent={MdOutlineCoffeeMaker}
      />

      {/* stove */}
      <CheckboxBtn
        children="Cooking Top"
        IconComponent={GiHotSurface}
        />

        {/* fridge */}
        <CheckboxBtn
        children="Fridge"
        IconComponent={BiSolidFridge}
        />

        {/* Essentail Kitchen Applicances */}
            <CheckboxBtn
        children="Essential Kitchen Applicances"
        IconComponent={FaKitchenSet}
      />
            {/* Kitchen Utensils */}
            <CheckboxBtn
        children="Kitchen Utensils"
        IconComponent={TbToolsKitchen3}
      />
            {/* TVs */}
            <CheckboxBtn
        children="Tvs"
        IconComponent={PiTelevisionBold}
      />

      {/* Bedding */}
      <CheckboxBtn
        children="Bedding"
        IconComponent={BiSolidBlanket}
      />

      {/* Hanger */}
      <CheckboxBtn
        children="Hangers"
        IconComponent={GiHanger}
      />

      {/* WorkSpace */}
      <CheckboxBtn
        children="Work Space"
        IconComponent={GiDesk}
      />
      
       {/* others */}
       <CheckboxOthers children="Others"/>
        </div>

        </div>

  <br />
<div className="text-center mt-5 flex justify-center space-x-20 gap-20 mb-5">
      <NormalBtn href="/uploadlisting/info" className="pr-10">Back</NormalBtn>
      <NormalBtn href="/uploadlisting/amentities" className='ml-10'>Next</NormalBtn>
      </div>

</div>
    </div>
    )
}
export default UploadFeature;