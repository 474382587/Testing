const express = require('express');
const router = express.Router();
const utils = require('../utils');
const Users = require('../models/users');

router.post('/edit', utils.requireLogin, (req, res) => {
  Users.update({ _id: req.user._id }, req.body, (err) => {
    if(err) {
      return next(err);
    } else {
      return res.redirect('/profile')
    }
  });
});

router.post('/avatar', utils.requireLogin, (req, res) => {
  Users.update({ _id: req.user._id }, req.body, (err) => {
    if(err) {
      return next(err);
    } else {
      return res.json({ success: true })
    }
  });
});
router.get('/', utils.requireLogin, (req, res) => {
  res.render('profile');
});

router.get('/edit', utils.requireLogin, (req, res) => {
   res.render('editProfile');
 });

module.exports = router;