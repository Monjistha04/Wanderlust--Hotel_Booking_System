const Review = require("../models/review.js");
const Listing = require("../models/listing.js");


module.exports.createReview = async(req,res) =>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","review added !");
    res.redirect(`/listings/${listing._id}`);
};