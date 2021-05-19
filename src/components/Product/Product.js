import React from "react";
import "./Product.css";
import { ReactComponent as HeartFull } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartEmpty } from "../../assets/icons/heart_gray.svg";
import StarRating from "../Sidebar/StarRating/StarRating";

const Product = ({
  tag,
  brand,
  title,
  price,
  formerPrice,
  additionalInfo,
  rating,
}) => {
  return (
    <div className="product">
      <div
        className="product__image"
        style={{ backgroundImage: "url('boiler.png')" }}
      >
        <div className="product__tag">{tag}</div>
        <HeartEmpty className="product__favorite" />
      </div>
      <div className="product__info">
        <h3 className="product__brand">{brand}</h3>
        <p>{title}</p>
        <div className="product__price">
          <h2 className="product__priceNew">{`$${price} EUR`}</h2>
          <h4 className="product__priceOld">{`$${formerPrice} EUR`}</h4>
        </div>
        <p className="product__additionalInfo">{additionalInfo}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

export default Product;
