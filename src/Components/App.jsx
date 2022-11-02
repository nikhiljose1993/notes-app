import React, { Fragment, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note, index) => {
      return index !== id;
    });
    setNotes(newNotes);
  };

  return (
    <Fragment>
      <Header />
      <CreateArea notes={notes} setNotes={setNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          note={note.content}
          onPress={deleteNote}
        />
      ))}
      <Footer />
    </Fragment>
  );
};

export default App;
