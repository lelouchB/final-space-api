const express = require("express")
const router = express.Router()

const apiController = require("../controllers/api.js")
const characterController = require("../controllers/character.api.js")
const episodeController = require("../controllers/episode.api.js")
const locationController = require("../controllers/location.api.js")

const { getAPI } = apiController

const {
  getCharacterAvatar,
  getAllCharacters,
  getSingleCharacter,
} = characterController

const { getEpisodeAvatar, getAllEpisodes, getSingleEpisode } = episodeController

const {
  getLocationImage,
  getAllLocations,
  getSingleLocation,
} = locationController

router.get("/", getAPI)

router.get("/character/avatar", getCharacterAvatar)
router.get("/character", getAllCharacters)
router.get("/character/:id", getSingleCharacter)

router.get("/episode/image", getEpisodeAvatar)
router.get("/episode", getAllEpisodes)
router.get("/episode/:id", getSingleEpisode)

router.route("/location/image").get(getLocationImage)
router.route("/location").get(getAllLocations)
router.route("/location/:id").get(getSingleLocation)

router.route("*").get((req, res) => {
  return res.status(404).send("❌❌ Endpoint does not exist. ❌❌")
})

module.exports = router
