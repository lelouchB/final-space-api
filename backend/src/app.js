require("dotenv").config()

const express = require("express")

const apiRoutes = require("./routes/routes")

const databaseHelper = require('./helpers/db')

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
    // middleware
    // cors
    // extras
  }

  routes() {
    this.express.use(apiRoutes)
  }
}

module.exports = new App().express

