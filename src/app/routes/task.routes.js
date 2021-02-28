const express = require('express');
const taskService = require('../services/task.service');
const guard = require('./guards/auth.guard')

const router = express.Router();

router.put('/:id', guard.authGuard, async (req, res) => {
  try {
    const result = await taskService.update(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to update a task'});
  }
})

router.delete('/:id', guard.authGuard, async (req, res) => {
  try {
      const result = await taskService.remove(req.params.id);
      res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to remove a task'});
  }
});

module.exports = router;


