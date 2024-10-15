import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

// function keeperNote() {
//   <Note key={notes.key} title={notes.title} content={notes.content} />;
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map((notes) => (
        <Note key={notes.key} title={notes.title} content={notes.content} />
      ))}
      ;{/* <Note /> */}
      <Footer />
    </div>
  );
}

export default App;
