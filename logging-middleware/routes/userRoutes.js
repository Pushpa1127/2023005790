const express = require("express");
const router = express.Router();
const Log = require("../middleware/logger");

router.get("/", async (req, res) => {

  await Log(
    "backend",
    "info",
    "route",
    "User route accessed"
  );

  res.json({
    message: "Users fetched"
  });
});

router.get("/error", async (req, res) => {

  await Log(
    "backend",
    "error",
    "handler",
    "Invalid request received"
  );

  res.status(400).json({
    message: "Error occurred"
  });
});

module.exports = router;