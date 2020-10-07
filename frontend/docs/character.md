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

This is the documentation for the `/character` endpoint. There are curently `25` characters sorted by id, more are added everyday. 

### Character schema

This is the schema of the character

|Key|Type|Description|
|---|---|---|
|id|int|The id of the character (starting from 1).
|name|string|The name of the character.
|status|string|The status of the character.
|species|string|The species of the character.
|gender|string|The gender of the character.
|hair|string|The hair color of the character.
|origin|object|Name of the character's origin location.
|abilities|array|Different abilities of character.
|alias|array|Different names of character.
|img_url|string (url)|Link to the character's image. 

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
  //
]
```

### Get a single character
You can get a single character by adding the `id` as a parameter: `/character/2`
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
  "alias": [
    "General Avocato"
  ],
  "origin": "Unknown",
  "abilities": [
    "Combat",
    "Surgery"
  ],
  "img_url": "https://finalspaceapi.com/api/character/avatar/avocato.jpg"
}
```
