let taskList = require('./data/tasks.json').tasks;
const express = require('express');
const app = express();
app.use(express.json());

/* const taskList = [
  {
    "id": 1
  }
] */

/* const http = require('http');
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(tasks))
}); */

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
});

app.get('/api/tasks', (request, response) => {
  response.json(taskList)
});

app.get('/api/tasks/:id', (request, response) => {
  const id = Number(request.params.id);
  const task = taskList.find(task => task.id === id);

  if (task) {
    response.json(task);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/tasks/:id', (request, response) => {
  const id = Number(request.params.id)
  taskList = taskList.filter(task => task.id !== id)
  response.status(204).end()
});

app.post('/api/tasks', (request, response) => {
  const task = request.body;

  if (!task || !task.title) {
    return response.status(400).json({
      "error": "task.title is missing"
    })
  }

  const ids = taskList.map(task => task.id);
  const maxId = Math.max(... ids);

  console.log(maxId);

  const newTask = {
    "id": maxId + 1,
    "title": task.title,
    "isFinished": typeof task.isFinished != 'undefined' ? task.isFinished : false
  };

  taskList = taskList.concat(newTask);

  response.status(201).json(newTask);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log((`Server running on http://localhost:${PORT}`))
});
