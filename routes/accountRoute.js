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

module.exports = router;