import React, { useState } from "react";

// Component function.
function ToDo() {
  /*
      // Assignment deconstructor (Array.)
      const [num1, num2] = [1, 2];
      console.log( num1 );
      console.log( num2 );
    */

  /**
   * Set up for state.
   * First item is a variable that holds the state value.
   * Second item is a function that we use to update the state value.
   * !!! IMPORTANT: We never update the first item DIRECTLY EVER.
   */
  const [newTask, setNewTask] = useState("default"); // Argument in "useState()" is the default value for this state.

  // Set up state for our to-do list items.
  const [toDos, setToDos] = useState([
    // Default list of to-dos.
    { task: "Buy milk" },
    { task: "Learn React" },
    { task: "Find out what Redux is" },
  ]);

  // Function we can use for our "onSubmit" form event.
  const addNewTask = (event) => {
    // Don't let the page reload for the submission! Let's prevent that default action.
    event.preventDefault();
    // We can use the spread operator to break up an array
    //each item inside is treated as an argument (value sperated by commas, we write it manually)
    const newToDosList = [...toDos]; //Fresh array with the same values from our state.
    // !!! We never update the state variable directly.
    // This is an object because the format we're using is an object. And you want to match formats.
    // And because that's how to method is going to read it.
    newToDosList.push({ task: newTask });

    //Update the state we need update the second variable
    setToDos(newToDosList);

    setNewTask("");
  };

  // We use "return" for our render, in a component.
  return (
    <>
      <form onSubmit={addNewTask}>
        <label htmlFor="task">New Task:</label>
        <input
          type="text"
          id="task"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          value={newTask}
        />
        <p>
          <strong>Current Task Value: </strong>
          <em>{newTask}</em>
        </p>
        <input type="submit" value="Add To-Do" />
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo.task}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;
