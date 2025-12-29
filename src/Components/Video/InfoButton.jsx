import React from "react";
import { Link } from "react-router-dom";

function InfoButton() {
  return (
    <Link to="/about" className="request-loader">
      <i className="fa-solid fa-circle-info"></i>
    </Link>
  );
}

export default InfoButton;