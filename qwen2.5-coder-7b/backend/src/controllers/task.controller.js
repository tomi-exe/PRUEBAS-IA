const tasks = [];

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, status } = req.body;

  if (!title || title.length < 3) {
    return res.status(400).json({ error: 'Title is required and must be at least 3 characters long' });
  }

  if (!['pending', 'in_progress', 'done'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be one of pending, in_progress, or done' });
  }

  const newTask = { id: tasks.length + 1, title, status };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id, 10);

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
};

const updateTask = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const { title, status } = req.body;

  if (!title || title.length < 3) {
    return res.status(400).json({ error: 'Title is required and must be at least 3 characters long' });
  }

  if (!['pending', 'in_progress', 'done'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be one of pending, in_progress, or done' });
  }

  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[taskIndex] = { id: taskId, title, status };
  res.json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id, 10);

  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
};
