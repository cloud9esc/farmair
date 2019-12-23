import React from 'react';
import './About.scss';

import { PageTitle } from './PageTitle';
import { ValueCard } from './ValueCard';
import { cards } from "../info";

function About() {
  return (
    <div className="About" id="about">
      <div className="container">
        <div className="row">
          <div className="About__title col-1">
            <PageTitle title="ABOUT" />
          </div>
          <div className="About__cards col-10" >
            <div className="row">
              
            {cards.map(item => (
              <div key={item.title} className="col-12 col-lg-6 col-xl-3">
                <ValueCard
                  title={item.title}
                  imageSource={item.imageSource}
                  description={item.description} />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export { About, PageTitle }
