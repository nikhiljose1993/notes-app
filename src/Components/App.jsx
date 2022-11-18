import React, { Fragment, useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getNotes } from "../utility/Api";
import EditNote from "./EditNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [i, setI] = useState();

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data.notes);
  };

  const updateId = (id) => {
    setI(id);
  };

  // useEffect with empty dependancy array will be called on first render of the component file.
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment>
      <Header />
      <CreateArea refreshNotes={fetchNotes} />
      {notes.map((note, index) =>
        i !== note._id ? (
          <Note
            key={index}
            id={note._id}
            title={note.title}
            note={note.content}
            updateId={updateId}
            refreshNotes={fetchNotes}
          />
        ) : (
          <EditNote
            key={note._id}
            note={note}
            refreshNotes={fetchNotes}
            updateId={updateId}
          />
        )
      )}

      <Footer />
    </Fragment>
  );
};

export default App;
