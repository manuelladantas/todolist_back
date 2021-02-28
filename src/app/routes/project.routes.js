const express = require('express');
const projectService = require('../services/project.service')
const guard = require('./guards/auth.guard')

const router = express.Router();

router.get('/', guard.authGuard, async (req, res) => {
  try {
    const result = await projectService.getAll(req.user);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error loading projects'});
  }
});

router.post('/', guard.authGuard, async (req, res) => {
  try {
     const project = req.body;
     const result = await projectService.create(project, req.user);
     res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to create a project'});
  }
});

router.get('/:id', guard.authGuard, async (req, res) => {
  try {
    const result = await projectService.getById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to get a project'});
  }
});

router.put('/:id', guard.authGuard, async (req, res) => {
  try {
    const result = await projectService.update(req.params.id, req.body.title, req.user);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to update a project'});
  }
});

router.post('/task/:id', guard.authGuard, async (req, res) => {
  try {
    const result = await projectService.addTask(req.params.id, req.body, req.user);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error adding task to project'});
  }
});

router.delete('/:id', guard.authGuard, async (req, res) => {
  try {
      const result = await projectService.remove(req.params.id, req.user);
      res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to remove a project'});
  }
});

module.exports = router;


