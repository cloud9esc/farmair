import React from 'react';

import "./ServiceCarousel.scss";

import Slider from "react-slick";
import { services } from '../info';

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
          {services.map(item => (
            <div className="ServiceCarousel__panel" key={item.title}>
              <h1 className="ServiceCarousel__title">{item.title}</h1>
              <div className="ServiceCarousel__section">
                <div className="ServiceCarousel__logo">
                  <img src={item.imageSource} alt={item.title} />
                </div>
                <div className="ServiceCarousel__description">{item.description.map((line, i) => (
                  <div key={i} >{line}</div>
                ))}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export { ServiceCarousel };