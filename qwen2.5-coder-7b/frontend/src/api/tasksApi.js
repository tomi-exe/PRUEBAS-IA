const BASE_URL = 'http://localhost:3000/api/tasks';

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error('Error fetching tasks');
  }
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });
  if (!response.ok) {
    throw new Error('Error creating task');
  }
  return response.json();
};

export const updateTask = async (taskId, updatedTask) => {
  const response = await fetch(`${BASE_URL}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTask)
  });
  if (!response.ok) {
    throw new Error('Error updating task');
  }
  return response.json();
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${BASE_URL}/${taskId}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Error deleting task');
  }
};
