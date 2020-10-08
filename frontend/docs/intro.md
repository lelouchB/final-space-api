---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
hide_title: false
hide_table_of_contents: false
keywords:
  - final space
  - finalspace
  - finalspaceapi
  - final space wiki
  - api
  - restapi
  - rest api
  - introduction
  - graphql
description: The Final Space API is a RESTful API based on the television show Final Space
---

The Final Space API is based on the television show [Final Space](https://en.wikipedia.org/wiki/Final_Space) by Olan Rogers from TBS. From talking cats to evil aliens, the animated show tells the intergalactic adventures of Gary Goodspeed and his alien friend Mooncake as they unravel the mystery of "Final Space". The show can be viewed, amongst other places, on [TBS](https://www.international.tbs.com/), [AdultSwim](https://www.adultswim.com/videos/final-space), and [Netflix](https://www.netflix.com/title/80174479).

All data of this API, such as character info, is obtained from the [Final Space wiki](https://final-space.fandom.com/wiki/Final_Space_Wiki). More data such as season and episode information is planned for future release. This data can be used for your own projects such as fan pages or any way you see fit.

All this information is available through a RESTful API implemented in NodeJS. This API returns data in a friendly `json` format.

The Final Space API is maintained as an open source project on [GitHub](https://github.com/lelouchB/final-space-api). More information about contributing can be found in the readme.

### REST
**Base url:** https://finalspaceapi.com/api/v0/

The base url contains information about all available API's resources.
All requests are `GET` requests and go over `https`. All responses will return data in `json`.

*Sample Request*

```
https://finalspaceapi.com/api/v0/
```

*Sample Response*
```json
[
  {
    "type": "GET",
    "name": "Endpoints Data",
    "path": "/",
    "fullUrl": "https://finalspaceapi.com/api/v0/"
  },
  {
    "type": "GET",
    "name": "All Characters",
    "path": "/character",
    "queryParams": [
      {
        "optional": true,
        "name": "Sort By",
        "values": [
          "asc",
          "desc"
        ]
      }
    ],
    "fullUrl": "https://finalspaceapi.com/api/v0/character"
  },
  {
    "type": "GET",
    "name": "Single Character",
    "path": "/character/<id>",
    "fullUrl": "https://finalspaceapi.com/api/v0/character/<id>"
  },
  {
    "type": "GET",
    "name": "All Episodes",
    "path": "/episode",
    "queryParams": [
      {
        "optional": true,
        "name": "Sort By",
        "values": [
          "asc",
          "desc"
        ]
      }
    ],
    "fullUrl": "https://finalspaceapi.com/api/v0/episode"
  },
  {
    "type": "GET",
    "name": "Single Episode",
    "path": "/episode/<id>",
    "fullUrl": "https://finalspaceapi.com/api/v0/episode/<id>"
  }
]
```


:::info Endpoints


There are currently four available resources:

- [Character](/docs/character): used to get all the characters.
  
```
GET https://finalspaceapi.com/api/v0/character
```
*Sample Request*

```
https://finalspaceapi.com/api/v0/character
```

*Sample Response*
```json
[{"id":1,"name":"Gary Goodspeed","status":"Alive","species":"Human","gender":"Male","hair":"Blonde",
"alias":["The Gary(by Lord Commander)","Thunder Bandit(code name)","Star Dragon(new code name)",
"Primate(By Clarence)"],"origin":"Earth","abilities":["Piloting","Marksmanship"],
"img_url":"https://finalspaceapi.com/api/character/avatar/gary_goodspeed.jpg"},
{"id":2,"name":"Mooncake","status":"Alive","species":"Mooncake's Species",
"gender":"Male","hair":"None","alias":["Specimen E - 351","Little Buddy","Planet Destroyer","Dude cake","Little Guy"],
"origin":"Created when John Goodspeed used an Anti-matter bomb to close a breach to Final Space.",
"abilities":["Hovering","Firing Laser Beams","Planet Destruction"],
"img_url":"https://finalspaceapi.com/api/character/avatar/mooncake.jpg"}]
```


- [Character with Character id](/docs/character): used to get a specific character details.
  
```
GET https://finalspaceapi.com/api/v0/character/<character_id>
```
*Sample Request*

```
https://finalspaceapi.com/api/v0/character/2
```

*Sample Response*
```json
{"id":2,"name":"Mooncake","status":"Alive","species":"Mooncake's Species","gender":"Male","hair":"None",
"alias":["Specimen E - 351","Little Buddy","Planet Destroyer","Dude cake","Little Guy"],
"origin":"Created when John Goodspeed used an Anti-matter bomb to close a breach to Final Space.",
"abilities":["Hovering","Firing Laser Beams","Planet Destruction"],
"img_url":"https://finalspaceapi.com/api/character/avatar/mooncake.jpg"}
```


- [Episode](/docs/episode): used to get all the episodes.

```
GET https://finalspaceapi.com/api/v0/episode
```

*Sample Request*

```
https://finalspaceapi.com/api/v0/episode
```

*Sample Response*
```json
[{"id":1,"name":"Chapter 1","air_date":"02/15/2018","director":"Mike Roberts","writer":"Olan Rogers",
"characters":["https://finalspaceapi.com/api/v0/character/1","https://finalspaceapi.com/api/v0/character/2",
"https://finalspaceapi.com/api/v0/character/3","https://finalspaceapi.com/api/v0/character/5",
"https://finalspaceapi.com/api/v0/character/6","https://finalspaceapi.com/api/v0/character/9",
"https://finalspaceapi.com/api/v0/character/11"],"img_url":
"http://finalspaceapi.com/api/episode/image/chapter1.jpg"},
{"id":2,"name":"Chapter 2","air_date":"02/15/2018","director":"Mike Roberts","writer":"Olan Rogers",
"characters":["https://finalspaceapi.com/api/v0/character/1","https://finalspaceapi.com/api/v0/character/2",
"https://finalspaceapi.com/api/v0/character/3","https://finalspaceapi.com/api/v0/character/4",
"https://finalspaceapi.com/api/v0/character/5","https://finalspaceapi.com/api/v0/character/6",
"https://finalspaceapi.com/api/v0/character/9","https://finalspaceapi.com/api/v0/character/10",
"https://finalspaceapi.com/api/v0/character/12","https://finalspaceapi.com/api/v0/character/14"],
"img_url":"http://finalspaceapi.com/api/episode/image/chapter2.jpg"}]
```


- [Episode with Episode Number](/docs/episode): used to get a particular episode details.

```
GET https://finalspaceapi.com/api/v0/episode/<episode_id>
```

*Sample Request*

```
https://finalspaceapi.com/api/v0/episode/1
```
*Sample Response*
  ```json
  {"id":1,"name":"Chapter 1","air_date":"02/15/2018","director":"Mike Roberts","writer":"Olan Rogers",
  "characters":["https://finalspaceapi.com/api/v0/character/1","https://finalspaceapi.com/api/v0/character/2",
  "https://finalspaceapi.com/api/v0/character/3","https://finalspaceapi.com/api/v0/character/5",
  "https://finalspaceapi.com/api/v0/character/6","https://finalspaceapi.com/api/v0/character/9",
  "https://finalspaceapi.com/api/v0/character/11"],"img_url":"http://finalspaceapi.com/api/episode/image/chapter1.jpg"}
  ```
:::

### GraphQL

:::note
Coming Soon. Work in Progress.
:::
