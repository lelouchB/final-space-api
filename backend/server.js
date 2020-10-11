require("dotenv").config()
const db = require("./config/db")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
// const helmet = require("helmet");
const path = require("path")
const rateLimit = require("express-rate-limit")

const app = express()

app.use(morgan("common"))
// app.use(helmet());
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname + "/../frontend/build")))

app.set("trust proxy", 1)

const apiLimiter = rateLimit({
  windowMs: 30 * 1000, // 0.5 minutes
  max: 500,
  message:
    "Too many accounts created from this IP, please try again after a minute",
})

app.use("/api", apiLimiter)

const apiRoutes = require("./routes/routes")

const port = process.env.PORT || 8000

app.use("/api/v0", apiRoutes)
app.use(
  "/api/character/avatar",
  express.static(path.join(__dirname, "images/character")),
)
app.use(
  "/api/episode/image",
  express.static(path.join(__dirname, "images/episode")),
)

app.use(
  "/api/location/image",
  express.static(path.join(__dirname, "images/location")),
)

const startServer = async () => {
  await db.connectDb()
  app.listen(port)
}

startServer()
  .then(() =>
    console.log(
      `Final Space API 🚀 backend server listening on ${port}! 👽👽👽`,
    ),
  )
  .catch(() => console.log("Final Space API, ops... failed!"))
