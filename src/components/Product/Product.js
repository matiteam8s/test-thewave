/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import "./Product.css";
import { ReactComponent as HeartFull } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartEmpty } from "../../assets/icons/heart_gray.svg";
import StarRating from "../Sidebar/StarRating/StarRating";
import { FormattedNumber } from "react-intl";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const Product = ({
  tag,
  brand,
  title,
  price,
  formerPrice,
  additionalInfo,
  rating,
}) => {
  const [compare, setCompare] = useState(false);

  const handleChange = (event) => {
    setCompare((compare) => !compare);
  };

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
        <p className="product__description">{title}</p>
        <div className="product__price">
          <h2 className="product__priceNew">
            <FormattedNumber value={price} style="currency" currency="EUR" />
          </h2>
          <h4 className="product__priceOld">
            <FormattedNumber
              value={formerPrice}
              style="currency"
              currency="EUR"
            />
          </h4>
        </div>
        <p className="product__additionalInfo">{additionalInfo}</p>
        <div className="product__ratingRow">
          <StarRating rating={rating} />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                checked={compare}
                name="confronta"
                color="#B5B5B5"
              />
            }
            label="CONFRONTA"
            labelPlacement="start"
            className="product__confronta"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
