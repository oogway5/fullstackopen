let tasks = [];
let id = 1;

// get all
const getAll = () => tasks;

// get by id
const getById = (taskId) => {
  return tasks.find(t => t.id === Number(taskId));
};

// create
const create = (title) => {
  const newTask = {
    id: id++,
    title,
    isCompleted: false
  };

  tasks.push(newTask);
  return newTask;
};

// update
const update = (taskId, data) => {
  const task = getById(taskId);
  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.isCompleted !== undefined) task.isCompleted = data.isCompleted;

  return task;
};

// delete
const remove = (taskId) => {
  const index = tasks.findIndex(t => t.id === Number(taskId));
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, create, update, remove };