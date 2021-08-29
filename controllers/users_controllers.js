module.exports.profile=function(req,res){
    return res.render('users',{
        title:"user's profile",
        str:"User's Profile is being displayed"
    });
}

module.exports.create=function(req,res){
    return res.end('<h1>This is the create section</h1>');
}
