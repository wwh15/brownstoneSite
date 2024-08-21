import React, { useState } from 'react';
import insta from '../pictures/insta logo.png'
import '../styling/footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <p className='footerText'>FOLLOW US @BROWNSTONE.IG</p>
            <a href='https://www.instagram.com/brownstone.ig/'><img className='footerImage' src={insta} alt='insta logo'/></a>
        </div>
    );
  };
  
  export default Footer;
  