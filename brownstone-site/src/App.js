import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/homeComponents/Body';
import QuoteSlides from './components/homeComponents/QuoteSlides';
import PhotoWall from './components/homeComponents/PhotoWall';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <QuoteSlides />
      <PhotoWall />
      <Footer />
    </div>
  );
}

export default App;
