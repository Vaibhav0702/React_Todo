import React from "react";
import "./taskHeader.css";

const TaskHeader = ({ tasks }) => {


  let totalTask = tasks.length;

  let uc = tasks.filter((el) => {

    return el.done !== true

  })

  let unCompletedTask = uc.length;



  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className="taskHeader">
      <h2>Todo List 🥰 </h2>
      <b data-testid="header-remaining-task">You have {unCompletedTask} of </b>
      <b data-testid="header-total-task">{totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
