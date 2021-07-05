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
  - location
description: Location endpoint documentation for Final Space API.
---

This is the documentation for the `/location` endpoint. There are currently `12` locations sorted by id.

### Location schema

| Key               | Type         | Description                               |
| ----------------- | ------------ | ----------------------------------------- |
| id                | int          | The id of the location (starting from 1). |
| name              | string       | The name of the location.                 |
| type              | string       | The type of the location.                 |
| inhabitants       | array        | Inhabitants of the location.              |
| notable_residents | array        | Notable residents(if any).                |
| img_url           | string (url) | Image of the location. (400x300)          |

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
    "img_url": "https://finalspaceapi.com/api/location/image/earth.jpg"
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
  "img_url": "https://finalspaceapi.com/api/location/image/tera_con_prime.jpg"
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
        "id": 12,
        "name": "Invictus' Prison",
        "type": "Prison dimension",
        "inhabitants": [
            "Invictus",
            "Ash Graven",
            "Zombie Garys",
            "Lord Commander"
        ],
        "notable_residents": [
            "https://finalspaceapi.com/api/v0/character/17"
        ],
        "img_url": "https://finalspaceapi.com/api/image/invictus_prison.jpg"
    }
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
    "img_url": "https://finalspaceapi.com/api/location/image/earth.jpg"
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
    "img_url": "https://finalspaceapi.com/api/location/image/final_space.jpg"
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
    "img_url": "https://finalspaceapi.com/api/location/image/tera_con_prime.jpg"
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
    "id": 12,
    "name": "Invictus' Prison",
    "type": "Prison dimension",
    "inhabitants": ["Invictus", "Ash Graven", "Zombie Garys", "Lord Commander"],
    "notable_residents": ["https://finalspaceapi.com/api/v0/character/17"],
    "img_url": "https://finalspaceapi.com/api/image/invictus_prison.jpg"
  },
  {
    "id": 11,
    "name": "Ventrexia",
    "type": "Planet",
    "inhabitants": ["Ventrexian"],
    "notable_residents": [
      "https://finalspaceapi.com/api/v0/character/5",
      "https://finalspaceapi.com/api/v0/character/4"
    ],
    "img_url": "https://finalspaceapi.com/api/image/ventrexia.jpg"
  },
  {
    "id": 10,
    "name": "Serepentis",
    "type": "Planet",
    "inhabitants": ["Serepentians"],
    "notable_residents": ["https://finalspaceapi.com/api/v0/character/7"],
    "img_url": "https://finalspaceapi.com/api/image/serepentis.jpg"
  }
]
```
