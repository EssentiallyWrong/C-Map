# webApp-Group21 - C-Map

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application to crowd source COVID-19 information in a Google Maps interface. It will
allow users to view local venues on a map interface and add posts to them for other users to view.

At this time, our application is mobile-first, and best viewed from a limited browser size perspective.
Recommended to select an autofill when using the search method to prevent errors.

## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap
* Firebase
* git
* Google Maps API
* Visual Studio Code

## ScreenShots
![alt text](https://github.com/EssentiallyWrong/C-Map/blob/main/images/MainPage.png)

## Content
Content of the project folder:

```
 Top level of project folder:
├── .gitignore               # Git ignore file
├── index.html               # Main page for application
├── sign in.html             # Users are redirected to this page upon clicking the login button
├── 404.html                 # Page not found address provided by Firebase
├── README.md                # Readme

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── .vscode                  # Folder for vscode settings
├── images                   # Folder for images
    /map.jpg                 # Image file for map background.
├── scripts                  # Folder for scripts
    /currentUser.js          # Checks if user is signed in and performs related functions
    /firebase_api_group21.js # API key for firebase
    /hideShow.js             # Provides functionality to hide interface objects
    /index.js                # Functionality for map page
    /login.js                # Functionality for login page
    /logOut.js               # Logs current user out when clicking logout button
    /post.js                 # Constructor for post objects
    /submit.js               # Contains all functionality regarding adding posts when clicking submit button
    /venue.js                # Constructor for venue objects
├── styles                   # Folder for styles
    /index.css               # CSS stylesheet for index.html
    /sign_in.css             # CSS stylesheet for sign in.html

Firebase hosting files:
├── .firebaserc              # Firebase hosting file
├── firebase.json            # Firebase hosting file
├── firestore.indexes.json   # Firebase hosting file
├── firestore.rules          # Firebase hosting file

```