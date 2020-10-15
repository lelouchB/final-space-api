const Character = require("../models/character.model")
const options = require("../helpers/options")
const config = require("../config/api")

const getCharacterAvatar = async (req, res) => {
  const avatars = [{ name: "ash_graven.jpg" }, { name: "ava.jpg" }]
  return res.json({ avatars, url: config.BASE_URL })
}

const getAllCharacters = async (req, res) => {
  await Character.find({}, null, options(req.query), (err, characters) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong.",
      })
    }
    res.set("Cache-Control", "public, max-age=315576")
    return res.json(Character.structure(characters))
  })
}

const getSingleCharacter = async (req, res) => {
  const id = req.params.id
  await Character.findOne({ id: id }, (err, character) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong.",
      })
    }
    res.set("Cache-Control", "public, max-age=315576")
    return res.json(Character.structure(character))
  })
}

module.exports = {
  getCharacterAvatar,
  getAllCharacters,
  getSingleCharacter,
}
