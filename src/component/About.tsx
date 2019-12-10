import React from 'react';
import './About.scss';

import { PageTitle } from './PageTitle';
import { ValueCard } from './ValueCard';

function About() {
  return (
    <div className="About">
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


const cards = [
  {
    title: "미션",
    imageSource: "/static/asset/mission.jpg",
    description: "정보기술을 기반으로 1차 산업 재해석 및 지속 가능한 발전을 추구한다.",
  }, {
    title: "핵심 가치",
    imageSource: "/static/asset/corevalue.jpg",
    description: "품위 있는 이윤 추구.\n이윤을 추구하는 과정과 결과에 있어서 사회적으로 존경받을 수 있는 선택을 한다.",
  }, {
    title: "인재상",
    imageSource: "/static/asset/humanresource.jpg",
    description: "공감하는 인재\n열정적인 인재\n상호 존중하는 인재\n유머감각이 있는 인재",
  }, {
    title: "비전",
    imageSource: "/static/asset/vision.jpg",
    description: "미정",
  }
]