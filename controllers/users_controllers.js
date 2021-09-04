const User=require('../models/users');

module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:"user's profile",
        str:"User's Profile is being displayed"
    });
}
// render the sign in page
module.exports.signUp=function(req,res){
    return res.render('users_sign_up',{
       title:"Codeial | Sign Up"
    });

}
// render the sign up page
module.exports.signIn=function(req,res){
    return res.render('users_sign_in',{
      title:"Codeial | Sign In"
    });
}
// get the sign up data
module.exports.Create=function(req,res){
    if(req.body.password!=req.body.confirm_password)
    return res.redirect('back');
    console.log(req.body);
    console.log(User);
    User.findOne({email:req.body.email},function(err,user){
            if(err)
            {
            console.log("error in finding the user");
            return;
            }
            if(user==null)
            {
                User.create(req.body,function(err,user){
                    console.log("Inside Create");
                    if(err)
                    {
                        console.log("error in creating a user while signing up");
                        return;
                    }
                    return res.redirect('/users/sign-in');
                });
            }
            else{
                return res.redirect('back');
            }
        });
}
// sign in and create a session for the user
module.exports.createSession=function(req,res){
     return res.redirect('/');
}
// sign out and end the session for the user 
module.exports.endSession=function(req,res)
{
    req.logout();
    return res.redirect('/');
}
