const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/');
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
  
module.exports = { withAuth, withNoAuth};
  