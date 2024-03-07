import React from 'react';
import { Button } from 'react-bootstrap';
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
    <Button className="landlordButton" size="lg" href={href} onMouseEnter={blow}>{children}</Button>
    
  );
};

export default ConfettiBtn;