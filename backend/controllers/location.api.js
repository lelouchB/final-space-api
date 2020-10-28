const Location = require("./../models/location.model")
const options = require("../helpers/options")

const getAllLocations = async (req, res) => {
  await Location.find({}, null, options(req.query), (err, locations) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong.",
      })
    }
    res.set("Cache-Control", "public, max-age=315576")
    return res.json(Location.structure(locations))
  })
}

const getSingleLocation = async (req, res) => {
  const id = req.params.id
  await Location.findOne({ id: id }, (err, location) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong.",
      })
    }
    res.set("Cache-Control", "public, max-age=315576")
    return res.json(Location.structure(location))
  })
}

module.exports = { getAllLocations, getSingleLocation }
