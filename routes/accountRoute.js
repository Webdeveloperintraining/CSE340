// Needed Resources 
const express = require("express")
const router = new express.Router() 
const regValidate = require('../utilities/account-validation')
const accountController = require("../controllers/accountController")
const utilities = require("../utilities/");
const { check } = require("express-validator");

// Route to build account
router.get("/login", utilities.handleErrors(accountController.buildLogin));
router.get("/registration", utilities.handleErrors(accountController.buildRegister));

router.post('/register',
regValidate.registationRules(),
regValidate.checkRegData,
utilities.handleErrors(accountController.registerAccount))

router.post('/login',
regValidate.loginRules(),
regValidate.checkLogData,
utilities.handleErrors(accountController.accountLogin))

router.get('/', utilities.checkLogin, utilities.handleErrors(accountController.buildLoginManagement))

// Update Account Settings
router.get("/update/:account_id", utilities.checkLogin, utilities.handleErrors(accountController.editAccountData));

router.post("/update-info", 
utilities.checkLogin, 
regValidate.updateAccountRules(),
regValidate.checkUpdateAccountData,
utilities.handleErrors(accountController.updateAccountData));

// Change Password
router.post("/update-password",
regValidate.updatePasswordRules(),
regValidate.checkPasswordUpdate,
utilities.checkLogin,
utilities.handleErrors(accountController.updateAccountPassword))


/* Update Account Type /Delete Accounts Routes */
router.get("/account-management/:account_id", utilities.checkLogin, utilities.accountTypeCheck, utilities.handleErrors(accountController.getAccountsJSON))

router.get("/account-management", utilities.checkLogin, utilities.handleErrors(accountController.buildAccountManagement))


module.exports = router;