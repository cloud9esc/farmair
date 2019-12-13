import React from 'react';
import './Service.scss';

import { PageTitle } from './PageTitle';
import { ServiceCarousel } from './ServiceCarousel';

const Service = () => {
  return (
    <div className="Service" id="service">
      <div className="container">
        <div className="row">
          <div className="Service__pagetitle col-1">
            <PageTitle title="SERVICE" />
          </div>
          <div className="Service__slide col-10">
            {/* <h3 className="Service__title">TERRAN</h3> */}
            <ServiceCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Service};