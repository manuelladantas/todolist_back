const projectModel = require('../models/project.model');
const taskService = require('../services/task.service');

module.exports = {
    create: async (project, user) => {
        const newProject = {...project, user: user._id}
        return await projectModel.create(newProject);
    },
    
    update: async (_id, title, user) => {
        return await projectModel.findOneAndUpdate({ _id, user: user._id }, { title }, { new: true });
    },
    
    getAll: async (user) => {
        return await projectModel.find({ user }).populate('tasks').exec();
    },
    
    getById: async (_id) => {
        return await projectModel.findById({_id});
    },
    
    remove: async (_id, user) => {
        return await projectModel.findOneAndRemove({ _id, user: user._id }).exec();
    },
    
    addTask: async(_id, task, user) => {
        const project = await projectModel.findOne({_id, user: user._id});

        if (!project) {
            throw new Error('This project doesnt exist !')    
        }

        const newTask = await taskService.create(task);
        const tasks = project.get('tasks');
        tasks.push(newTask);
        project.set('tasks', tasks);

        return await project.save();
    }
}