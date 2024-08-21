import React from 'react';
import wallPhoto1 from '../../pictures/wall photo 1.jpeg'
import wallPhoto2 from '../../pictures/wall photo 2.jpeg'
import wallPhoto3 from '../../pictures/wall photo 3.jpeg'
import wallPhoto4 from '../../pictures/wall photo 4.jpeg'
import wallPhoto5 from '../../pictures/wall photo 5.jpeg'
import wallPhoto6 from '../../pictures/wall photo 6.jpeg'
import wallPhoto7 from '../../pictures/wall photo 7.jpeg'
import wallPhoto8 from '../../pictures/wall photo 8.jpeg'
import wallPhoto9 from '../../pictures/wall photo 9.jpeg'
import wallPhoto10 from '../../pictures/wall photo 10.jpeg'
import '../../styling/photoWall.css'





const PhotoWall = () => {
  return (
    <div className="photo-wall">
      <div className="photos">
        <img src={wallPhoto1} alt="Photo 1" />
        <img src={wallPhoto2} alt="Photo 2" />
        <img src={wallPhoto3} alt="Photo 3" />
        <img src={wallPhoto4} alt="Photo 4" />
        <img src={wallPhoto5} alt="Photo 5" />
        <img src={wallPhoto6} alt="Photo 6" />
        <img src={wallPhoto7} alt="Photo 7" />
        <img src={wallPhoto8} alt="Photo 8" />
        <img src={wallPhoto9} alt="Photo 9" />
        <img src={wallPhoto10} alt="Photo 10" />
      </div>
    </div>
  );
};

export default PhotoWall;
