import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import TaskDate from './components/TodayDate';
import TaskList from './components/TaskList';

import axios from 'axios';

//Server issue: 503, service unavailable
const API_ENDPOINT = 'https://modern-pocketbook-bee.cyclic.app/'

function App() {

  const [task, setTask] = useState([])

  const getTask = async () => {
    let data = await axios.get(`${API_ENDPOINT}todo`)
    console.log(data.data)
    setTask(data.data)
  }
  useEffect(() => {
    getTask()
  }, [])

  console.log(task)

  return (
    <>
      <Header />
      <TaskDate />
      <CreateTask />
      <TaskList/>
      <div>
        {task.map((item) => <TaskList todoName={item.name} date={item.date} isCompleted={item.isCompleted} />)}
      </div>

    </>
  );
}

export default App;
