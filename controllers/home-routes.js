const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../Models')
const { withAuth, withNoAuth } = require('../utils/auth.js');

router.get('/', (req, res) => {
    Post.findAll({
        order: [['createdAt', 'DESC']],
        attributes: [
            'id',
            'user_id',
            'title',
            'body',
            'user_id',
            [sequelize.literal('(SELECT username FROM user WHERE user.id = post.user_id)'), 'username'],
            [sequelize.literal('(SELECT first_name FROM user WHERE user.id = post.user_id)'), 'first_name'],
            [sequelize.literal('(SELECT last_name FROM user WHERE user.id = post.user_id)'), 'last_name'],
            'createdAt'
          ],
          include: [
            {
              model: Comment,
              attributes: [
                'id', 
                'comment_text', 
                'user_id',
                [sequelize.literal('(SELECT username FROM user WHERE user.id = comments.user_id)'), 'username'],
                [sequelize.literal('(SELECT first_name FROM user WHERE user.id = comments.user_id)'), 'first_name'],
                [sequelize.literal('(SELECT last_name FROM user WHERE user.id = comments.user_id)'), 'last_name'],
                'createdAt'
              ]
            }
          ]
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
            order: [['createdAt', 'DESC']],
            attributes: ['id', 'title', 'body', 'createdAt'],
            include: {
                model: Comment
            }
        },
        where: {
            id: req.session.user_id
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

router.get('/dashboard/:id',withAuth, (req, res) => {
    Post.findOne({
        order: [['createdAt', 'DESC']],
        attributes: [
            'id',
            'user_id',
            'title',
            'body',
            'user_id',
            [sequelize.literal('(SELECT username FROM user WHERE user.id = post.user_id)'), 'username'],
            [sequelize.literal('(SELECT first_name FROM user WHERE user.id = post.user_id)'), 'first_name'],
            [sequelize.literal('(SELECT last_name FROM user WHERE user.id = post.user_id)'), 'last_name'],
            'createdAt'
          ],
          include: [
            {
              model: Comment,
              attributes: [
                'id', 
                'comment_text', 
                'user_id',
                [sequelize.literal('(SELECT username FROM user WHERE user.id = comments.user_id)'), 'username'],
                [sequelize.literal('(SELECT first_name FROM user WHERE user.id = comments.user_id)'), 'first_name'],
                [sequelize.literal('(SELECT last_name FROM user WHERE user.id = comments.user_id)'), 'last_name'],
                'createdAt'
              ]
            }
          ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
  
        const post = dbPostData.get({ plain : true });

        res.render('edit-post', { post })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/profile/:id',withAuth, (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        include: {
            model: Post,
            attributes: ['id', 'title', 'body', 'createdAt']
        },
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
        }

        const user = dbUserData.get({ plain: true });

        res.render('profilePage', {user});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/post/:id', withAuth, (req, res) => {
    Post.findOne({
        attributes: [
            'id',
            'user_id',
            'title',
            'body',
            'user_id',
            [sequelize.literal('(SELECT username FROM user WHERE user.id = post.user_id)'), 'username'],
            [sequelize.literal('(SELECT first_name FROM user WHERE user.id = post.user_id)'), 'first_name'],
            [sequelize.literal('(SELECT last_name FROM user WHERE user.id = post.user_id)'), 'last_name'],
            'createdAt'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id', 
                    'comment_text', 
                    'user_id',
                    [sequelize.literal('(SELECT username FROM user WHERE user.id = comments.user_id)'), 'username'],
                    [sequelize.literal('(SELECT first_name FROM user WHERE user.id = comments.user_id)'), 'first_name'],
                    [sequelize.literal('(SELECT last_name FROM user WHERE user.id = comments.user_id)'), 'last_name'],
                    'createdAt'
                ]
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
  
        const post = dbPostData.get({ plain : true });

        res.render('post-view', { post })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;