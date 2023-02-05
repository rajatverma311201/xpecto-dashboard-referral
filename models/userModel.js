const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: 0,
    },
    phoneNumber: {
        type: Number,
    },
    fullName: {
        type: String,
    },
    collegeName: {
        type: String,
    },
    degree: {
        type: String,
    },
    branch: {
        type: String,
    },
    referralCode: {
        default:"",
        type: String,
    },

    headOfTeams: [{ type: mongoose.Schema.ObjectId, ref: "Team" }],
    registeredTeams: [{ type: mongoose.Schema.ObjectId, ref: "Team" }],
});

// UserSchema.pre(/^find/, function (next) {
//     // this points to the current query
//     this.populate("headOfTeams").populate("registeredTeams");
//     next();
// });

const User = mongoose.model("UserDetails", UserSchema);

module.exports = User;
