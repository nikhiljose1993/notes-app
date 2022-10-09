import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Note />
      <Footer />
    </Fragment>
  );
};

export default App;
