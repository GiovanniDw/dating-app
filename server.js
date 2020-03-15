require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', express.static('app/static/'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));


require('./passport')(app);

app.use(require('./app/routes'));


app.get('/chat', chat);

// app.get('*', error)


function chat(req, res) {
    res.render('pages/chat', {
        title: 'Chats',
        user: req.user
    });
};

app.use((error, req, res, next) => {
    console.error(error);
    res.render('pages/error', {
        user: req.user,
        error
    });
});

// config mongoose
require('./app/middleware/mongoose')()
    .then(() => {
        app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
    })

    .catch(err => {
        // an error occurred connecting to mongo!
        // log the error and exit
        console.error('Unable to connect to mongo.')
        console.error(err);
    });