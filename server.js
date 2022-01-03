

const fs = require('fs')
const http = require('http')

const { getAllTasks, createNewTask, getTaskById } = require('./controllers/taskControllers')
const { getAllProjects, createNewProject, getProjectById } = require('./controllers/projectControllers')


const server = http.createServer((req, res) => {
  //task
 if(req.url === '/tasks' && req.method === 'GET') {

  getAllTasks(req, res)
    } else if(req.url.match(/\/api\/tasks\/\w+/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getTaskById(req, res, id)
    } else if(req.url === '/api/tasks' && req.method === 'POST') {
      createNewTask(req, res)
    } else if(req.url.match(/\/api\/tasks\/\w+/) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    } else if(req.url.match(/\/api\/tasks\/\w+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        deleteProduct(req, res, id)
    } 
    //project
    if(req.url === '/projects' && req.method === 'GET') {

      getAllProjects(req, res)
        } else if(req.url.match(/\/api\/projects\/\w+/) && req.method === 'GET') {
            const id = req.url.split('/')[3]
            getProjectById(req, res, id)
        } else if(req.url === '/api/projects' && req.method === 'POST') {
          createNewProject(req, res)
        } else if(req.url.match(/\/api\/projects\/\w+/) && req.method === 'PUT') {
            const id = req.url.split('/')[3]
            updateProduct(req, res, id)
        } else if(req.url.match(/\/api\/projects\/\w+/) && req.method === 'DELETE') {
            const id = req.url.split('/')[3]
            deleteProduct(req, res, id)
        } 
    
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route N  ot Found' }))
    }
})

const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;
