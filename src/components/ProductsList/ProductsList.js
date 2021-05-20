import React, { useState } from "react";
import Product from "../Product/Product";
import "./ProductsList.css";
import { products } from "../../data/productsData";
import Pagination from "../Pagination/Pagination";

const ProductsList = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="products">
      <div className="products__list">
        {currentProducts.map((product) => (
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
      <div className="products__pagination">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductsList;
