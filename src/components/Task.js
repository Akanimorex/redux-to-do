import React from "react";

const Task = ({ received }) => {
    return (
        <div className='task_group'>
        <p>{received.task}</p>
         <button>Del</button>
       </div>
    )
};

export default Task;