import React from 'react';
import { getTasks, updateTask, deleteTask } from '../api/tasksApi';

const TaskItem = ({ task, setTasks }) => {
  const handleStatusChange = async (e) => {
    try {
      await updateTask(task.id, { ...task, status: e.target.value });
      setTasks(prevTasks =>
        prevTasks.map(t => (t.id === task.id ? { ...t, status: e.target.value } : t))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <li className="task-item">
      {task.title}
      <select value={task.status} onChange={handleStatusChange}>
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
