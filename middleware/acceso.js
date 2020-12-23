function estoyLogin(req,res,next){
    //console.log("user",req.user);
    //console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        res.locals.user=req.user;
        return next();
    }
    else
        return res.redirect('/login');
}

module.exports=estoyLogin;