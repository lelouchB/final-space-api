module.exports = {
  getAPI: async (req, res) => {
    return res.status(200).send({
      characters: "https://finalspaceapi.com/api/v0/character",
      episodes: "Coming Soon",
    });
  },
};
