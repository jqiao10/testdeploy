import React from 'react';
import { FaLinkedin,FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";

const Footer = () => {
  return (
        <div className="footer">
        <div className="footer-section">
        <a href="/terms-of-use">Terms of Use</a>
        <a href="/privacy-and-terms">Privacy and Terms</a>
        <a href="/about-us">About Us</a>
        </div>
        <div className="footer-section company">
        <span>2024 EZRest Inc. </span>
        </div>
        <div className="footer-section">
        <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color='blue' /></a>
        <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={30} color='blue'/> 
        </a>

        <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare size={30} color='lightblue'/> 
        </a>
        <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer">
        <FaYoutubeSquare size={30} color='red'/>
        </a> 
        <a href="/contact-us" >Contact Us</a>
        </div>
        </div>
  );
};

export default Footer;
