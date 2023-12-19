const User = require("../models/user");

module.exports.profile = function (req, res) {

    if (req.cookies.user_id) {
        User.findById(req.cookies.user_id)
            .then(user => {
                if (user) {
                    return res.render('profile', {
                        title: "Profile",
                        user: user
                    });
                }
            })
            .catch(err => {
                console.error("Error finding user:", err);
                // Handle the error as needed, e.g., redirect to an error page
                return res.status(500).send("Internal Server Error");
            });
    } else {
        // console.log("hello");
        return res.redirect('sign-in');
    }
    
    
//   return res.render("profile", {
//     title: "Profile",
//     name: "Dhruva",
//     email: "lalala@gmail.com",
//   });
};
//render the signup page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codial | Sign Up",
  });
};
// resnder the signin page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Codial | Sign In",
  });
};

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
    if (req.body.password !== req.body.confirm_password) {
      return res.redirect("back");
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      // const newUser = await User.create(req.body);
      return res.redirect("/users/sign-in");
    } else {
      console.log("I am in here");
      return res.redirect("back");
    }
  } catch (err) {
    console.log("Error in finding or creating a user during sign-up:", err);
    // Handle the error appropriately (e.g., sending an error response)
  }
};

//sign and create session
module.exports.createSession = async function (req, res) {
  // steps to authenticate
  try {
    //find the user
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      console.log("error in finding user in signing in");
      return;
    }

    //handle user found
    if (user) {
      //handle password which doesn't match
      if (user.password != req.body.password) {
        return res.redirect("back");
      }
      //handle session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else { 
      // handle user not found
      return res.redirect("back");
    }
  } catch (err) {
    console.log("Error in finding or login a user during sign-in:", err);
  }
};
