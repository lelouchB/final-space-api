# Final Space API - Backend

![](https://github.com/lelouchB/final-space-api/blob/main/frontend/static/img/wallpaper2.jpg?raw=true)

## About the project

This is the backend part of the Final Space API. The Final Space API is a RESTful API based on the television show [Final Space](https://en.wikipedia.org/wiki/Final_Space). All the data is taken from Final Space [wiki](https://final-space.fandom.com/wiki/Final_Space_Wiki).

## Getting Started

To get a local copy up and running follow these simple example steps.

#### Prerequisites

- [NodeJS](https://nodejs.org/en/)
- npm

```bash
npm install npm@latest -g
```

- [MongoDB](https://docs.mongodb.com/manual/installation/)

#### Project Structure

```
backend
|   .env.example
|   .gitignore
|   .prettierignore
|   .prettierrc.json
│   package-lock.json
│   package.json
|   README.md
│   server.js
├───config
|       api.js
│       db.js
|       endpoints.js
├───controllers
│       api.js
│       character.api.js
|       episode.api.js
├───helpers
│       options.js
│       seeder.js
├───images
    ...
├───models
│       character.model.js
|       episode.model.js
└───routes
        routes.js
```

#### Installation

1. Clone this repo

```bash
git clone https://github.com/lelouchB/final-space-api.git
```

2. Cd to the backend directory

```bash
cd final-space-api/backend
```

3. Install the required npm packages

```bash
npm install
```

4. Copy `.env.example` file and rename it to `.env`

```bash
cp .env.example .env
```

5. (Optional) seed local database with actual data from api

```bash
npm run seed
```

#### Running

After completing the above steps run this to start a development server:

```bash
npm run dev
```

## Technologies Used

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Helmet](https://www.npmjs.com/package/helmet)
