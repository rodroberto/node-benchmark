const express = require("express");
const router = express.Router();
const benchmarkController = require("../controllers/benchmarkController");

router.get("/", benchmarkController.getBenchmarks)
router.post("/create", benchmarkController.createBenchmark)
router.post("/update", benchmarkController.updateBenchmark)
router.post("/delete", benchmarkController.deleteBenchmark)

module.exports = router;