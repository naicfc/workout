const express = require("express");

const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all wokouts" });
});

//get a single route
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//post a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout " });
});

//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new workout " });
});

//update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new workout " });
});
module.exports = router;
