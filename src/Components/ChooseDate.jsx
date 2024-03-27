import React, { useState } from 'react';
import DatePicker from 'react-datepicker';


function ChooseDate({children}) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center w-2/3 px-10">
       <div className="flex justify-between w-2/3 mb-2">
      <label className='text-left w-1/3'>{children}: </label>
      <DatePicker  className="border-1 border-cyan-500 w-full text-left" selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
    </div>
  );
}

export default ChooseDate;
