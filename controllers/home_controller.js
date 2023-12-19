module.exports.home = function(req,res){
    // return res.end('<h1> Hello mitron kaise ho </h1>');
    console.log(req.cookies);
    res.cookie('user_id', 10);
    return res.render('home', {
        title:"Home"
    });
}