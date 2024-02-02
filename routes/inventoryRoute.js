// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/");

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

router.get("/detail/:inv_id",utilities.handleErrors(invController.buildByDetails));

/* Management Area */
router.get("/inv",utilities.handleErrors(invController.buildManagement));

router.get("/add-inventory",utilities.handleErrors(invController.newInventory));
//router.post("/inv/add-inventory",utilities.handleErrors(invController.newInventory));

router.get("/add-classification",utilities.handleErrors(invController.newClassification));
//router.post("/inv/add-classification",utilities.handleErrors(invController.newClassification));


//router.get("/detail",utilities.handleErrors(invController.buildByDetails));
module.exports = router;