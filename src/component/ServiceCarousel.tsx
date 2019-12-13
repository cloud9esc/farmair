import React from 'react';

import "./ServiceCarousel.scss";

import Slider from "react-slick";

class ServiceCarousel extends React.Component {
  slider: Slider | null | undefined;

  goNextSlide = () => {
    if (this.slider !== null && this.slider) {
      this.slider.slickNext();
    }
  }
  goPrevSlide = () => {
    if (this.slider !== null && this.slider) {
      this.slider.slickPrev();
    }
  }

  render() {
    const settings = {
      className: "slider",
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className="ServiceCarousel">
        <button
          onClick={() => this.goPrevSlide()}
          className="ServiceCarousel__button prev"
        >
          <img
            src="/static/asset/arrow_left.svg"
            alt="go to previous" />
        </button>
        <button
          onClick={() => this.goNextSlide()}
          className="ServiceCarousel__button next"
        >
          <img
            src="/static/asset/arrow_right.svg"
            alt="go to next" />
        </button>
        <Slider ref={el => { this.slider = el; }} {...settings}>
          <div className="ServiceCarousel__panel">
            <h1>1</h1>
          </div>
          <div className="ServiceCarousel__panel">
            <h1>2</h1>
          </div>
          <div className="ServiceCarousel__panel">
            <h1>3</h1>
          </div>
          <div className="ServiceCarousel__panel">
            <h1>4</h1>
          </div>
        </Slider>
      </div>
    )
  }
}

export { ServiceCarousel };