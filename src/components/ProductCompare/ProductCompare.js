import React from "react";
import Product from "../Product/Product";

const ProductCompare = ({ toCompare }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {toCompare.map((tc) => (
        <Product
          tag={tc.tag}
          brand={tc.brand}
          title={tc.title}
          price={tc.price}
          formerPrice={tc.formerPrice}
          additionalInfo={tc.additionalInfo}
          rating={tc.rating}
          toCompare={toCompare}
          fromCompare={true}
        />
      ))}
    </div>
  );
};

export default ProductCompare;
