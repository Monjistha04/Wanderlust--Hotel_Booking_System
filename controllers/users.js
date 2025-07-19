const User = require("../models/user"); 


module.exports.renderSignUpForm = (req,res) =>{
    res.render("users/signup.ejs");
};

module.exports.signUp = async(req,res) =>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username,email,password});
        const registeredUser =await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser,(e) =>{
            if(e){
           return next(e);
        }
        req.flash("success","Welcome to Wanderlust!");
        let redirectUrl = res.locals.redirectUrl || "listings";
        res.redirect(redirectUrl);
    });
        
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLogInForm = async(req,res) =>{
    res.render("users/login.ejs");
};

module.exports.loginUsers = async(req,res) =>{
        req.flash("success","Welcome back to Wanderlust! You logged in successfully.");
        res.redirect(req.session.redirectUrl);
};

module.exports.logout = (req,res)=>{
    req.logout((e) =>{
        if(e){
           return next(e);
        }
        req.flash("success"," You are logged out.");
        res.redirect("/listings");
    });
};

