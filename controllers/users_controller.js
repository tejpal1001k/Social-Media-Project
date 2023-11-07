module.exports.profile = function(req,res){
    return res.render('profile', {
        title:"Profile",
        name:"Dhruva",
        email: "lalala@gmail.com"
    });

}
//render the signup page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title : "Codial | Sign Up"
    });
}
// resnder the signin page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "Codial | Sign In"
    });
}