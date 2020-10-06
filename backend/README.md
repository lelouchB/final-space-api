# Final Space API - Backend
![](https://raw.githubusercontent.com/lelouchB/lelouchB/master/wallpaper.jpg)

## About the project
This is the backend part of the Final Space API. The Final Space API is a RESTful API based on the television show [Final Space](https://en.wikipedia.org/wiki/Final_Space). All the data is taken from Final Space [wiki](https://final-space.fandom.com/wiki/Final_Space_Wiki).

## Getting Started
To get a local copy up and running follow these simple example steps.

#### Prerequisites
- [NodeJS](https://nodejs.org/en/)
- npm
`npm install npm@latest -g`
- [MongoDB](https://docs.mongodb.com/manual/installation/)

#### Project Structure

``` 
backend
│   package-lock.json
│   package.json
│   server.js
├───config
│       db.js
├───controllers
│       api.js
│       character.api.js
├───images
    ...
├───models
│       character.model.js
└───routes
        routes.js
```

#### Installation
1. Clone this repo
` git clone https://github.com/lelouchB/final-space-api.git `
2. Go to the backend directory
3. Install the required npm packages
` npm install `
4. Create a **.env** folder and add the **Database URL** in it.
` DATABASE_URL=mongodb://127.0.0.1:27017/final-space-api `

#### Running 
After completing the above steps run this to start a development server:
` npm run dev `

## Technologies Used
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Helmet](https://www.npmjs.com/package/helmet)
