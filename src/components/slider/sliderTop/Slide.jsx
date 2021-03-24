import React from 'react';
import css from './Slide.module.scss';

const Slide = ({ img, color }) => {
  return (
    <div className={css.container}>
        <img className={css.content} style={{ background: color }} src={img} alt=""/>
    </div>
  );
};

export default Slide;