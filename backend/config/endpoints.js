const apiData = require("./api")

const endpoints = [
  {
    type: "GET",
    name: "Endpoints Data",
    path: "/",
  },
  {
    type: "GET",
    name: "All Characters",
    path: "/character",
    queryParams: [
      {
        optional: true,
        name: "Sort By",
        values: ["asc", "desc"],
      },
    ],
  },
  {
    type: "GET",
    name: "Single Character",
    path: "/character/<id>",
  },
  {
    type: "GET",
    name: "All Episodes",
    path: "/episode",
    queryParams: [
      {
        optional: true,
        name: "Sort By",
        values: ["asc", "desc"],
      },
    ],
  },
  {
    type: "GET",
    name: "Single Episode",
    path: "/episode/<id>",
  },

  {
    type: "GET",
    name: "All Locations",
    path: "/location",
    queryParams: [
      {
        optional: true,
        name: "Sort By",
        values: ["asc", "desc"],
      },
    ],
  },
  {
    type: "GET",
    name: "Single Location",
    path: "/location/<id>",
  },
  {
    type: "GET",
    name: "All Quotes",
    path: "/quote",
    queryParams: [
      {
        optional: true,
        name: "Sort By",
        values: ["asc", "desc"],
      },
    ],
  },
]

module.exports = endpoints.map((endpoint) => {
  endpoint.fullUrl = `${apiData.BASE_URL}${endpoint.path}`
  return endpoint
})
