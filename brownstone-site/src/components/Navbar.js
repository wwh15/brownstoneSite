import React, { useState } from 'react';
import logo from '../pictures/Brownstone-crest.jpg';
import '../styling/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
  <div className="navbar-left">
    <div className="logo">
      <img className="logo-image" src={logo} alt="Logo" />
      <h1 className="logo-text">BROWNSTONE</h1>
    </div>
  </div>

  <div className="navbar-right">
    {!isOpen && 
      <ul className='nav-links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#rush">Rush</a></li>
      </ul>
    }
    
    <div className='dropdown'>
      <button className="dropdown-button" onClick={toggleDropdown}>
        ☰
      </button>
      {isOpen &&
        <ul className={'dropdown-menu'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#rush">Rush</a></li>
        </ul>
      }
    </div>
  </div>
</nav>

  );
};

export default Navbar;


