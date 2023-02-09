import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import TaskDate from './components/TodayDate';
import TaskList from './components/TaskList';

import axios from 'axios';

//Server issue: 503, service unavailable
const API_ENDPOINT = 'http://localhost:8000'

function App() {

  const [task, setTask] = useState([])

  const getTask = async () => {
    try {
      let data = await axios.get(`${API_ENDPOINT}/todo`)
      console.log(data)
      setTask(data.data)
    } catch (err) {
      console.log(err)
    }
  }
  

useEffect(() => {
  getTask()
}, [])

console.log(task)

return (
  <>
    <Header />
    <TaskDate />
    <CreateTask API_ENDPOINT={API_ENDPOINT} getTask={getTask} />

    <div>
      {task.map((item) => <TaskList API_ENDPOINT={API_ENDPOINT} todoName={item.name} date={item.date} isCompleted={item.isCompleted} id={item._id} getTask={getTask} />)}
    </div>

  </>
);
}

export default App;
