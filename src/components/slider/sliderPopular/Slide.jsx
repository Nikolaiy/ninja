import React from 'react';

const Slide = (item) => {
  return (
      <div className="slider__cart">
        <img src={item.imageUrl} alt="" />
        <div className="slider__cart-descr">
          <h3 className="slider__cart-title">
            {item.name}
          </h3>
          <div className="slider__cart-price">
            от {item.price} Р
          </div>
        </div>
      </div>
  );
};

export default Slide;