const express = require("express")
const router = express.Router()
const path = require("path")

const CharacterController = require("../controllers/character.api.js")
const EpisodeController = require("../controllers/episode.api.js")
const ApiController = require("../controllers/api.js")

const {
  getCharacterAvatar,
  getAllCharacters,
  getSingleCharacter
} = CharacterController

const {
  getEpisodeAvatar,
  getAllEpisodes,
  getSingleEpisode
} = EpisodeController

const { getAPI } = ApiController

router.get("/character/avatar", getCharacterAvatar)
router.get("/character", getAllCharacters)
router.get("/character/:id", getSingleCharacter)

router.get("/episode/image", getEpisodeAvatar)
router.get("/episode", getAllEpisodes)
router.get("/episode/:id", getSingleEpisode)

router.get("/", getAPI)

router.route("*").get((_, res) => {
  return res.status(404).send("❌❌ Endpoint does not exist. ❌❌")
})

module.exports = router
