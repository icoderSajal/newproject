const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./src/db/index");

dotenv.config();
connectDB();

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
// routes

// user Routes for
app.use("/api/v1/admin", require("./src/routes/adminRoutes"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// var colors = require("colors/safe");

// console.log(colors.green("hello")); // outputs green text
// console.log(colors.red.underline("i like cake and pies")); // outputs red underlined text
// console.log(colors.inverse("inverse the color")); // inverses the color
// console.log(colors.rainbow("OMG Rainbows!")); // rainbow
// console.log(colors.trap("Run the trap")); // Drops the bass
Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Example app listening  port ${Port}`.bgRed);
});
