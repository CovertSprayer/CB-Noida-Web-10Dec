
module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

module.exports.isSeller = (req, res, next) => {
    if(req?.user?.role !== 'seller'){
        res.redirect('back');
    }
    next();
}
