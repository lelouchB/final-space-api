var express = require("express");
var router = express.Router();
var characterController = require("../controllers/character.api.js");

router.route("/character").get(characterController.getCharacters);
router.route("/character/:id").get(characterController.getCharacter);


router.route("*").get(async function (req, res) {
  return res.status(404).send("❌❌Endpoint does not exist.❌❌");
});

module.exports = router;
