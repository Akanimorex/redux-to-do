import logo from './logo.svg';
import {React, useState} from 'react';
import './App.css';
import data from "./utis/data.json";
import Task from './components/Task';

function App() {
  const [tasks, setTask] = useState(data);

  const [userInput, setUserInput ] = useState('');

  // const data = [];

  
  const pushTask = ( userInput ) => {
    let copy = [...tasks];
    // data.push(tasks);
    copy.push({id:tasks.length + 1 , task:userInput, complete:false });
    setTask(copy);
    // setTask(userInput);
    // setUserInput("");
    
  }
  return (
    <div className="App">
      {/* {console.log(data,"DATA")} */}
      <div className="outline">
        <h2> To do list</h2>
        <div className='outline_group'>
          <input value={userInput}  onChange={ (e)=> setUserInput(e.target.value)} type="text" />
          <button onClick={()=> pushTask(userInput)} >Add</button>
        </div>
        { 
        // console.log(tasks)
         tasks.map((task)=>{
          return (
            <Task key={task.id} received={task}/>

          )
        })
        }
      </div>
    </div>
  );
}

export default App;
