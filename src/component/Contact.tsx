import React from 'react';
import "./Contact.scss";
import { PageTitle } from './PageTitle';

const Contact = () => {
  return(
    <div className="Contact">
      <div className="container">
        <div className="row">
          <div className="Contact__pagetitle col-1">
            <PageTitle title="CONTACT" />
          </div>
          <div className="col-10">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contact };