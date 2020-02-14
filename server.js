require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT;

const app = express()
     app.set('view engine', 'ejs');
     app.set('views', path.join(__dirname, 'app/views'));
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({
         extended: true
     }));
     app.use('/', express.static('app/static/'));

     app.listen(port)


     