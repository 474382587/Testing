const express = require('express');
const app = express();
const path = require('path')

const logger = require('morgan'); // HTTP request logger <https://github.com/expressjs/morgan#readme>
const cookieParser = require('cookie-parser'); // parse cookie of the request
const bodyParser = require('body-parser'); // parse body of the request


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdxd');


// const tweets = require('./tweets');
const index = require('./routes/index');
const profile = require('./routes/profile');


// Note: The will allow you to use moment in pug.
app.locals.moment = require('moment');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// add this line before logger to prevent logging all static file loading
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));



// Set views folder to store all view files(.pug)
app.set('views', path.join(__dirname, 'views'));
// Set pug as the view engine
app.set('view engine', 'pug');

// Routes
app.use('/', index);
app.use('/profile', profile);

// catch 404 error and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.send(err.message);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));