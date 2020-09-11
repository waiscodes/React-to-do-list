import React, { useState } from "react";
//useState needs to be improted from react. useState is a state management tool.

function ToRead() {
  //This is an assignment deconstructor. The first item is set to the first value, and the second variable is the second value. It essentially asigns multiple variables at once.
  const [newBook, setNewBook] = useState("default"); //The argument in useState("") is the default value for this state.
  //There's magic behind the scenes.
  // The empty tags is called a JSX fragement. It means nothing but it allows you to have only one parent element.
  return (
    <>
      <form>
        <label htmlFor="newBook">New Book: </label>
        <input
          type="text"
          id="newBook"
          onChange={(e) => {
            setNewBook(e.target.value);
          }}
          value={newBook}
        />
        <input type="submit" value="Add To-Read" />
      </form>
      <ul></ul>
    </>
  );
}
// .taget targets that element.
// onChange updates in real time. it's useful for things like real time search on google for example.
export default ToRead;
