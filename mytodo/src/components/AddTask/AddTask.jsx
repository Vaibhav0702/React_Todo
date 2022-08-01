import React, { useState } from "react";
import  "./addTask.css";

const AddTask = ({ func, tasks }) => {
  // NOTE: do not delete `data-testid` key value pair


  const [text, setText] = useState({
    id: null,
    text: "",
    done: false,
    count: 1
  })


  console.log(text.id)


  const uptext = (value) => {
    
    setText({
      ...text,
      text: value
    })


  }

  return (
    <div className="todoForm">

      <input onChange={(e) => uptext(e.target.value)} data-testid="add-task-input" type="text" />

      <button onClick={(() => {
        setText({
          ...text,
          id: tasks.length + 1
        })
        func([...tasks, text])
      })} data-testid="add-task-button">+</button>


    </div>
  );
};

export default AddTask;
