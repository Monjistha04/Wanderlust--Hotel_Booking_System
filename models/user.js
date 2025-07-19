const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new Schema({
    //password and username are automatically added by the passport local mongoose
    email:{
        type: String,
        required : true,
    },
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
