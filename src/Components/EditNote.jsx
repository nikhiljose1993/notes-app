import React, { useEffect, useState } from "react";
import { updateNote } from "../utility/Api";

const EditNote = ({ note, refreshNotes, updateId }) => {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNote((newNote) => ({ ...newNote, [name]: value }));
  };

  useEffect(() => {
    setNewNote(note);
  }, [note]);

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
          placeholder="Take a newNote..."
          rows="4"
          value={newNote.content}
        />
        <button
          onClick={async (event) => {
            await updateNote(newNote);
            updateId(null);
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
