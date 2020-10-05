var express = require("express");
var router = express.Router();
var characterController = require("../controllers/character.api.js");
var apiController = require("../controllers/api.js");

const { getAllCharacters, getSingleCharacter } = characterController;

router.route("/character").get(getAllCharacters);

router.route("/character/:id").get(getSingleCharacter);

router.route("/").get(apiController.getAPI);

router.route("*").get((req, res) => {
  return res.status(404).send("❌❌ Endpoint does not exist. ❌❌");
});

module.exports = router;
