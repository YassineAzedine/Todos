const Project = require("../models/Project");

exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.findAll();


    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(projects))
  } catch (error) {
    next(error);
  }
};

exports.createNewProject = async (req, res) => {
  try {
 
let project = new Project("ooogogl","ddddff");
project = await project.save();
res.writeHead(201, { 'Content-Type': 'application/json' })
 
  } catch (error) {
    console.log(error);
  }
};

exports.getProjectById = async (req, res, id) => {
  try {

 

    let project = await Project.findById(id);
    if(!project) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Product Not Found' }))
  } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(project))
  }
  } catch (error) {
    console.log(error);
  }
};
