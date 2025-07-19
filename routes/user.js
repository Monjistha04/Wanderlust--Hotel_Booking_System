const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js"); 
const userController = require("../controllers/users.js");
const user = require("../models/user.js");

//sign up
router.route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUp));

//login
router.route("/login")
    .get(userController.renderLogInForm)
    //passport.authenticate() is a middleware function that checks if the user is already registered or not
    .post(saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), 
    userController.loginUsers);

//log out
router.get("/logout", userController.logout);

module.exports = router;
