import React from 'react';
import "./People.scss";

import { PageTitle } from './PageTitle';
import { MemberCard } from './MemberCard';
import { members } from '../info';

const People = () => {
  return (
    <div className="People" id="people">
      <div className="container">
        <div className="row">
          <div className="People__pagetitle col-0 col-xl-1">
            <PageTitle title="PEOPLE" />
          </div>
          <div className="col-12 col-xl-10 People__cards">
            <div className="row">
            {members.map(member => (
              <div key={member.name} className="col-12 col-xl-6">
                <MemberCard
                  name={member.name}
                  role={member.role}
                  imageSource={member.imageSource}
                  comment={member.comment} />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export { People };