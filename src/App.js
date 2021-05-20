import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import ProductsList from "./components/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";

import { IntlProvider } from "react-intl";

const App = () => {
  const [wishList, setWishList] = useState([]);

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <div className="App">
        <div className="container">
          <Sidebar />
          <ProductsList setWishList={setWishList} wishList={wishList} />
        </div>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
