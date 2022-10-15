import React, { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const App = () => {
  return (
    <Fragment>
      <Header />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} note={note.content} />
      ))}
      <Footer />
    </Fragment>
  );
};

export default App;
