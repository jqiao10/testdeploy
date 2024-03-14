import React, { useState } from 'react';

function CounterBtn({children}) {
  const [count, setCount] = useState(0); 
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
  
    <div className="grid grid-cols-2 text-center space-x-1">
      <div className='ml-20 pl-20'>
        <h4 className="text-xl">{children}</h4> 
      </div>
      <div className='mr-20 pr-20'>
        <button onClick={decrement} className="rounded-lg bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-3 py-2">  - </button>
        <span className="mx-2 text-xl" >{count}</span> 
        <button onClick={increment} className="rounded-lg bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-3 py-2"> + </button>
      </div>
    </div>

  </div>
  );
};

export default CounterBtn;