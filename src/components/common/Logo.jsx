import React from "react";
import PropTypes from "prop-types";

import logo from "./../../assets/img/logo.svg";
import {Link} from "react-router-dom";

function Logo(props) {
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

Logo.propTypes = {};

export default Logo;
