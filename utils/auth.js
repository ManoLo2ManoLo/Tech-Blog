const { Post } = require('../Models')

const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

const withNoAuth = (req, res, next) => {
    if (req.session.user_id) {
        res.redirect('/')
    } else {
        next();
    }
}

const postAuth = (req, res, next) => {
    req.url = req.url.replace('/dashboard/', '');
    
    Post.findOne({
        where: {
            id: req.url
        }
    }).then((dbUserData) => {
        if (!dbUserData) {
            res.redirect('/dashboard');
            next();
        }

        if (dbUserData._previousDataValues.user_id != req.session.user_id) {
            res.redirect('/dashboard');
        } else {
            next();
        }
    });
}
  
module.exports = { withAuth, withNoAuth, postAuth };
  