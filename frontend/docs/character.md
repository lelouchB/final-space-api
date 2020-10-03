---
id: character
title: Character 
---
import useBaseUrl from '@docusaurus/useBaseUrl';


<img alt="Final Space" src={useBaseUrl('img/wallpaper2.jpg')} />


There is a total of `13` characters sorted by id.

### Character schema

This is the schema of the character

|Key|Type|Description|
|---|---|---|
|_id|int|The Object id of the character.
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
[
  {
    "alias": [
      "The Gary(by Lord Commander)",
      "Thunder Bandit(code name)",
      "Star Dragon(new code name)",
      "Primate(By Clarence)"
    ],
    "abilities": [
      "Piloting",
      "Marksmanship"
    ],
    "_id": "5f76ed7ee2748d55533c4d0d",
    "id": 1,
    "name": "Gary Goodspeed",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "hair": "Blonde",
    "origin": "Earth",
    "img_url": "https://raw.githubusercontent.com/lelouchB/finalspaceapi/master/assets/images/gary_goodspeed.png"
  },
  ///
]
```

### Get a single character
You can get a single character by adding the `id` as a parameter: `/character/2`
```
https://finalspaceapi.com/api/api/v0/character/2
```
```json
  {
    "alias": [
      "Specimen E - 351",
      "Little Buddy",
      "Planet Destroyer",
      "Dude cake",
      "Little Guy"
    ],
    "abilities": [
      "Hovering",
      "Firing Laser Beams",
      "Planet Destruction"
    ],
    "_id": "5f76edc1e2748d55533ca3ef",
    "id": 2,
    "name": "Mooncake",
    "status": "Alive",
    "species": "Mooncake's Species",
    "gender": "Male",
    "hair": "Bald",
    "origin": "Created when John Goodspeed used an Anti-matter bomb to close a breach to Final Space.",
    "img_url": "https://raw.githubusercontent.com/lelouchB/finalspaceapi/master/assets/images/mooncake.png"
  }
```
