const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: false,
      unique: false,
    },
    status: {
      type: String,
      required: false,
    },
    species: {
      type: String || null,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    hair: {
      type: String || null,
      required: false,
    },
    alias: {
      type: Array,
      required: false,
    },
    origin: {
      type: String,
      required: false,
    },
    abilities:{
      type:Array,
      required:false,
    },
    img_url: {
      type: String,
      required: false,
    },
  },
  {
    collection: "characters",
  },
  { timestamps: true }
);

const Character = mongoose.model("characters", characterSchema);

module.exports = Character;
