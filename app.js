require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const indexRouter = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./init/nodemailer");

app.use("/", indexRouter);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port", server.address().port);
});
