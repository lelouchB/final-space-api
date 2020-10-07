[![Final Space API](https://raw.githubusercontent.com/lelouchB/lelouchB/master/wallpaper.jpg)](https://finalspaceapi.com)

## What is The Final API?👇

The Final Space API is a RESTful API based on the television show [Final Space](https://en.wikipedia.org/wiki/Final_Space). All the data is taken from [Final Space wiki](https://final-space.fandom.com/wiki/Final_Space_Wiki).

## Project Structure
```
final-space-api
├───.github
│   ├───ISSUE_TEMPLATE
│   └───workflows
├───backend
│   ├───config
│   ├───controllers
│   ├───images
│   ├───models
│   └───routes
└───frontend
    ├───blog
    ├───docs
    ├───src
    │   ├───css
    │   └───pages
    │       └───Components
    │           ├───Body
    │           └───Head
    └───static
        └───img
```

## Installation

First, Clone this repo. Both frontend and backend need to be installed seperately. 

For **frontend** run the following commands.
 
 ```bash
 cd frontend
 npm install
 npm run build
 ```
 It is important that frontend is installed first and a `build` directory is created since the backend serves this `build` folder. 
 
 For **backend** run the following commands.
 
 ```bash
 cd backend
 npm install
 ```
 ## Starting the Development Server
 
 Run the following command in backend directory to start the development server at `PORT=8000` by default.
 
 ```bash
 cd backend
 npm run dev
 ```
 
 This will start the development server at [http://localhost:8000](http://localhost:8000).
 If `build` folder doen't exist you will see an error at the baseURL i.e. `/`. Create the `build` folder to fix this issue.
 
 
 ## Contributing to Frontend
 
 The frontend of this project is made with [Docusaurus](https://v2.docusaurus.io/docs/).
 To start the dev server, run the following commands in `frontend` directory:
 
 ```bash
 cd frontend
 npm start
 ```
 
 This will start the frontend dev server on [http://localhost:3000](http://localhost:3000).
 
After you have done with your contribution, create the production build by running the following commands:


```bash
cd frontend
npm run build
npm run server
```
The last command will server the build folder on [http://localhost:3000](http://localhost:3000).

Make sure your contributions are reflected properly in this build.


## Contributing to Backend

The backend is made with **NodeJS**, **Express** and **MongoDB**.
Run the following commands to open the dev server.

```bash
cd backend
npm run dev
```

Head to [http://localhost:8000](http://localhost:8000), if a `build` folder is present in `frontend` directory then you will see the landing page of the project.



## License
Final Space is created by Olan Rogers for [TBS](https://www.tbs.com/) and later picked by [Adult Swim](https://www.adultswim.com). The data and images are used without claim of ownership and belong to their respective owners.

This API is open source and uses a [BSD license](/LICENSE).

 
