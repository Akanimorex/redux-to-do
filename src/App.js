import {React, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './utils/data.json';
import Task from './components/Task';
import { useDispatch , useSelector} from 'react-redux';
import { saveToDo } from './features/todoSlice';
import { selectTodoList } from './features/todoSlice';

function App() {
  const [tasks, setTask] = useState(data);
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  const [userInput, setUserInput ] = useState('');

  const pushTask = () => {
    console.log(`printing out this ${userInput}`);
    dispatch(saveToDo(
      {
        id:Date.now(), task:userInput, complete:false
       }
    ))
  }

  const delTask = (taskID) => {
    let copy = [...tasks];

    for (let i=0; i < copy.length; i++) {
      if (copy[i].id === taskID) {
           copy.pop(copy[i]);
           setTask(copy);
      }
  }

  };

  return (
    <div className="App">
      <div className="outline">
          <h2> To do list</h2>
         
          <div className='outline_group'>
            <input value={userInput}  onChange={ (e)=> setUserInput(e.target.value)} type="text" />
            <button onClick={pushTask}>Add</button>
          </div>
          { 
          // console.log(tasks)
          todoList.map((task)=>{
            return (
              <Task key={task.id} delTask={delTask} received={task}/>

            )
          })
          }
        </div>
    </div>
  );
}

export default App;
