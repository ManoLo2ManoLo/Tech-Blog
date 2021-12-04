const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Comment } = require('../../Models')
const withAuth = require('../../utils/auth');

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
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            body: req.body.body
        },
        {
            where: {
                id: req.params.id
            }
        }  
    )
    .then((dbPostData) => {
        if (!dbPostData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData){
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;