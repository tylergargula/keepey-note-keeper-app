import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  //newNote is received from onAdd(text) in CreateArea.jsx...
  // 'text' turns into 'newNote'
  function addNote(newNote) {
    // loops through array for prevNotes from setNotes state
    setNotes((prevNotes) => {
      // returns all prevNotes and newNote values from addNote()
      return [...prevNotes, newNote];
    });
  }

  // receives id from onDelete() found in Note.jsx
  function deleteNote(id) {
    setNotes((prevNotes) => {
      // loops through array and returns prevNotes with index
      // that don't match the id of prevNotes
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* notes component mapped from setNotes(), note is now called 'noteItem' */}
      {notes.map((noteItem, index) => {
        return (
          <>
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          </>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
