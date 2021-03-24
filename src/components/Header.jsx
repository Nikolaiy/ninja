import React from "react";
import PropTypes from "prop-types";

import Menu from './Menu'

import {Logo, ButtonAuth, City} from './common';

function Header(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header-top">
          <div className="header-wrap">
            <Logo />
            <div className="header__info">
              <div className="header-wrap__delivery">
                <City />
                <p>
                  Среднее время доставки 35 минут{" "}
                  <span> 10% скидка на самовынос </span>
                </p>
              </div>
              <div className="header-wrap__contact">
                <a className="header-wrap__phone" href="tel:8800000000">
                  8(495) 143-43-03
                </a>
                <p> Ежедневно с 10.00 до 23.00 </p>
              </div>
            </div>
          </div>
          <ButtonAuth />
          <Menu />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
