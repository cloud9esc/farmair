import React from 'react';
import "./People.scss";

import { PageTitle } from './PageTitle';
import { MemberCard } from './MemberCard';

const People = () => {
  return (
    <div className="People">
      <div className="container">
        <div className="row">
          <div className="Service__pagetitle col-1">
            <PageTitle title="PEOPLE" />
          </div>
          <div className="col-10">
            {members.map(member => (
              <React.Fragment key={member.name}>
                <MemberCard
                  name={member.name}
                  role={member.role}
                  imageSource={member.imageSource}
                  comment={member.comment} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

const members = [
  {
    name: "박상국",
    role: "CEO",
    imageSource: "/static/asset/parksanggook.jpg",
    comment: "",
  },
  {
    name: "임현진",
    role: "Back-end Developer",
    imageSource: "/static/asset/imhyunjin.jpeg",
    comment: "",
  },
  {
    name: "유지혜",
    role: "Manager",
    imageSource: "/static/asset/yoojihye.jpeg",
    comment: "",
  }
]

export { People };