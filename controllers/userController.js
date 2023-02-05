const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
exports.getAllReferral = catchAsync(async (req, res, next) => {
    const allUsers = await User.aggregate([
        {
            $group: {
                _id: { $toLower: { $trim: { input: "$referralCode" } } },
                numUsers: { $sum: 1 },
            },
        },
        {
            $sort: {
                numUsers: -1,
            },
        },
    ]);
    res.status(200).json({
        status: "success",
        results: allUsers.length,
        data: { allUsers },
    });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const allUsers = await User.find();

    res.status(200).json({
        status: "success",
        results: allUsers.length,
        data: { allUsers },
    });
});
