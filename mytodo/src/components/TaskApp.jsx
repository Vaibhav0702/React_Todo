import React from "react";

import data from "../data/tasks.json"

import AddTask from "../components/AddTask/AddTask"

import TaskHeader from "./TaskHeader/TaskHeader"

import Tasks from "./Tasks/Tasks"

import "./tasksapp.css"

import { useState } from "react";

const TaskApp = () => {

  console.log(data)

  const [taskData, setTaskdata] = useState(data);




  return (

    <div data-testid="task-app" className="tasksApp">

      <TaskHeader tasks={taskData} />


      <AddTask func={setTaskdata} tasks={taskData} />


      <Tasks tasks={taskData} func={setTaskdata} />


    </div>
  );
};

export default TaskApp;
