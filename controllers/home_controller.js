module.exports.home = function(req,res){
    // return res.end('<h1> Hello mitron kaise ho </h1>');

    return res.render('home', {
        title:"Home"
    });
}