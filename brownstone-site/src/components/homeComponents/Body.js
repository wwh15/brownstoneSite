import React from 'react';
import banner from '../../pictures/Brownstone-banner.jpeg'
import '../../styling/body.css'

const Body = () => {
  return (
    <div className="body">
      <div className="header">
        <img src={banner} className="banner"></img>
        <h1 className="banner-title">Selective Living Group @ Duke</h1>
      </div>
      <div className="description">
        <p>
          BROWNSTONE is a Selective Living Group at Duke University, currently located
          in Kilgo J on West Campus. Members are selected during their freshman or
          sophomore year through a rush process. During the year, we love to hang out
          with our hallmates, engage in activities on campus and within the dorm, and
          just have a good time!
        </p>
      </div>
    </div>
  );
};

export default Body;
