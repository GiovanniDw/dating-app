# Party Finder
With Party Finder you can find gamers with the same intrests as you!

This repo is a project based on the following course at HvA CMD
- [Block Tech](https://github.com/cmda-bt)
   - [Project Tech](https://github.com/cmda-bt/pt-course-19-20)

> Project Tech is a first stepping stone for you to become a well-rounded web developer (or a designer with knowledge of how things are made). You'll build a dynamic prototype of a web application. This project continues where earlier courses left off with topics such as HTML, CSS, JS, research, design, and project management.

The research of this project will be documented in the [Wiki](https://github.com/GiovanniDw/dating-app/wiki)

## Features
- [x] Register/Login.
- [x] Add Profile info.
- [x] Search for games using the [IGDB api](https://api-docs.igdb.com/#about).
- [x] Add a game to your profile.
- [ ] Like/Dislike Profiles.

## Contents

  - [Run locally](#run-locally)
  - [Code Overview](#code-overview)
    - [Dependencies](#dependencies)
    - [devDependencies](#devdependencies)
    - [Application Structure](#application-structure)
  - [Resources](#resources)
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
  - [express-session](https://github.com/expressjs/session)  
  - [multer](https://github.com/expressjs/multer) - Multer is a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.
  - [body-parser](https://github.com/expressjs/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
  - [cookie-parser](https://github.com/expressjs/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- [ejs](https://github.com/mde/ejs) - Embedded JavaScript templates.
- [dotenv](https://github.com/motdotla/dotenv#readme) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.  
- [mongoose](https://github.com/Automattic/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
  - [mongoose-autopopulate](https://github.com/mongodb-js/mongoose-autopopulate) - Always populate() certain fields in your mongoose schemas
- [passport](https://github.com/jaredhanson/passport) - Passport is Express-compatible authentication middleware for Node.js.
  - [passport-local](http://www.passportjs.org/packages/passport-local/) - The local authentication strategy authenticates users using a username and password. 
  - [connect-flash](https://github.com/jaredhanson/connect-flash#readme) - show any authentication error messages in our login form.
  - [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) - bcrypt is the hashing algorithm to protect stored credentials.
- [apicalypse](https://github.com/igdb/node-apicalypse) - A simple client for creating Apicalypse queries.

### devDependencies
- [nodemon](https://github.com/remy/nodemon/) - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [node-sass](https://github.com/sass/node-sass) - node-sass allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.
- [ejs-lint](https://github.com/RyanZim/EJS-Lint) - Linter/Syntax Checker for [EJS Templates](https://github.com/mde/ejs).

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


## Resources
- [https://api-docs.igdb.com/](https://api-docs.igdb.com/)

## Licence 
All code in this repository is provided under the [MIT License](LICENCE)



