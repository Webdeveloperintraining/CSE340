// Needed Resources 
const express = require("express")
const router = new express.Router() 
const regValidate = require('../utilities/account-validation')
const accountController = require("../controllers/accountController")
const utilities = require("../utilities/");

// Route to build account
router.get("/login", utilities.handleErrors(accountController.buildLogin));
router.get("/registration", utilities.handleErrors(accountController.buildRegister));

router.post('/register',
regValidate.registationRules(),
regValidate.checkRegData,
utilities.handleErrors(accountController.registerAccount))

// Process the login attempt
/*router.post(
    "/login",
    (req, res) => {
      res.status(200).send('login process')
    }
  )*/

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

module.exports = router;