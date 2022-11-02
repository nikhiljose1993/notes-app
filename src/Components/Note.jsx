import React from "react";

const Note = ({ title, note, id, onPress }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{note}</p>
      <button
        onClick={() => {
          onPress(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default Note;
