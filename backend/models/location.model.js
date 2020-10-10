const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    type: String,
    inhabitants: Array,
    notable_residents: Array,
    img_url: String,
  },
  {
    collection: "locations",
  },
  { timestamps: true },
)

locationSchema.statics.structure = (res) => {
  const sortSchema = ({
    id,
    name,
    type,
    inhabitants,
    notable_residents,
    img_url,
  }) => ({
    id,
    name,
    type,
    inhabitants,
    notable_residents,
    img_url,
  })

  return Array.isArray(res) ? res.map(sortSchema) : sortSchema(res)
}

const Location = mongoose.model("locations", locationSchema)

module.exports = Location
