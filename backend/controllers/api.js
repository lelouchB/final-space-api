const endpoints = require("../config/endpoints")
console.log(endpoints)
module.exports = {
  getAPI: async (req, res) => {
    return res.status(200).send(endpoints)
  },
}
