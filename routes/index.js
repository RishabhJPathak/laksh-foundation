const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Laksh Foundation - Home" });
});
router.get("/about", (req, res) => {
  res.render("about", { title: "Laksh Foundation - About", page: "about" });
});
router.get("/events", (req, res) => {
  res.render("events", { title: "Laksh Foundation - Events", page: "events" });
});
router.get("/gallery", (req, res) => {
  res.render("gallery", {
    title: "Laksh Foundation - Gallery",
    page: "gallery",
  });
});
router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Laksh Foundation - Contact",
    page: "contact",
  });
});

module.exports = router;
