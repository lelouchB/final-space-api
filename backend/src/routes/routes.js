const express = require("express")
const router = express.Router()
const path = require("path")

const CharacterController = require("../controllers/character.api.js")
const EpisodeController = require("../controllers/episode.api.js")
const ApiController = require("../controllers/api.js")

const { getAllCharacters, getSingleCharacter } = CharacterController
const { getAllEpisodes, getSingleEpisode } = EpisodeController
const { getAPI } = ApiController

router.get("/character", getAllCharacters)
router.get("/character/:id", getSingleCharacter)

router.get("/episode", getAllEpisodes)
router.route("/episode/:id", getSingleEpisode)

router.get("/api/v0", getAPI)

router.get("/api/character/avatar", express.static(path.join(__dirname, "../../images/character")))
router.get("/api/episode/image", express.static(path.join(__dirname, "../../images/episode")))

router.route("*").get((_, res) => {
  return res.status(404).send("❌❌ Endpoint does not exist. ❌❌")
})

module.exports = router
