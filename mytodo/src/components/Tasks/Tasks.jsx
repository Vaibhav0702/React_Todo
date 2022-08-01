import React from "react";
import "./tasks.css";
import Task from "../Task/Task"


const Tasks = ({ tasks, func }) => {

  return (
    <>

      {
        tasks.length !== 0 ?

          <ul data-testid="tasks" className="tasks">

            {
              tasks.length !== 0 ? tasks.map((e) => {
                return <Task key={e.id} task={e} tasks={tasks} update={func} />
              }) : null
            }

          </ul>

          :

          <div data-testid="tasks-empty" className="empty">

            {tasks.length === 0 ? <h1>Empty</h1> : null}


          </div>

      }




    </>
  );
};

export default Tasks;
