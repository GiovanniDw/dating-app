require('dotenv').config();

const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	favicon = require('serve-favicon'),
	passport = require('./config/passport'),
	routes = require('./config/routes'),
	mongoose = require('./config/middleware/mongoose'),
	PORT = process.env.PORT || 3000,
	app = express();
	
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/', express.static('static/'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

passport(app);

app.use(routes);

app.get('*', function (req, res, next) {
	let err = new Error(`${req.ip} tried to reach ${req.originalUrl}`); // Tells us which IP tried to reach a particular URL
	err.statusCode = 404;
	err.shouldRedirect = true; //New property on err so that our middleware will redirect
	next(err);
});

app.use((error, req, res, next) => {
	console.error(error);
	res.render('pages/error', {
		user: req.user,
		title: error,
		error
	});
});

// config mongoose
mongoose()
	.then(() => {
		app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
	})
	.catch(err => {
		// an error occurred connecting to mongo!
		// log the error and exit
		console.error('Unable to connect to mongo.');
		console.error(err);
	});