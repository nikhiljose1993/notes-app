import React from "react";

const Note = ({ title, note }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{note}</p>
    </div>
  );
};

export default Note;
