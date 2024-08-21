import React from 'react';
import Carousel from 'react-multi-carousel';
import Quote from './Quote';
import 'react-multi-carousel/lib/styles.css';
import '../../styling/quoteSlide.css'




const QuoteSlides = () => {
   const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      className='quoteSlides'
    >
      <Quote className='quote' name="will" quote="this my quote"/>
      <div className='quote'>Item 2</div>
      <div className='quote'>Item 3</div>
      <div className='quote'>Item 4</div>
    </Carousel>
  );
};

export default QuoteSlides;
