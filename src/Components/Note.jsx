import React from "react";
import { deleteNote } from "../utility/Api";

const Note = ({ title, note, id, setId, refreshNotes, setLoading }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{note}</p>
      <button
        onClick={async () => {
          setLoading(true);
          await deleteNote(id);
          refreshNotes();
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          setId(id);
        }}
      >
        EDIT
      </button>
    </div>
  );
};

export default Note;
