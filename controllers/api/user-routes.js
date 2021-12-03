const router = require('express').Router();
const { User, Post, Comment } = require('../../Models')
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      
      res.status(500).json(err);
    });
})

router.post("/", (req, res) => {
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then((dbUserData) => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
  
          res.json(dbUserData);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;