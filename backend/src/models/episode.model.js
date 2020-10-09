const mongoose = require("mongoose")

const episodeSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    air_date: String,
    director: String,
    writer: String,
    characters: Array,
    img_url: String,
  },
  {
    collection: "episodes",
  },
  { timestamps: true },
)

episodeSchema.statics.structure = (res) => {
  const sortSchema = ({
    id,
    name,
    air_date,
    director,
    writer,
    characters,
    img_url,
  }) => ({
    id,
    name,
    air_date,
    director,
    writer,
    characters,
    img_url,
  })

  return Array.isArray(res) ? res.map(sortSchema) : sortSchema(res)
}

const Episode = mongoose.model("episodes", episodeSchema)

module.exports = Episode
