// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invValidate = require('../utilities/inventory-validation')
const invController = require("../controllers/invController")
const utilities = require("../utilities/");

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

router.get("/detail/:inv_id",utilities.handleErrors(invController.buildByDetails));

/* Management Area */
router.get("/inv",utilities.handleErrors(invController.buildManagement));

router.get("/add-inventory",utilities.handleErrors(invController.buildInventory));
router.post('/add-inventory',
invValidate.vehicleRules(),
invValidate.checkVehicleData,
utilities.handleErrors(invController.addNewVehicle))

router.get("/add-classification",utilities.handleErrors(invController.buildClassification));
router.post('/add-classification',
invValidate.classificationRules(),
invValidate.checkClassificationData,
utilities.handleErrors(invController.addNewClassification))

//router.get("/detail",utilities.handleErrors(invController.buildByDetails));
module.exports = router;