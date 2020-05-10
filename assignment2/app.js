const express = require('express');
const app = express();
const path = require('path')

const logger = require('morgan'); // HTTP request logger <https://github.com/expressjs/morgan#readme>
const cookieParser = require('cookie-parser'); // parse cookie of the request
const bodyParser = require('body-parser'); // parse body of the request

const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./models/users');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jerkjoe:jinyuhui1994@cluster0-t5mtc.mongodb.net/test?retryWrites=true&w=majority');


// const tweets = require('./tweets');
const index = require('./routes/index');
const profile = require('./routes/profile');

const Tweets = require('./models/tweets');

app.use(async (req, res, next) => {
  const result = await Tweets.find({}).lean()
    const promiseArr = result.map(async tweet => {
        return {
            ...tweet,
            author: await Users.findById(tweet.author)
        }
    })
    const tweets = await Promise.all(promiseArr)
    res.locals.tweets = tweets;
    console.log(tweets)
    next();
})

// Note: The will allow you to use moment in pug.
app.locals.moment = require('moment');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// add this line before logger to prevent logging all static file loading


app.use(express.static(path.join(__dirname, 'public')));
// Serving static files in Express

app.use(logger('dev'));
// :method :url :status :response-time ms - :res[content-length]

// Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server.
// Set views folder to store all view files(.pug)
app.set('views', path.join(__dirname, 'views'));
// Set pug as the view engine
app.set('view engine', 'pug');

app.use(session({
    secret: 'webdxd',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
// Routes
app.use('/', index);
app.use('/profile', profile);

/**
 * app.use([path,] callback [, callback...])
    Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
 */

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