const express = require("express");

const eventTeamController = require("../controllers/eventTeamController");

const router = express.Router();


router.route("/").get(eventTeamController.getAll);


module.exports = router;
