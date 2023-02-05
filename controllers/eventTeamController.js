const EventTeam = require("../models/eventTeamModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getAll = catchAsync(async (req, res, next) => {
    const allEventTeams = await EventTeam.find();

    res.status(200).json({
        status: "success",
        data: allEventTeams,
    });
});
