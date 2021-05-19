import React from "react";
import "./StarRating.css";

const StarRating = ({ rating, quantity }) => {
  const maxStars = 5;

  const starPercentage = (rating / maxStars) * 100;

  // Round the percentage
  const starPercentageRounded = Math.round(starPercentage);

  const StarStyles = () => {
    return {
      width: starPercentageRounded + "%",
    };
  };

  return (
    <div className="stars-outlined">
      <div className="stars-filled" style={StarStyles()}></div>(
      {quantity && quantity})
    </div>
  );
};

export default StarRating;
