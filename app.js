const express = require("express");
const userRouter = require("./routes/userRoutes");
const eventRouter = require("./routes/eventRoutes");
const eventTeamRouter = require("./routes/eventTeamRoutes");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/dashboard/users", userRouter);
app.use("/api/dashboard/events", eventRouter);
app.use("/api/dashboard/eventTeams", eventTeamRouter);
app.use(express.static(path.join(__dirname, "client/dist")));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.use("*", (req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: "route not defined",
    });
});
module.exports = app;
