const express = require("express");
const router = express.Router();

const PrintController = require("../controllers/PrintController");

router.get("/open-cash-drawer", PrintController.openCashDrawer);

module.exports = router;
