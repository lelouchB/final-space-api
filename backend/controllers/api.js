const endpoints = require("../config/endpoints")
module.exports = {
  getAPI: async (req, res) => {
    return res.status(200).send(endpoints)
  },
}
