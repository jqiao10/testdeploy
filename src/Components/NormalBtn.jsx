import React from 'react';
import { Button } from 'react-bootstrap';


function NormalBtn ({ href, children }){
  return (
    <Button className="landlordButton" size="lg" href={href}>{children}</Button>
    
  );
};

export default NormalBtn;