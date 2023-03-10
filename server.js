const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.DATABASE_URI.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);
mongoose.set('strictQuery', true);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App listening on port ${port}`));
