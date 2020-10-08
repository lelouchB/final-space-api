# Final Space API

![](https://img.shields.io/badge/Maintained-Yes-orange)
![](https://img.shields.io/badge/PRs-Accepting-brightgreen)
![](https://img.shields.io/github/issues/lelouchB/final-space-api)
![](https://img.shields.io/github/contributors/lelouchB/final-space-api)
![](https://img.shields.io/github/issues-pr/lelouchB/final-space-api)
![](https://img.shields.io/github/license/lelouchB/final-space-api)


[![Final Space API](https://raw.githubusercontent.com/lelouchB/lelouchB/master/wallpaper.jpg)](https://finalspaceapi.com)

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

## Installation ⭐

First, Clone this repo. Both the frontend and the backend need to be installed seperately.
```bash
git clone https://github.com/lelouchB/final-space-api.git
```

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
 
 Run the following command in the backend directory to start the development server at `PORT=8000` by default.
 
 ```bash
 cd backend
 npm run dev
 ```
 
 This will start the development server at [http://localhost:8000](http://localhost:8000).
 **Note :** If `build` folder doen't exist you will see an error at the baseURL i.e. `/`. Create the `build` folder to fix this issue.
 
 ## Get Contributing 🤩
 First things first, In order to contribute you have to create a Pull Request from your forked repo which is a remote clone of this upstream repository.
 
 1. Click this button at the top of screen to fork this repo, **don't forget to star the              repository!** ⭐⭐
    ![form-button](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

2. Next, clone this repository using
    ```bash
    git clone https://github.com/lelouchB/final-space-api.git
    ```

3. It is critical to keep your forked repository in sync with the upstream repository so merge           conflicts can be avoided:
    ```bash
    git remote add upstream https://github.com/lelouchB/final-space-api.git
    git fetch upstream
    git pull upstream main
    git push
    ```

4. Create a new branch to work upon
    The branch name must be selected according to the issue
    ```bash
    git checkout -b <branch-name>
    ```

5. After the contribution work is ready, go ahead and add it to the staging area:
    ```bash
    git add -A
    ```

6. Now it is time to commit your changes and sync these changes to the forked repo:
    ```bash
    git commit -m <your_message>
    git push origin <branch-name>
    ```
    **Note :** Branch Name is the branch you created earlier

7. Issue a pull request from forked repo to this repo by clicking on ``New Pull Request``:
    ![](https://guides.github.com/activities/hello-world/create-pr.png)

8. Fill in the title and provide a concise description.
9. Wait for respose on the PR. Congratulations you just contributed to open source! 👏👏

### Contributing to Frontend
 
 The frontend of this project is made with [Docusaurus](https://v2.docusaurus.io/docs/) and [React](https://reactjs.org/).
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
npm run serve
```
The last command will server the build folder on [http://localhost:3000](http://localhost:3000).

Make sure your contributions are reflected properly in this build.

**For more details related to installation and requirements please check the README in Frontend directory.** 

### Contributing to Backend

The backend is made with **NodeJS**, **Express** and **MongoDB**.
Run the following commands to open the dev server.

```bash
cd backend
npm run dev
```

Head to [http://localhost:8000](http://localhost:8000), if a `build` folder is present in `frontend` directory then you will see the landing page of the project.

**For more details related to installation and requirements please check the README in Backend directory.** 

## License
Final Space is created by Olan Rogers for [TBS](https://www.tbs.com/) and later picked by [Adult Swim](https://www.adultswim.com). The data and images are used without claim of ownership and belong to their respective owners.

This API is open source and uses a [BSD license](/LICENSE).
 
