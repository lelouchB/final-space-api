const mongoose = require("mongoose")

const characterSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    status: String,
    species: String,
    gender: String,
    hair: String,
    alias: Array,
    origin: String,
    abilities: Array,
    img_url: String,
  },
  {
    collection: "characters",
  },
  { timestamps: true },
)

characterSchema.statics.structure = (res) => {
  const sortSchema = ({
    id,
    name,
    status,
    species,
    gender,
    hair,
    alias,
    origin,
    abilities,
    img_url,
  }) => ({
    id,
    name,
    status,
    species,
    gender,
    hair,
    alias,
    origin,
    abilities,
    img_url,
  })

  return Array.isArray(res) ? res.map(sortSchema) : sortSchema(res)
}

const Character = mongoose.model("characters", characterSchema)

module.exports = Character
