import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>TaskFlow</h1>
      <TaskForm />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
