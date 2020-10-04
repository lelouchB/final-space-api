const mongoose = require("mongoose");

module.exports = {
  getAPI: async (req, res, next) => {
        return res.status(200).send({
            "characters": "https://finalspaceapi.com/api/v0/character",
            "episodes": "Coming Soon",
        });
  },

};

