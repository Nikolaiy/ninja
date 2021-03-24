import React from "react";
import PropTypes from "prop-types";

import Copyraiter from './Copyraiter';

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="wrapper">
            <div className="footer__bottom">
              <div className="footer__top">
                <div className="footer__wrap">
                  <div className="footer__top-block">
                    <div className="footer__top-title">Информация</div>
                    <ul className="footer__top-list">
                      <li className="item">
                        <a className="footer__top-link" href="">
                          Акции и бонусы
                        </a>
                      </li>
                      <li className="item">
                        <a className="footer__top-link" href="">
                          Контакты
                        </a>
                      </li>
                      <li className="item">
                        <a className="footer__top-link" href="">
                          Доставка и оплата
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__top-block">
                    <ul className="footer__top-social social-list">
                      <li className="item">
                        <a
                          href="https://vk.com/full_ninja"
                          target="_blink"
                          className="footer__top-link"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="item">
                        <a href="" target="_blink" className="footer__top-link">
                          <i className="fab fa-vk"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="footer__top-block footer__contact">
                  <div className="footer__top-phone">
                    <a className="footer__top-number" href="tel:84951434303">
                      8(495) 143-43-03
                    </a>
                    <p className="footer__top-text">Звонок бесплатный</p>
                    <a className="footer__top-link" href="">
                      test@mail.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Copyraiter />
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
