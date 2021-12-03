const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../Models')
const withAuth = require('../utils/auth.js');

router.get('/', (req, res) => {
    res.render('homePage');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard');
});

module.exports = router;