import React from "react";
import "./Footer.css";

const Footer = ({ toCompare, setShowFooter, setModalOpened }) => {
  const remainingToCompare = 3 - toCompare.length;

  return (
    <div className="footer">
      <p>Seleziona altri {remainingToCompare} prodotti per confrontarli</p>
      <button
        onClick={() => {
          setModalOpened(true);
          setShowFooter(false);
        }}
      >
        Confronta
      </button>
    </div>
  );
};

export default Footer;
