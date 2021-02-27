const userRoute = require('../routes/user.routes');
const projectRoute = require('../routes/project.routes');
const taskRoute = require('../routes/task.routes');

exports.initRoutes = app => {
  app.use('/user', userRoute);
  app.use('/project', projectRoute);
  app.use('/task', taskRoute);
}