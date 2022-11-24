import React, { useState } from "react";
import { updateNote } from "../utility/Api";

const EditNote = ({ note, refreshNotes }) => {
  const [newNote, setNewNote] = useState(note);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNote((newNote) => ({ ...newNote, [name]: value }));
  };

  return (
    <div className="note">
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Edit Note..."
          rows="4"
          value={newNote.content}
        />
        <button
          onClick={async (event) => {
            await updateNote(newNote);
            refreshNotes();
          }}
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default EditNote;
