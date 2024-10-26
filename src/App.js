import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    setTasks([...tasks, newTask])
  }

  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
};


const pendingTasks = tasks.filter((task) => !task.completed).length;
const CompletedTasks = tasks.filter((task) => task.completed).length;
  return (
    <div className="App">
      <h1>Tasks list</h1>
      <TaskForm addTask={addTask}/>
      <span>*select if completed</span>
      <TaskList tasks={tasks} markCompleted={markCompleted} removeTask={removeTask}/>
      <p>Pending tasks: {pendingTasks}</p>
      <p>Completed tasks: {CompletedTasks}</p>
    </div>
  );
}

export default App;
