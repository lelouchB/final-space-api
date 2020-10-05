[![Final Space API](https://raw.githubusercontent.com/lelouchB/lelouchB/master/wallpaper.jpg)](https://finalspaceapi.com)

# Final Space API

The Final Space API is a RESTful API based on the television show [Final Space](https://en.wikipedia.org/wiki/Final_Space). All the data is taken from [Final Space wiki](https://final-space.fandom.com/wiki/Final_Space_Wiki).

## Project Structure
```
final-space-api
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
    └───static
        └───img
```

## Installation

Both frontend and backend need to be installed seperately. 

 **frontend**
 
 ```bash
 cd frontend
 npm install
 npm run build
 ```
 It is important that frontend is installed first and a `build` directory is created since the backend serves this `build` folder. 
 
 **backend**
 
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
 
 
 
 `
 
