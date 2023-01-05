import { React, useRef } from "react";


const Task = ({ received , delTask}) => {




    return (
        <div className='task_group'>
        <p>{received.task}</p>
         <button onClick={()=> delTask(received.id)}>Del</button>
       </div>
    )
};

export default Task;