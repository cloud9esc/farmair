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
          <div className="col-10">
            <div className="About__cards" >
              {cards.map(item => (
                <React.Fragment key={item.title}>
                  <ValueCard
                    title={item.title}
                    imageSource={item.imageSource}
                    description={item.description} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export { About, PageTitle }
