const projectModel = require('../models/project.model')

module.exports = {
    create: async (project) => {
        return await projectModel.create(project);
    },
    
    update: async (_id, project) => {
        return await projectModel.findOneAndUpdate({ _id }, project, { new: true });
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
        const project = await projectModel.findById({_id});
        const tasks = project.get('tasks');
        tasks.push(task);
        project.set('tasks', tasks);

        return await project.save();
    }
}