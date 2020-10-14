const endpoints = require("../config/endpoints")

module.exports = {
  getAPI: async (_, res) => {
    return res.status(200).send(endpoints)
  }
}
