import React, { Fragment, useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getNotes } from "../utility/Api";
import EditNote from "./EditNote";
import Loader from "./Loader";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    const res = await getNotes();
    console.log("note imside app", res.data.notes);
    setNotes(res.data.notes);
    setLoading(false);
  };

  // useEffect with empty dependancy array will be called on first render of the component file.
  useEffect(() => {
    setLoading(true);
    fetchNotes();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <Header />
      <CreateArea refreshNotes={fetchNotes} setLoading={setLoading} />
      {notes.map((note, index) =>
        id !== note._id ? (
          <Note
            key={index}
            id={note._id}
            title={note.title}
            note={note.content}
            setId={setId}
            refreshNotes={fetchNotes}
            setLoading={setLoading}
          />
        ) : (
          <EditNote
            key={note._id}
            note={note}
            refreshNotes={fetchNotes}
            setId={setId}
            setLoading={setLoading}
          />
        )
      )}

      <Footer />
    </Fragment>
  );
};

export default App;
