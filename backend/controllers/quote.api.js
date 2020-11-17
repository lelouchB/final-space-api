const Quote = require("../models/quote.model")
const options = require("../helpers/options")

const getAllQuotes = async (req, res) => {
  await Quote.find({}, null, options(req.query), (err, quotes) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong.",
      })
    }
    res.set("Cache-Control", "public, max-age=315576")
    return res.json(Quote.structure(quotes))
  })
}

module.exports = { getAllQuotes }
