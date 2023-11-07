module.exports.profile = function(req,res){
    return res.render('profile', {
        title:"Profile",
        name:"Dhruva",
        email: "lalala@gmail.com"
    });

}