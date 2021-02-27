const express = require('express');
const projectService = require('../services/project.service')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await projectService.getAll(req.payload._id);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error loading projects'});
  }
});

router.post('/', async (req, res) => {
  try {
     const project = req.body;
     const result = await projectService.create(project);
     res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to create a project'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await projectService.getById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to get a project'});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await projectService.update(req.params.id, req.body.title);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to update a project'});
  }
});

router.post('/task/:id', async (req, res) => {
  try {
    const result = await projectService.addTask(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to update a project'});
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const result = await projectService.remove(req.params.id);
      res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to remove a project'});
  }
});

module.exports = router;


