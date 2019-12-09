import React from 'react';
import './About.scss';

import { PageTitle } from './PageTitle';

function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="About__title col-1">
            <PageTitle title="ABOUT" />
          </div>
          <div className="col-10">boxes</div>
        </div>
      </div>
    </div>
  )
}


export { About, PageTitle }
