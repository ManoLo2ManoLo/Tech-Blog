const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../Models')
const withAuth = require('../utils/auth.js');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;