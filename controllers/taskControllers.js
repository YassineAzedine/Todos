const Task = require("../models/Task");

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();


    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(tasks))
  } catch (error) {
    next(error);
  }
};

exports.createNewTask = async (req, res) => {
  try {

let task = new Task("hellp","bofdkdkddddy");
newtask = await task.save();
res.writeHead(201, { 'Content-Type': 'application/json' })
 

  } catch (error) {
    console.log(error);
  }
};

exports.getTaskById = async (req, res, id) => {
  try {

 

    let task = await Task.findById(id);
    if(!task) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Product Not Found' }))
  } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(task))
  }
  } catch (error) {
    console.log(error);
  }
};

