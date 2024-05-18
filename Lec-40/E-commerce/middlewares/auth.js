
module.exports.isLoggedIn = (req, res, next) => {

    if(req.xhr && !req.isAuthenticated()){
        return res.status(401).json({
            msg: 'Unauthorized'
        })
    }

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
