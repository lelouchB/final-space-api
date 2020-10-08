const Episode = require("./../models/episode.model")
const options = require("../helpers/options")

const getAllEpisodes = async (req, res) => {
  await Episode.find({}, null, options(req.query), (err, episodes) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong.",
      })
    }
    res.set("Cache-Control", "public, max-age=315576")
    return res.json(Episode.structure(episodes))
  })
}

const getSingleEpisode = async (req, res) => {
  const id = req.params.id
  await Episode.findOne({ id: id }, (err, episode) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong.",
      })
    }
    res.set("Cache-Control", "public, max-age=315576")
    return res.json(Episode.structure(episode))
  })
}

module.exports = { getAllEpisodes, getSingleEpisode }
