import React, { useState } from "react";
import { sendNote } from "../utility/Api";

function CreateArea({ refreshNotes }) {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((note) => ({ ...note, [name]: value }));
  };

  return (
    <div className="create-area">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Enter a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={async () => {
            if (note.title?.trim() !== "" && note.content?.trim() !== "") {
              await sendNote(note);
              refreshNotes();
              setNote({ title: "", content: "" });
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
