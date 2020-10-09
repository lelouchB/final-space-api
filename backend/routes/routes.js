const express = require("express")
const router = express.Router()
const characterController = require("../controllers/character.api.js")
const episodeController = require("../controllers/episode.api.js")
const creatureController = require("./../controllers/creature.api")
const apiController = require("../controllers/api.js")

const { getAllCharacters, getSingleCharacter } = characterController
const { getAllEpisodes, getSingleEpisode } = episodeController
const { getAllCreatures, getCreature } = creatureController

router.route("/character").get(getAllCharacters)
router.route("/character/:id").get(getSingleCharacter)

router.route("/episode").get(getAllEpisodes)
router.route("/episode/:id").get(getSingleEpisode)

router.route("/creature").get(getAllCreatures)
router.route("/creature/:id").get(getCreature)

router.route("/").get(apiController.getAPI)

router.route("*").get((req, res) => {
  return res.status(404).send("❌❌ Endpoint does not exist. ❌❌")
})

module.exports = router
