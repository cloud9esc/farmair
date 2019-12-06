import React from 'react';
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="Header" >
        <div className="container">
          <div className="row">
            <div className="Header__logo col-2">
              <img
                alt="logo with typo"
                src="/static/asset/logo_onlytypo.svg"
              />
            </div>
            <div className="Header__menu offset-4 col-6">
              <ul>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>PEOPLE</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Header };