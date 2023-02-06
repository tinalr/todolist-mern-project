import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import TaskDate from './components/TodayDate';
import TaskList from './components/TaskList';

import axios from 'axios';

function App() {
  return (
    <>
      <Header />
      <TaskDate />
      <CreateTask />
      <TaskList/>
    </>
  );
}

export default App;
