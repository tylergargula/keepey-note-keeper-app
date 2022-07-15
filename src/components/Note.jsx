import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Note(props) {
  // function is called when DELETE is clicked
  function handleClick() {
    //passes id to deleteNote() function
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}

export default Note;
