require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const indexRouter = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", indexRouter);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port", server.address().port);
});
