import React from 'react';
import { Link } from 'react-router-dom';

function NormalBtn ({ href, children }){
  return (
    <button className="rounded-full ring ring-cyan-500 bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-5 py-3"><Link to={href}>{children}</Link></button>
    
  );
};

export default NormalBtn;