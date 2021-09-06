const Post=require('../models/post');
const Comment=require('../models/comment');



module.exports.createpost=function(req,res)
{
   Post.create({
       content:req.body.content,
       user:req.user.id
   },function(err,post){
        if(err) {
        console.log('Error in creating a post');
        return;
        }
        return res.redirect('back');
   });

}
module.exports.deletepost=function(req,res){
    console.log(req.query);
    Post.findById(req.query.id,function(err,post){
        // .id means converting the object id into string
             if(post.user==req.user.id)
             {
                 console.log(req.query.id);
                 post.remove();
                 Comment.deleteMany({post:req.query.id},function(err){
                     if(err)
                     {
                         console.log('error in deleting comments');
                         return;
                     }
                     return res.redirect('back');
                 });

             }else{
                console.log('Nahi mila bhai');
                return res.redirect('back');
             }
    });
}