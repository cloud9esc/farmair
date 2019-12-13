import React from 'react';
import './ValueCard.scss';

const ValueCard = (props: { title: string, imageSource: string, description: string[] }) => {
  return (
    <div className="ValueCard">
      <div className="ValueCard__image">
        <img src={props.imageSource} alt={props.title} />
      </div>
      <div className="ValueCard__types">
        <h5>{props.title}</h5>
        <div className="ValueCard__description">{props.description.map(item => (
          <div key={item} >{item}</div>
        ))}</div>
      </div>
    </div>
  )
}

export { ValueCard }