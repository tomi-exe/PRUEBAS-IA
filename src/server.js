const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: { status, message } });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
