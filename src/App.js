import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import ProductsList from "./components/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="products">
          <Sidebar />
          <ProductsList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
