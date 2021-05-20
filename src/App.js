import React, { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import ProductsList from "./components/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";
import Modal from "@material-ui/core/Modal";
import ProductCompare from "./components/ProductCompare/ProductCompare";
import { IntlProvider } from "react-intl";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    // width: "80%",
    top: "25%",
    left: "25%",
    background: "#FFF",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const App = () => {
  const classes = useStyles();
  const [toCompare, setToCompare] = useState([]);
  const [showFooter, setShowFooter] = useState(true);
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <div className="App">
        <div className="container">
          <Sidebar />
          <ProductsList toCompare={toCompare} setToCompare={setToCompare} />
        </div>
        {toCompare.length > 0 && showFooter && (
          <Footer
            toCompare={toCompare}
            setShowFooter={setShowFooter}
            setModalOpened={setModalOpened}
          />
        )}
        <Modal
          open={modalOpened}
          onClose={() => {
            setModalOpened(false);
            setToCompare([]);
          }}
        >
          <div className={classes.modal}>
            <ProductCompare toCompare={toCompare} />
          </div>
        </Modal>
      </div>
    </IntlProvider>
  );
};

export default App;
