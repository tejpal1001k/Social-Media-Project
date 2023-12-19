const User = require('../models/user');

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

//getting signup data
// module.exports.create = function(req, res){
//     if(req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     }

//     User.findOne({email: req.body.email}, function(req, res){
//         if(err){
//             console.log("error in finding user sigining up");
//             return;
//         }
//         if(!user){
//             user.create(req.body, function(err,user){
//                 if(err){console.log("error in creating the user while sign up"); return;}
//                 return res.redirect('/users/sign-in');

//             });
//         }else{
//             return res.redirect('back');
//         }
//     })
// }


module.exports.create = async function (req, res) {
    try {
        // console.log("Request Body:", req.body);
        

        if (req.body.password !== req.body.confirm_password) {
            console.log("Password and Confirm Password do not match");
            return res.redirect('back');
        }

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            const newUser = await User.create(req.body);
            console.log(newUser);
            return res.redirect('/users/sign-in');
        } else {
            console.log("User already exists");
            return res.redirect('back');
        }
    } catch (err) {
        console.log("Error in finding or creating a user during sign-up:", err);
        // Handle the error appropriately (e.g., sending an error response)
    }
}



 
//sign and create session
module.exports.createSession = function(req, res){

}