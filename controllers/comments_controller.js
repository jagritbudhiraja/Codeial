const Comment=require('../models/comment');
const Post=require('../models/post');
const { post } = require('../routes/comments');


module.exports.create=function(req,res){
       Post.findById(req.body.post,function(err,post){
            if(post)
            {
                Comment.create({
                    content:req.body.content,
                    user:req.user.id,
                    post:req.body.post
                },function(err,comment){
                     if(err)
                     {
                         console.log('error in creating a comment');
                         return;
                     }
                    post.comments.push(comment);
                    post.save();
                    res.redirect('back');
                });
            }
       });
}
module.exports.delete=function(req,res){
    // console.log('Inside delete comment action');
    Post.findById(req.query.pid,function(err,post){
        // console.log(`post-id:${req.query.pid} comment-id:${req.query.cid}`);
        // console.log(`user who wants to delete the comment:${req.user.id} user who made the post:${post.user}`);
        if(post&&(req.user.id==post.user||req.user.id==req.query.cid)){
        Comment.findById(req.query.cid,function(err,comment){
               if(comment){
               post.comments.pull(comment);
               post.save();
               comment.remove();
               res.redirect('back');
               }
               else{
                return res.redirect('back');
               }
        });
    }
    else{
        res.redirect('back');
    }
    });
    // Comment.findById(req.query.cid,function(err,comment){
    //     if(comment.user==req.user.id||req.user.id==){
    //           let postId=comment.post;
    //           comment.remove();
    //           Post.findByIdAndUpdate(postId,{$pull:{comments:req.query.id}},function(err,post){
    //             return res.redirect('back');
    //           });
    //     }
    //     else{
    //         return res.redirect('back');
    //     }
    // });
}


