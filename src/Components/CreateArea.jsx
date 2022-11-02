import React, { useState } from "react";

function CreateArea({ notes, setNotes }) {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((note) => ({ ...note, [name]: value }));
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            if (note.title?.trim() !== "" && note.content?.trim() !== "") {
              setNotes([...notes, note]);
              setNote({ title: "", content: "" });
            }
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
