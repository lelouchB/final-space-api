---
id: episode
title: Episode 
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
  - tbs
  - adult swim
  - episode
description: Episode endpoint documentation for Final Space API.
---

This is the documentation for the `/episode` endpoint. There are curently `23` episodes sorted by id, more are added every season. 

### Episode schema

This is the schema of the episode

|Key|Type|Description|
|---|---|---|
|id|int|The id of the episode (starting from 1).
|name|string|The name of the episode.
|air_date|string|The air date of the episode.
|director|string|The director of the episode.
|writer|string|The writer of the episode.
|characters|array|Different characters of the episode.
|img_url|string (url)|Link to the episode's image. 

### Get all episodes

You can access the list of episodes by using the `/episode` endpoint.

```
https://finalspaceapi.com/api/v0/episode/
```

```json 
[
  {
    "id": 1,
    "name": "Chapter 1",
    "air_date": "02/15/2018",
    "director": "Mike Roberts",
    "writer": "Olan Rogers",
    "characters": [
        "https://finalspaceapi.com/api/v0/character/1",
        "https://finalspaceapi.com/api/v0/character/2",
        "https://finalspaceapi.com/api/v0/character/3",
        "https://finalspaceapi.com/api/v0/character/5",
        "https://finalspaceapi.com/api/v0/character/6",
        "https://finalspaceapi.com/api/v0/character/9",
        "https://finalspaceapi.com/api/v0/character/11"
    ],
    "img_url": "https://static.wikia.nocookie.net/final-space/images/9/9a/Episode_1b.jpg/revision/latest/scale-to-width-down/1000?cb=20180323215650"
  },
  // ...
]
```

### Get a single episode

You can get a single episode by adding the `id` as a parameter: `/episode/15`

```
https://finalspaceapi.com/api/v0/episode/15
```

```json
{
  "id": 15,
  "name": "The Notorious Mrs. Goodspeed",
  "air_date": "06/22/2019",
  "director": "Yoriaki Mochizuki",
  "writer": "Olan Rogers",
  "characters": [
    "https://finalspaceapi.com/api/v0/character/1",
    "https://finalspaceapi.com/api/v0/character/4",
    "https://finalspaceapi.com/api/v0/character/6",
    "https://finalspaceapi.com/api/v0/character/7",
    "https://finalspaceapi.com/api/v0/character/8",
    "https://finalspaceapi.com/api/v0/character/9",
    "https://finalspaceapi.com/api/v0/character/10",
    "https://finalspaceapi.com/api/v0/character/11",
    "https://finalspaceapi.com/api/v0/character/12",
    "https://finalspaceapi.com/api/v0/character/13",
    "https://finalspaceapi.com/api/v0/character/16"
  ],
  "img_url": "https://static.wikia.nocookie.net/final-space/images/e/ea/Notorious.png/revision/latest?cb=20190724000700" 
}
```
