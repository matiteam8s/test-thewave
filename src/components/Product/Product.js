/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import "./Product.css";
import { ReactComponent as HeartFull } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartEmpty } from "../../assets/icons/heart_gray.svg";
import StarRating from "../Sidebar/StarRating/StarRating";
import { FormattedNumber } from "react-intl";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const Product = ({
  product,
  tag,
  brand,
  title,
  price,
  formerPrice,
  additionalInfo,
  rating,
  favorites,
  setFavorites,
}) => {
  const [compare, setCompare] = useState(false);

  const handleChange = (event) => {
    setCompare((compare) => !compare);
  };

  const addFavorite = (product) => {
    let favArray = favorites;
    const found = favorites.find((f) => f.id === product.id);

    if (found) {
      favArray = favorites.filter((f) => f.id !== product.id);
    } else {
      favArray = [...favorites, product];
    }

    setFavorites(favArray);
    localStorage.setItem("favorites", JSON.stringify(favArray));
  };

  return (
    <div className="product">
      <div
        className="product__image"
        style={{ backgroundImage: "url('boiler.png')" }}
      >
        <div className="product__tag">{tag}</div>
        {favorites && favorites.includes(product) ? (
          <HeartFull
            onClick={(e) => addFavorite(product)}
            className="product__favorite"
          />
        ) : (
          <HeartEmpty
            onClick={(e) => addFavorite(product)}
            className="product__favorite"
          />
        )}
      </div>
      <div className="product__info">
        <h3 className="product__brand">{brand}</h3>
        <p className="product__description">{title}</p>
        <div className="product__price">
          <h2
            className="product__priceNew"
            style={{ color: !formerPrice && "#461E7D" }}
          >
            <FormattedNumber value={price} style="currency" currency="EUR" />
          </h2>
          {formerPrice && (
            <h4 className="product__priceOld">
              <FormattedNumber
                value={formerPrice}
                style="currency"
                currency="EUR"
              />
            </h4>
          )}
        </div>
        <p
          className="product__additionalInfo"
          style={{ color: !formerPrice && "#461E7D" }}
        >
          {additionalInfo}
        </p>
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
