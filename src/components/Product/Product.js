import React from "react";
import "./Product.css";
import { ReactComponent as HeartFull } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartEmpty } from "../../assets/icons/heart_gray.svg";

const Product = () => {
  return (
    <div className="product">
      <div className="product__media">
        <img src="../../assets/boiler.png" alt="" />
        <div className="product__tag">Risparmi il 20%</div>
        <HeartEmpty />
      </div>
      <div className="product__info">
        <h3 className="product__brand">Ariston</h3>
        <p>Matis condens - Condensing Boiler 24 kW Methane - Indoor</p>
        <div className="product__price">
          <h2 className="product__priceNew">$1350,00 EUR</h2>
          <h4 className="product__priceOld">1570,00 EUR</h4>
        </div>
        <p className="product__additionalInfo">
          Sopralluogo e installazione inclusi
        </p>
      </div>
    </div>
  );
};

export default Product;
