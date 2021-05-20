import React from "react";
import "./StarRating.css";

const StarRating = ({ rating, quantity }) => {
  const maxStars = 5;

  const starPercentage = (rating / maxStars) * 100;

  const StarStyles = () => {
    return {
      width: starPercentage + "%",
    };
  };

  return (
    <>
      <div className="stars-outlined">
        <div className="stars-filled" style={StarStyles()}></div>
      </div>
      {quantity && <span>({quantity})</span>}
    </>
  );
};

export default StarRating;
