require("dotenv").config({ path: __dirname + "/./../.env" })
const mongoose = require("mongoose")
const axios = require("axios")
const Character = require("../models/character.model")
const Episode = require("../models/episode.model")
const database_url = process.env.DATABASE_URL

seed = async () => {
  connectDb()
  await seedCharacters()
  await seedEpisodes()
  closeDb()
}

connectDb = async () => {
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

closeDb = async () => {
  mongoose.connection.close()
}

seedCharacters = async () => {
  let charactersEndpoint = "https://finalspaceapi.com/api/v0/character"
  let characters
  await axios
    .get(charactersEndpoint)
    .then((res) => (characters = res.data))
    .then(() => console.log("Characters data Fetched"))
    .catch((err) => console.log("Error: characters data didn't fetched " + err))

  try {
    for (var character of characters) {
      let newCharacter = new Character(character)
      await newCharacter.save()
    }
    console.log("Characters seeded to database successfully")
  } catch (err) {
    console.log("Error: characters didn't seeded to database " + err)
  }
}

seedEpisodes = async () => {
  let episodesEndpoint = "https://finalspaceapi.com/api/v0/episode"
  let episodes
  await axios
    .get(episodesEndpoint)
    .then((res) => (episodes = res.data))
    .then(() => console.log("Episodes data Fetched"))
    .catch((err) => console.log("Error: episodes data didn't fetched " + err))

  try {
    for (var episode of episodes) {
      let newEpisode = new Episode(episode)
      await newEpisode.save()
    }
    console.log("Episodes seeded to database successfully")
  } catch (err) {
    console.log("Error: episodes didn't seeded to database " + err)
  }
}

seed()
