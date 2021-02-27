const projectModel = require('../models/project.model');
const taskService = require('../services/task.service');

module.exports = {
    create: async (project) => {
        return await projectModel.create(project);
    },
    
    update: async (_id, title) => {
        return await projectModel.findOneAndUpdate({ _id }, { title }, { new: true });
    },
    
    getAll: async (user) => {
        return await projectModel.find({ user }).exec();
    },
    
    getById: async (_id) => {
        return await projectModel.findById({_id});
    },
    
    remove: async (_id) => {
        return await projectModel.findOneAndRemove({ _id }).exec();
    },
    
    addTask: async(_id, task) => {
        const project = await projectModel.findById(_id);
        const newTask = await taskService.create(task);
        const tasks = project.get('tasks');
        tasks.push(newTask);
        project.set('tasks', tasks);

        return await project.save();
    }
}