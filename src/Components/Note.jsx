import React from "react";
import { deleteNote } from "../utility/Api";

const Note = ({ title, note, id, updateId, refreshNotes }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{note}</p>
      <button
        onClick={async () => {
          await deleteNote(id);
          refreshNotes();
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          updateId(id);
        }}
      >
        EDIT
      </button>
    </div>
  );
};

export default Note;
