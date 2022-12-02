import React from "react";
import logo from "../../img/payment.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            consequuntur, quod quaerat quibusdam, sed maxime accusamus deserunt
            saepe placeat eaque vel ducimus cum quo distinctio! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Reprehenderit,
            consequuntur.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            consequuntur, quod quaerat quibusdam, sed maxime accusamus deserunt
            saepe placeat eaque vel ducimus cum quo distinctio! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Reprehenderit,
            consequuntur.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Mucstore</span>
          <span className="copyright">
            Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
