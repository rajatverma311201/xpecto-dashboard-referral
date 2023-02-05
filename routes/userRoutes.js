const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers);
router.route("/referral").get(userController.getAllReferral);

module.exports = router;
