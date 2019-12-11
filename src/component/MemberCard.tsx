import React from 'react';
import "./MemberCard.scss";

const MemberCard = (props: { name: string, role: string, imageSource: string, comment: string }) => {
  return (
    <div className="MemberCard">
      <div className="MemberCard__image">
        <img alt={props.name} src={props.imageSource} />
      </div>
      <div className="MemberCard__section">
        <h3 className="MemberCard__name">{props.name}</h3>
        <h4 className="MemberCard__role">{props.role}</h4>
        <section className="MemberCard__comment">{props.comment}</section>
      </div>
    </div>
  )
}

export { MemberCard };