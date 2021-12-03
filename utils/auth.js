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
  
module.exports = { withAuth, withNoAuth};
  