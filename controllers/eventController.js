const Event = require("../models/eventModel");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getAll = catchAsync(async (req, res, next) => {
    const allEvents = await Event.find();

    res.status(200).json({
        status: "success",
        data: { allEvents },
    });
});
