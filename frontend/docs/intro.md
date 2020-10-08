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

*Sample request*

```
https://finalspaceapi.com/api/v0/
```

```json
{
  "characters": "https://finalspaceapi.com/api/v0/character",
  "episodes": "https://finalspaceapi.com/api/v0/episode"
}
```


:::info Endpoints


There are currently two available resources:

- [Character](/docs/character): used to get all the characters.
  
```
https://finalspaceapi.com/api/v0/character
```

- [Episode](/docs/episode): used to get all the episodes.

```
https://finalspaceapi.com/api/v0/episode
```

:::

### GraphQL

:::note
Coming Soon. Work in Progress.
:::
