require("dotenv").config();
const db = require("./helpers/db");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname + "/../frontend/build"))); 

const apiRoutes = require("./routes/routes");

const port = process.env.PORT || 8000;

app.use("/api/v0", apiRoutes);

startServer= async()=> {
  await db.connectDb();

  app.listen(port, () =>
    console.log(`Final Space API 🚀 backend server listening on ${port}! 👽👽👽`)
  );
}

startServer();