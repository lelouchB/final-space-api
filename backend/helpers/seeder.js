/* eslint-disable no-return-assign */
/* eslint-disable no-await-in-loop */
require("dotenv").config({ path: __dirname + "/./../.env" })
const mongoose = require("mongoose")
const axios = require("axios")
const Character = require("../models/character.model")
const Episode = require("../models/episode.model")
const Location = require("../models/location.model")
const database_url = process.env.DATABASE_URL

const seedCharacters = async () => {
  const charactersEndpoint = "https://finalspaceapi.com/api/v0/character"
  let characters = null
  await axios
    .get(charactersEndpoint)
    .then((res) => (characters = res.data))
    .then(() => console.log("Characters data Fetched"))
    .catch((err) => console.log("Error: characters data didn't fetched " + err))

  try {
    for (var character of characters) {
      const newCharacter = new Character(character)
      await newCharacter.save()
    }
    console.log("Characters seeded to database successfully")
  } catch (err) {
    console.log("Error: characters didn't seeded to database " + err)
  }
}

const seedEpisodes = async () => {
  const episodesEndpoint = "https://finalspaceapi.com/api/v0/episode"
  let episodes = null
  await axios
    .get(episodesEndpoint)
    .then((res) => (episodes = res.data))
    .then(() => console.log("Episodes data Fetched"))
    .catch((err) => console.log("Error: episodes data didn't fetched " + err))

  try {
    for (var episode of episodes) {
      const newEpisode = new Episode(episode)
      await newEpisode.save()
    }
    console.log("Episodes seeded to database successfully")
  } catch (err) {
    console.log("Error: episodes didn't seeded to database " + err)
  }
}

const seedLocations = async () => {
  const locationEndpoint = "https://finalspaceapi.com/api/v0/location"
  let locations = null
  await axios
    .get(locationEndpoint)
    .then((res) => (locations = res.data))
    .then(() => console.log("Locations data Fetched"))
    .catch((err) => console.log("Error: locations data didn't fetched " + err))

  try {
    for (var location of locations) {
      const newLocation = new Location(location)
      await newLocation.save()
    }
    console.log("Locations seeded to database successfully")
  } catch (err) {
    console.log("Error: locations didn't seeded to database " + err)
  }
}

const connectDb = async () => {
  mongoose
    .connect(database_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected")
      return true
    })
    .catch((err) => {
      console.error("Error : Cannot connect to Database " + err)
      return false
    })
}

const closeDb = async () => {
  mongoose.connection.close()
}

const seed = async () => {
  connectDb()
  await seedCharacters()
  await seedEpisodes()
  await seedLocations()
  closeDb()
}

seed()
