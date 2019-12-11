import React from 'react';
import "./People.scss";

import { PageTitle } from './PageTitle';

const People = () => {
  return (
    <div className="People">
      <div className="container">
        <div className="row">
          <div className="Service__pagetitle col-1">
            <PageTitle title="PEOPLE" />
          </div>
          <div className="col-10">

          </div>
        </div>
      </div>
    </div>
  )
};

export { People };