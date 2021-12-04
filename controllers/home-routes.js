const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../Models')
const { withAuth, withNoAuth } = require('../utils/auth.js');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: {
            exclude: ['updatedAt']
        },
        include: {
            model: User,
            attributes: ['first_name', 'last_name', 'username']
        }
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}));

        res.render('homePage', {posts})
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', withNoAuth, (req, res) => {
    res.render('login');
});

router.get('/signup', withNoAuth, (req, res) => {
    res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        include: {
            model: Post,
            attributes: ['id', 'title', 'body', 'createdAt']
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
        }

        const user = dbUserData.get({ plain: true });

        res.render('dashboard', {user});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;