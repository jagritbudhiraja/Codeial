const { localsName } = require('ejs');
const Post=require('../models/post');
const { post } = require('../routes');

module.exports.home=function(req,res){
    //(populate means to bring the whole user object not just the id)
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        if(err)
        {
            console.log('Error in fetching posts');
            return;
        }
       
       return res.render('home',{
           title:"Home",
           posts:posts
       });
    });
}
//module.exports.actionName=function(req,res){}