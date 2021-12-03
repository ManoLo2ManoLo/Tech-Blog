const router = require('express').Router();
const { User, Post, Comment } = require('../../Models')
const withAuth = require('../../utils/auth');

module.exports = router;