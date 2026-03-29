const Task = require("../models/taskModel");

// create
exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = Task.create(title);
  res.status(201).json(task);
};

// get all + search
exports.getTasks = (req, res) => {
  let tasks = Task.getAll();

  if (req.query.search) {
    tasks = tasks.filter(t =>
      t.title.toLowerCase().includes(req.query.search.toLowerCase())
    );
  }

  res.json(tasks);
};

// get by id
exports.getTask = (req, res) => {
  const task = Task.getById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

// update
exports.updateTask = (req, res) => {
  const updated = Task.update(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(updated);
};

// delete
exports.deleteTask = (req, res) => {
  const deleted = Task.remove(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(204).send();
};