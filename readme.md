# 🎧 Party Finder
The research of this project will be documented in the [Wiki](https://github.com/GiovanniDw/dating-app/wiki)

_This info will be updated_

## Description

This repo is a project based on the following course at HvA CMD
- [Block Tech](https://github.com/cmda-bt)
   - [Project Tech](https://github.com/cmda-bt/pt-course-19-20)

> Project Tech is a first stepping stone for you to become a well-rounded web developer (or a designer with knowledge of how things are made). You'll build a dynamic prototype of a web application. This project continues where earlier courses left off with topics such as HTML, CSS, JS, research, design, and project management.

### Features
- [x] Register/Login.
- [x] Add Profile info.
- [x] Search for games using the [IGDB api](https://api-docs.igdb.com/#about).
- [x] Add a game to your profile.
- [ ] Like/Dislike Profiles.

## Table of Contents

- [🎧 Party Finder](#%f0%9f%8e%a7-party-finder)
  - [Description](#description)
    - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Run locally](#run-locally)
  - [Code Overview](#code-overview)
    - [Dependencies](#dependencies)
    - [devDependencies](#devdependencies)
    - [Application Structure](#application-structure)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Licence](#licence)

## Run locally

Before you can run this project locally [`nodejs`](https://nodejs.org/en/) & [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) must be installed

Clone this project & Install the dependencies:
```zsh
  $ git clone https://github.com/GiovanniDw/party-finder.git  
  $ cd party-finder
  $ npm install
```

Before the app can be started, we need to create a `.env` file in the root folder of the app. This file must have some env variables specified below.
   - `MONGO_DB` - Must be a connection string of mongoDB. I recommend a free MongoDB at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - `DB_NAME` - Must be the name of your mongoDB.
   - `PORT` - The port the server wil run at localhost.
   - `SESSION_SECRED` - For more info check[https://github.com/expressjs/session#secret](https://github.com/expressjs/session#secret)
   - `API_KEY` - To use the search for games function you can get a free API key at [https://api.igdb.com](https://api.igdb.com) 


The `.env` file could look something like this: 

```
MONGO_DB=mongodb+srv://<username>:<password>@<context>-xxxxxx.mongodb.net/test
DB_NAME=< The name of your mongoDB >
PORT="XXXX"
SESSION_SECRED='xxxxxxx'
API_KEY='xxxxxxxxx'
```

Start the app:
```zsh
$ npm run start
```
Start the app with nodemon:
```zsh
$ npm run nmStart
```

## Code Overview
### Dependencies
- [expressjs](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node.
  - express-session
  - multer
  - body-parser
- [mongoose](https://github.com/Automattic/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
  - mongoose-autopopulate
- [passport](https://github.com/jaredhanson/passport) - Passport is Express-compatible authentication middleware for Node.js.
  - passport-local  

### devDependencies
- [nodemon]
- [node-sass]

### Application Structure
- `server.js` - The entry point to the application.
- `passport.js` - Contains configuration for passport.
- `app/routes` - This folder contains the app's routes.
- `app/controllers` - Contains the controllers for the routes.
- `app/models` - Contains the Schema defenitions for Mongoose models
- `app/helpers` - Contains helper functions for the controllers.
- `app/middleware` - Contains middleware functions.
- `app/static` - Contains static files like images & css.
- `app/views` - Contains ejs files that will be compiled by expressjs


## Usage 

## Credits

## Licence 


