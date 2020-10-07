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


The Final Space API is a RESTful API based on the television show [Final Space](https://en.wikipedia.org/wiki/Final_Space). [Final Space wiki](https://final-space.fandom.com/wiki/Final_Space_Wiki) was used to gather data for this API.

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
  "episodes": "Coming Soon"
}
```


:::note


There are currently only one available resource:
- [Character](/docs/character): used to get all the characters.

:::

### GraphQl

:::info
Coming Soon. Work in Progress.
:::
