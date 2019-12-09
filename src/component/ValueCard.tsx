import React from 'react';
import './ValueCard.scss';

const ValueCard = (props: { title: string, imageSource: string, description: string }) => {
  return (
    <div className="ValueCard">
      <div className="ValueCard__image">
        <img src={props.imageSource} />
      </div>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}

export { ValueCard }