import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-id-swiper";
import 'swiper/swiper.scss';
import Slide from './Slide';

import data from "./../../../server/data/data.json";
import SliderImg from '../../../assets/img/2dec6f12aa52c01e73810295a8bbd30f_fit_1515_0_center.png'

function SliderTop(props) {
    
  const params = {
      slidesPerView: 1,
    };

  

  return (
    <>
      <div className="kreo-title">
        <div className="container">
          Сытый ниндзя - доставка суши Ивантеевка, Пушкино, Щелково
        </div>
      </div>

      <Swiper {...params}>
        {data.map((item, idx) => (
          <div key={idx}>
            <Slide color={item.color} img={SliderImg}/>
          </div>
        ))}
      </Swiper>
    </>
  );
}

SliderTop.propTypes = {};

export default SliderTop;
