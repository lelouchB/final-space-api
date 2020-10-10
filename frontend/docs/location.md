---
id: location
title: Location
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
  - location
description: Location endpoint documentation for Final Space API.
---
 
This is the documentation for the /location endpoint. There are currently 9 locations sorted by id.

### Location schema


| Key               | Type         | Description                               |
| ----------------- | ------------ | ----------------------------------------- |
| id                | int          | The id of the location (starting from 1). |
| name              | string       | The name of the location.                 |
| type              | string       | The type of the location.                 |
| inhabitants       | array        | Inhabitants of the location.              |
| notable_residents | array        | Notable residents(if any).                |
| img_url           | string (url) | Image of the location.                    |

### Get all locations

You can access the list of locations by using the `/location` endpoint.

```
https://finalspaceapi.com/api/v0/location/
```

```json
[
  {
    "id": 1,
    "name": "Earth",
    "type": "Planet", 
    "inhabitants": ["Humans", "Animals", "Robots", "Aliens"],
    "notable_residents": [
      "https://finalspaceapi.com/api/v0/character/1",
      "https://finalspaceapi.com/api/v0/character/3"
    ],
    "img_url": ""
  },
 ...
]
```

### Get a single location

You can get a single location by adding the `id` as a parameter: `/location/3`

```
https://finalspaceapi.com/api/v0/location/3
```

```json
{
  "id": 3,
  "name": "Tera Con Prime",
  "type": "Destroyed planet", 
  "inhabitants": ["Lord Commander's army", "Infinity Guard soldiers"],
  "notable_residents": [
    "https://finalspaceapi.com/api/v0/character/10",
    "https://finalspaceapi.com/api/v0/character/11",
    "https://finalspaceapi.com/api/v0/character/20",
    "https://finalspaceapi.com/api/v0/character/27"
  ],
  "img_url": ""
}
```

### Sort the response

You can now sort the response based on `id` by passing the `/?sort=asc` or `/?sort=desc` query in the URL.

```
https://finalspaceapi.com/api/v0/location/?sort=desc
```

```json
[
  {
    "id": 9,
    "name": "The Order of the Twelve",
    "type": "Temple", 
    "inhabitants": [],
    "notable_residents": [],
    "img_url": "" 
  },
  ...
]
```

### Limit the response

You can now limit the response by passing the `/?limit={number}` query in the URL.

```
https://finalspaceapi.com/api/v0/location/?limit=3
```

```json
[
  {
    "id": 1,
    "name": "Earth",
    "type": "Planet", 
    "inhabitants": ["Humans", "Animals", "Robots", "Aliens"],
    "notable_residents": [
      "https://finalspaceapi.com/api/v0/character/1",
      "https://finalspaceapi.com/api/v0/character/3"
    ],
    "img_url": "" 
  },
  {
    "id": 2,
    "name": "Final Space",
    "type": "Dimension", 
    "inhabitants": ["Titans", "Invictus", "Quinn"],
    "notable_residents": [
      "https://finalspaceapi.com/api/v0/character/2",
      "https://finalspaceapi.com/api/v0/character/3",
      "https://finalspaceapi.com/api/v0/character/15",
      "https://finalspaceapi.com/api/v0/character/18"
    ],
    "img_url": "" 
  },
  {
    "id": 3,
    "name": "Tera Con Prime",
    "type": "Destroyed planet", 
    "inhabitants": ["Lord Commander's army", "Infinity Guard soldiers"],
    "notable_residents": [
      "https://finalspaceapi.com/api/v0/character/10",
      "https://finalspaceapi.com/api/v0/character/11",
      "https://finalspaceapi.com/api/v0/character/20",
      "https://finalspaceapi.com/api/v0/character/27"
    ],
    "img_url": "" 
  }
]
```

### Use limit with sort

You can limit and sort the response simultaneously by passing both `limit={number}` and `sort=desc` query parameters in the URL and seperating them with `&` operator.

```
https://finalspaceapi.com/api/v0/location/?limit=3&sort=desc
```

```json
[
  {
    "id": 9,
    "name": "The Order of the Twelve",
    "type": "Temple", 
    "inhabitants": [],
    "notable_residents": [],
    "img_url": "" 
  },
  {
    "id": 8,
    "name": "Lazarus Trap",
    "type": "Trap", 
    "inhabitants": [],
    "notable_residents": [],
    "img_url": "" 
  },
  {
    "id": 7,
    "name": "Deathcropolis",
    "type": "Gladiatorial Colosseum", 
    "inhabitants": [],
    "notable_residents": [],
    "img_url": "" 
  }
]
```
