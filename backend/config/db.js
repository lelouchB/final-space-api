const mongoose = require("mongoose")

const database_url = process.env.DATABASE_URL

const connectDb = async () => {
  return mongoose
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

exports.connectDb = connectDb
