import React from 'react';
import "./Header.scss";

class Header extends React.Component {

  scroll = (id: string) => {
    const elmnt = document.getElementById(id);
    if (elmnt !== null) {
      elmnt.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  render() {
    return (
      <div className="Header" >
        <div className="container">
          <div className="row">
            <button
              className="Header__logo col-12 col-lg-2"
              onClick={() => { this.scrollTop() }} >
              <img
                alt="logo with typo"
                src="/static/asset/logo_onlytypo.svg"
              />
            </button>
            <div className="Header__menu col-12 offset-lg-3 col-lg-7">
              <ul>
                <li>
                  <button onClick={() => this.scroll("about")}>
                    ABOUT
                  </button>
                </li>
                <li><button onClick={() => this.scroll("service")}>
                  SERVICE
                  </button></li>
                <li><button onClick={() => this.scroll("people")}>
                  PEOPLE
                  </button></li>
                <li><button onClick={() => this.scroll("contact")}>
                  CONTACT
                  </button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Header };