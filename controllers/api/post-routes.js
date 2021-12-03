const router = require('express').Router();
const { User, Post, Comment } = require('../../Models')
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll()
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


module.exports = router;