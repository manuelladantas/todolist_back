const userRoute = require('../routes/user.routes');
const projectRoute = require('../routes/project.routes');
const taskRoute = require('../routes/task.routes');
const authRoute = require('../routes/auth.routes');

exports.initRoutes = app => {
  app.use('/user', userRoute);
  app.use('/project', projectRoute);
  app.use('/auth', authRoute);
  app.use('/task', taskRoute);
}