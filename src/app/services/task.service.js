const taskModel = require('../models/task.model')

module.exports = {
  create: async (task) => {
      return await taskModel.create(task);
  },
  
  update: async (_id, task) => {
      return await taskModel.findOneAndUpdate({ _id, isCompleted: false }, task, { new: true });
  },
  
  getAll: async (user) => {
      return await taskModel.find({ user }).exec();
  },
  
  getById: async (_id) => {
      return await taskModel.findById({_id});
  },
  
  remove: async (_id) => {
      return await taskModel.findOneAndRemove({ _id }).exec();
  },
}