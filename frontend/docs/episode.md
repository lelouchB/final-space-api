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

Currently there are `23` episodes spanning over two seasons released in 2018 and 2019.

Season 1 premiered on TBS and consists of 10 episodes which are named as **Chapter 1**, **Chapter 2**, **Chapter 3**, etc.

Season 2 premiered in 2019 on Adult Swim and consists of 13 episodes.

Season 3 is currently in development and it's data will be added after it's release.

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
    "img_url": "http://finalspaceapi.com/episode/image/chapter1.jpg"
  },
 ...
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
  "img_url": "http://finalspaceapi.com/episode/image/the_notorious_mrs_goodspeed.jpg"
}
```



### Sort the response

You can now sort the response based on `id` by passing the `/?sort=asc` or `/?sort=desc` query in the URL.

```
https://finalspaceapi.com/api/v0/episode/?sort=desc
```

```json
[
  {
    "id": 23,
    "name": "The Sixth Key",
    "air_date": "08/23/2019",
    "director": "Yoriaki Mochizuki",
    "writer": "Olan Rogers",
    "characters": [
      "https://finalspaceapi.com/api/v0/character/1",
      "https://finalspaceapi.com/api/v0/character/4",
      "https://finalspaceapi.com/api/v0/character/5",
      "https://finalspaceapi.com/api/v0/character/6",
      "https://finalspaceapi.com/api/v0/character/7",
      "https://finalspaceapi.com/api/v0/character/8",
      "https://finalspaceapi.com/api/v0/character/9",
      "https://finalspaceapi.com/api/v0/character/12",
      "https://finalspaceapi.com/api/v0/character/13",
      "https://finalspaceapi.com/api/v0/character/16"
    ],
    "img_url": "http://finalspaceapi.com/episode/image/the_sixth_key.jpg"
  },
  ...
]
```


