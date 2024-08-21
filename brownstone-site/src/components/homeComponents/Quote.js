import React from 'react';
import '../../styling/quoteSlide.css'

const Quote = ({ quote, name }) => {
    return (
      <div>
        <h3 className='quoteHeader'>Quotes from our members</h3>
        <p className='quote'> "{quote}" </p>
        <p className='signature'> {name} </p>
      </div>
    );
  };
  
  export default Quote;