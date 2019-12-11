import React from 'react';

import "./ServiceCarousel.scss";

import Slider from "react-slick";

class ServiceCarousel extends React.Component {
  render() {
    const settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }
    return (
      <div className="ServiceCarousel">
        <Slider {...settings}>
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h1>2</h1>
          </div>
          <div>
            <h1>3</h1>
          </div>
          <div>
            <h1>4</h1>
          </div>
        </Slider>
      </div>
    )
  }
}

export { ServiceCarousel };