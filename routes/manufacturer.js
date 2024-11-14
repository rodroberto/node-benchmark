const express = require("express");
const router = express.Router();
const manufacturerController = require("../controllers/manufacturerController");

router.get("/", manufacturerController.getManufacturers)
router.post("/create", manufacturerController.createManufacturer)
router.post("/update", manufacturerController.updateManufacturer)
router.post("/delete", manufacturerController.deleteManufacturer)

module.exports = router;