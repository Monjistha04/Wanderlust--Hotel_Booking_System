const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//post review 
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

module.exports = router;