const userModel = require('../models/user.model')

module.exports = {
  create: async (user) => {
    return await userModel.create(user);
  }
}