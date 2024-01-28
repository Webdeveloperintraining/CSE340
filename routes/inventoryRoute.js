// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/");

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

router.get("/detail/:inv_id",utilities.handleErrors(invController.buildByDetails));

router.get("detail",utilities.handleErrors(invController.buildByDetails));

module.exports = router;