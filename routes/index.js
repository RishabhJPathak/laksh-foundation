const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Laksh Foundation - Home" });
});

module.exports = router;
