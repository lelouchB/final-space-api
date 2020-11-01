require("dotenv").config({ path: __dirname + "../../.env" })
const API_VERSION = 0
const BASE_URL =
  process.env.BASE_URL || `https://finalspaceapi.com/api/v${API_VERSION}`
const PORT = process.env.PORT || 3000
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/final-space-api"

module.exports = {
  BASE_URL,
  API_VERSION,
  PORT,
  DATABASE_URL,
}
