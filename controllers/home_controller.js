module.exports.home=function(req,res){
    return res.render('home',{
        title:"Home"
    });
}
module.exports.about=function(req,res){
    return res.end('<h1>This is the about page</h1>');
}
//module.exports.actionName=function(req,res){}