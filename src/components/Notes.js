import React from "react";

import Note from "./Note";

export default function List(props) {
  return props.notes.map(note => (
    <Note
      key={note.id}
      note={note}
      handleDelete={props.handleDelete}
      handleEdit={props.handleEdit}
    />
  ));
}
