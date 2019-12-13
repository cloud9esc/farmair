import React from 'react';
import "./Contact.scss";
import { PageTitle } from './PageTitle';

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="Contact__pagetitle col-1">
            <PageTitle title="CONTACT" />
          </div>
          <div className="col-5">
            <img alt="map" src="/static/asset/adress.jpg" className="Contact__map" />
          </div>
          <div className="offset-1 col-4 Contact__text">
            <div className="Contact__title">LOCATION</div>
            <div className="Contact__info">
              <ul>
                <li className="Contact__bold">
                  서울특별시 마포구 월드컵로3길 55, 써니힐 204호
                </li>
                <li>
                  합정역 8번출구에서 도보로 8분 거리
                </li>
              </ul>
            </div>
            <div className="Contact__title">CONTACT</div>
            <div className="Contact__info">
              <ul>
                <li>
                  <span className="Contact__bold">TEL</span><span>02 6952 5225</span>
                </li>
                <li>
                  <span className="Contact__bold">FAX</span><span>070 8228 6858</span>
                </li>
                <li>
                  <span className="Contact__bold">E-MAIL</span><span>psnara@farmair.co</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contact };