const Character = require("./../models/character.model");

module.exports = {
  getCharacters: async (req, res, next) => {
    await Character.find({}, async function (err, characters) {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Something went wrong.",
        });
      }
      return res.json(Character.structure(characters));
    });
  },

  getCharacter: async (req, res, next) => {
    const id = req.params.id;
    await Character.findOne({ id: id }, async function (err, character) {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Something went wrong.",
        });
      }
      return res.json(Character.structure(character));
    });
  },
};

