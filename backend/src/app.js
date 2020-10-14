require("dotenv").config()
const express = require("express")
const databaseHelper = require('./helpers/db')
const apiRoutes = require("./routes/routes")
const cors = require("cors")
const morgan = require("morgan")
const path = require("path")

class App {
  constructor() {
    this.express = express()

    this.database()
    this.config()
    this.routes()
  }

  database() {
    databaseHelper.connect()
  }

  config() {
    this.express.use(morgan("common"))
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.static(path.join(__dirname + "../../frontend/build")))
    this.express.set("trust proxy", 1)
  }

  routes() {
    this.express.use("/api/v0", apiRoutes)
  }
}

module.exports = new App().express

