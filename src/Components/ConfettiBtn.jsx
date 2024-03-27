import React from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';


function ConfettiBtn ({ href, children }){
  const blow =()=>{
    confetti({
      particleCount: 400,
      spread: 100,
      origin: { y:0.5, x:0.5 }
    });

  }
  return (
    <Link to={href}><button className="rounded-full ring ring-cyan-500 bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-5 py-3"onMouseEnter={blow}>{children}</button></Link>
    
  );
};

export default ConfettiBtn;