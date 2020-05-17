const express = require('express');
const passport = require('passport');

const router = express.Router();
const Tweets = require('../models/tweets');
const Users = require('../models/users');
const utils = require('../utils');

router.get('/', utils.requireLogin, (req, res) => {
    console.log(123)
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res, next) => {
    const { username, password, confirmPassword } = req.body;
    if (password === confirmPassword) {
        Users.register(new Users({ username, name: username }), password, (err, user) => {
            if (err) {
                return next(err)
            }

            passport.authenticate('local')(req, res, () => {
                return res.redirect('/');
            });
        });
    } else {
        return next({ message: 'Password does not match' })
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});


router.post('/tweets/:_id', utils.requireLogin, async (req, res) => {
    const { content, imageUrl } = req.body
    const _id = req.params._id

    
    const result = await Tweets.findByIdAndUpdate(_id, {
        content,
        imageUrl: imageUrl ? JSON.parse(imageUrl) : []
    })

    res.redirect('/');
})
router.post('/tweets', utils.requireLogin, async (req, res) => {
    const { content, imageUrl } = req.body

    const tweet = new Tweets({
        content,
        imageUrl: imageUrl ? JSON.parse(imageUrl) : [],
        author: req.user
    })
    
    const result = await tweet.save()

    res.redirect('/');
})
router.delete('/tweets', utils.requireLogin, async (req, res) => {
    const { _id } = req.body
    console.log(_id)
    const result = await Tweets.findByIdAndDelete(_id)
    res.json({
        success: true,
        result
    })
})
module.exports = router;