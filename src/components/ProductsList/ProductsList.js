import React from "react";
import Product from "../Product/Product";
import "./ProductsList.css";
import { products } from "../../data/productsData";

const ProductsList = () => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          tag={product.tag}
          brand={product.brand}
          title={product.title}
          price={product.price}
          formerPrice={product.formerPrice}
          additionalInfo={product.additionalInfo}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductsList;
