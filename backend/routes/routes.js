const express = require("express")
const router = express.Router()
const characterController = require("../controllers/character.api.js")
const episodeController = require("../controllers/episode.api.js")
const locationController = require("../controllers/location.api.js")
const quoteController = require("../controllers/quote.api")
const apiController = require("../controllers/api.js")

const { getAllCharacters, getSingleCharacter } = characterController
const { getAllEpisodes, getSingleEpisode } = episodeController
const { getAllLocations, getSingleLocation } = locationController
const { getAllQuotes } = quoteController

router.route("/character").get(getAllCharacters)
router.route("/character/:id").get(getSingleCharacter)

router.route("/episode").get(getAllEpisodes)
router.route("/episode/:id").get(getSingleEpisode)

router.route("/location").get(getAllLocations)
router.route("/location/:id").get(getSingleLocation)

router.route("/quote").get(getAllQuotes)

router.route("/").get(apiController.getAPI)

router.route("*").get((req, res) => {
  return res.status(404).send("❌❌ Endpoint does not exist. ❌❌")
})

module.exports = router
