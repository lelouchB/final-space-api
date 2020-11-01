const Location = require("../models/location.model")
const options = require("../helpers/options")
const config = require("../config/api")

const getLocationImage = async (req, res) => {
  const images = [{ name: "dark_zone.jpg" }, { name: "deathcropolis.jpg" }]
  return res.json({ images, url: config.BASE_URL })
}

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

module.exports = {
  getLocationImage,
  getAllLocations,
  getSingleLocation,
}
