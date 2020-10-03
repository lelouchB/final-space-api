---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This documentation will help you get familiar with the resources of the **Final Space API** and show you how to make different queries, so that you can get the most out of it.

<img alt="Final Space" src={useBaseUrl('img/wallpaper.jpg')} />

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