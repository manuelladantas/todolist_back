const taskModel = require('../models/task.model');
const projectModel = require('../models/project.model');

module.exports = {
  create: async (task) => {
      return await taskModel.create(task);
  },
  
  update: async (_id, task) => {
      if (task.isCompleted) {
          task.finishDate = new Date();
      }
      return await taskModel.findOneAndUpdate({ _id, isCompleted: false }, task, { new: true });
  },
  
  getById: async (_id) => {
      return await taskModel.findById({ _id });
  },
  
  remove: async (_id) => {
      const project = await projectModel.findOne({tasks: _id}).exec();
      const tasks = project.get('tasks');
      tasks.splice(tasks.indexOf(_id), 1);
      project.set('tasks', tasks);
      await project.save();
      
      return await taskModel.findOneAndRemove({ _id }).exec();
  },
}