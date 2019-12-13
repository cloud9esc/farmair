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
          <div className="People__pagetitle col-1">
            <PageTitle title="PEOPLE" />
          </div>
          <div className="col-10 People__cards">
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


export { People };