import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

import Swiper from "react-id-swiper";
import 'swiper/swiper.scss';
import Slide from './Slide';


function SliderPopular(props) {

    const items = useSelector(({ sliderNew }) => sliderNew.items);
    
  const params = {
       spaceBetween: 30,
       slidesPerView: 4,
    };


  return (
    <div className='wrapper'>
        <div className="content">
            <div className="container">
                <h2>Новинки</h2>
            </div>
        </div>
      <Swiper {...params}>
        {items.map((item, idx) => (
          <div key={idx}>
            <Slide {...item}/>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

SliderPopular.propTypes = {};


export default SliderPopular;

