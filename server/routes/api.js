const express = require("express");
const router = express.Router();
const logs = require("../data/logs.json");

// Route: GET /api/logs
router.get("/logs", (req, res) => {
  res.json(logs);
});

// Route: GET /api/stats
router.get("/stats", (req, res) => {
  const total = logs.length;
  const success = logs.filter(log => log.status === "success").length;
  const failed = total - success;
  const percentSuccess = ((success / total) * 100).toFixed(2);

  res.json({
    total,
    success,
    failed,
    percentSuccess
  });
});

// Route: GET /api/security-events
router.get("/security-events", (req, res) => {
  const failedLogs = logs.filter(log => log.status === "failed");
  res.json(failedLogs);
});

module.exports = router;
