import React from "react";
import PropTypes from "prop-types";

function Copyraiter(props) {
  return (
    <div className="footer__bottom-info">
      <p className="copy">
        <span className="footer-logo">Сытый Ниндзя</span> © 2021
      </p>
      <ul className="footer__bottom-list">
        <li className="item">
          <a className="footer__top-link" href="">
            Политика конфиденциальности
          </a>
        </li>
        <li className="item">
          <a className="footer__top-link" href="">
            Пользовательское соглашение
          </a>
        </li>
        <li className="item">
          <a className="footer__top-link" href="">
            Помощь
          </a>
        </li>
      </ul>
    </div>
  );
}

Copyraiter.propTypes = {};

export default Copyraiter;
