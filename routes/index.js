const express = require("express");
const router = express.Router();

const mailController = require("../controllers/mailController");

router.get("/", (req, res) => {
  res.json({ msg: "LakshFoundation API Home" });
});

router.post("/send", mailController.send);

module.exports = router;
