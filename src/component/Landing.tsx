import React from 'react';
import "./Landing.scss";

function Landing() {
  return (
    <div className="Landing container">
      <div className="row">
        <div className="offset-1 col-10 col-lg-5 Landing__title">
          <p>정보기술을 기반으로<br />1차 산업 재해석 및<br />지속 가능한 발전을 추구합니다.</p>
        </div>
        <div className="col-12 col-lg-6 Landing__image">
          <img alt="farm" src="/static/asset/main_big.png" />
        </div>
      </div>
    </div>
  )
}

export { Landing };