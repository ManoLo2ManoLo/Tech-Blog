const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../Models')
const withAuth = require('../utils/auth');

module.exports = router;