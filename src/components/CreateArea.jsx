import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  //Called when button click
  function submitNote(event) {
    //Passes over function addNote() to App.jsx, found in CreateArea component

    props.onAdd(text);
    event.preventDefault();

    //Set default text placeholder after Note is submitted
    setText({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
