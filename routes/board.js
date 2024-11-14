const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

router.get("/", boardController.getBoards)
router.post("/create", boardController.createBoard)
router.post("/update", boardController.updateBoard)
router.post("/delete", boardController.deleteBoard)

module.exports = router;