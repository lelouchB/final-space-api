---
id: character
title: Character
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
  - character
description: Character endpoint documentation for Final Space API.
---

This is the documentation for the `/character` endpoint. There are currently `40` characters sorted by `id`.

### Character schema

| Key       | Type         | Description                                |
| --------- | ------------ | ------------------------------------------ |
| id        | int          | The id of the character (starting from 1). |
| name      | string       | The name of the character.                 |
| status    | string       | The status of the character.               |
| species   | string       | The species of the character.              |
| gender    | string       | The gender of the character.               |
| hair      | string       | The hair color of the character.           |
| origin    | object       | Name of the character's origin location.   |
| abilities | array        | Different abilities of character.          |
| alias     | array        | Different names of character.              |
| img_url   | string (url) | Link to the character's image.             |

### Get all characters

You can access the list of characters by using the `/character` endpoint.

```
https://finalspaceapi.com/api/v0/character/
```

```json
[ {
    "id": 1,
    "name": "Gary Goodspeed",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "hair": "Blonde",
    "alias": [
      "The Gary(by Lord Commander)",
      "Thunder Bandit(code name)",
      "Star Dragon(new code name)",
      "Primate(By Clarence)"
    ],
    "origin": "Earth",
    "abilities": [
      "Piloting",
      "Marksmanship"
    ],
    "img_url": "https://finalspaceapi.com/api/character/avatar/gary_goodspeed.jpg"
  },
  ...
]
```

### Get a single character

You can get a single character by adding the `id` as a parameter: `/character/5`

```
https://finalspaceapi.com/api/v0/character/5
```

```json
{
  "id": 5,
  "name": "Avocato",
  "status": "Alive",
  "species": "Ventrexian",
  "gender": "Male",
  "hair": "Dark Teal / White ",
  "alias": ["General Avocato"],
  "origin": "Unknown",
  "abilities": ["Combat", "Surgery"],
  "img_url": "https://finalspaceapi.com/api/character/avatar/avocato.jpg"
}
```

### Sort the response

You can now sort the response based on `id` by passing the `/?sort=asc` or `/?sort=desc` query in the URL.

```
https://finalspaceapi.com/api/v0/character/?sort=desc
```

```json
[
  {
    "id": 40,
    "name": "Zargon Tukalishi",
    "status": "Deceased",
    "species": "Unknown",
    "gender": "Male",
    "hair": "None",
    "alias": [],
    "origin": "Yarno",
    "abilities": [],
    "img_url": "https://finalspaceapi.com/api/character/avatar/zargon_tukalishi.jpg"
  },
  ...
]
```

### Limit the response

You can now limit the response by passing the `/?limit={number}` query in the URL.

```
https://finalspaceapi.com/api/v0/character/?limit=3
```

```json
[
  {
    "id": 1,
    "name": "Gary Goodspeed",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "hair": "Blonde",
    "alias": [
      "The Gary(by Lord Commander)",
      "Thunder Bandit(code name)",
      "Star Dragon(new code name)",
      "Primate(By Clarence)"
    ],
    "origin": "Earth",
    "abilities": ["Piloting", "Marksmanship"],
    "img_url": "https://finalspaceapi.com/api/character/avatar/gary_goodspeed.jpg"
  },
  {
    "id": 2,
    "name": "Mooncake",
    "status": "Alive",
    "species": "Mooncake's Species",
    "gender": "Male",
    "hair": "None",
    "alias": [
      "Specimen E - 351",
      "Little Buddy",
      "Planet Destroyer",
      "Dude cake",
      "Little Guy"
    ],
    "origin": "Created when John Goodspeed used an Anti-matter bomb to close a breach to Final Space.",
    "abilities": ["Hovering", "Firing Laser Beams", "Planet Destruction"],
    "img_url": "https://finalspaceapi.com/api/character/avatar/mooncake.jpg"
  },
  {
    "id": 3,
    "name": "Quinn Ergon",
    "status": "Alive",
    "species": "Human",
    "gender": "Female",
    "hair": "Dark Brown",
    "alias": ["Nightfall(codename)"],
    "origin": "Earth",
    "abilities": [
      "Astrophysicist",
      "Engineer",
      "Piloting",
      "Hand - to - hand Combat"
    ],
    "img_url": "https://finalspaceapi.com/api/character/avatar/quinn_ergon.jpg"
  }
]
```

### Use limit with sort

You can limit and sort the response simultaneously by passing both `limit={number}` and `sort=desc` query parameters in the URL and seperating them with `&` operator.

```
https://finalspaceapi.com/api/v0/character/?limit=3&sort=desc
```

```json
[
  {
    "id": 40,
    "name": "Zargon Tukalishi",
    "status": "Deceased",
    "species": "Unknown",
    "gender": "Male",
    "hair": "None",
    "alias": [],
    "origin": "Yarno",
    "abilities": [],
    "img_url": "https://finalspaceapi.com/api/character/avatar/zargon_tukalishi.jpg"
  },
  {
    "id": 39,
    "name": "Werthrent",
    "status": "Deceased",
    "species": "Fire Snake",
    "gender": "Male",
    "hair": "None",
    "alias": [
      "Serpent God",
      "Snake God"
    ],
    "origin": "Serepentis",
    "abilities": [
      "Telepathy",
      "Mind-breaking"
    ],
    "img_url": "https://finalspaceapi.com/api/character/avatar/werthrent.jpg"
  },
  {
    "id": 38,
    "name": "Viro",
    "status": "Deceased",
    "species": "Cyborg",
    "gender": "Male",
    "hair": "None",
    "alias": [],
    "origin": "Unknown",
    "abilities": [],
    "img_url": "https://finalspaceapi.com/api/character/avatar/viro.jpg"
  }
]
```
