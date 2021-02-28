const userModel = require('../models/user.model')

module.exports = {
  create: async (user) => {
    return await userModel.create(user);
  },

  findUserByEmail: (email) => {
    return userModel.findOne({ email }).select('+password').exec();
  }
}