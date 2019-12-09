import React from 'react';
import './Service.scss';

import { PageTitle } from './PageTitle';

const Service = () => {
  return (
    <div className="Service">
      <div className="container">
        <div className="row">
          <div className="Service__pagetitle col-1">
            <PageTitle title="SERVICE" />
          </div>
          <div className="col-10">
            <h3 className="Service__title">TERRAN</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Service};