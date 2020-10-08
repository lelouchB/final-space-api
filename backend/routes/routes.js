var express = require("express")
var router = express.Router()
var characterController = require("../controllers/character.api.js")
var episodeController = require("../controllers/episode.api.js")
var apiController = require("../controllers/api.js")

const { getAllCharacters, getSingleCharacter } = characterController
const { getAllEpisodes, getSingleEpisode } = episodeController

router.route("/character").get(getAllCharacters)
router.route("/character/:id").get(getSingleCharacter)

router.route("/episode").get(getAllEpisodes)
router.route("/episode/:id").get(getSingleEpisode)

router.route("/").get(apiController.getAPI)

router.route("*").get((req, res) => {
  return res.status(404).send("❌❌ Endpoint does not exist. ❌❌")
})

module.exports = router
