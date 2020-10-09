const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();

const DOMAIN = 'https://finalspaceapi.com/api';
const VERSION = 'v0';
const API_URL = `${DOMAIN}/${VERSION}/character`;

app.use(cors());
app.use(express.json());

app.set("trust proxy", 1);

const port = process.env.PORT || 8000;

const startSeeder = async () => {
  console.log("startSeeder");

  axios.get(API_URL, {
    params: {}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });

}

const startServer = async () => {
  app.listen(port, () => {
    console.log(
      `Loading data... Final Space 🚀 seed listening on ${port}! 👽👽👽`
    )
    startSeeder();
  });
};

startServer();
