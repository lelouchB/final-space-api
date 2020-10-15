const API_VERSION = 0
const BASE_URL =
  process.env.BASE_URL || `https://finalspaceapi.com/api/v${API_VERSION}`
const PORT = process.env.PORT || 3000

module.exports = {
  BASE_URL,
  API_VERSION,
  PORT,
}
