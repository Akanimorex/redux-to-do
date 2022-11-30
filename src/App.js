import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div className="outline">
        <h2> To do list</h2>
        <div className='outline_group'>
          <input type="text" />
          <button>Add</button>
        </div>
        <Task/>
      </div>
    </div>
  );
}

export default App;
