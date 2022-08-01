import React from "react";
import "./counter.css";

const Counter = ({ task, tasks, up }) => {



  const updatingC = (value) => {

    for (var j = 0; j < tasks.length; j++)
     {
         if (tasks[j].id === task.id) 
         {
            if (tasks[j].count > 0)
             {
                 let ans = [...tasks]
                 ans[j].count += value
                  return up(ans)
              }



          }
    }


  }
  return (
    <div className="counter">

      <button onClick={() => updatingC(1)} data-testid="task-counter-increment-button">+</button>

      <span data-testid="task-counter-value">{task.count}</span>

      <button onClick={() => updatingC(-1)} data-testid="task-counter-decrement-button">-</button>


    </div>
  );
};

export default Counter;
