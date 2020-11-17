const mongoose = require("mongoose")

const quoteSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    quote: {
      type: String,
      default: "",
    },
    by: {
      type: String,
      default: "",
    },
    character: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    collection: "quotes",
  },
  {
    timestamps: true,
  },
)

quoteSchema.statics.structure = (res) => {
  const sortSchema = ({ id, quote, by, character, image }) => ({
    id,
    quote,
    by,
    character,
    image,
  })

  return Array.isArray(res) ? res.map(sortSchema) : sortSchema(res)
}

const Quote = mongoose.model("quotes", quoteSchema)

module.exports = Quote
