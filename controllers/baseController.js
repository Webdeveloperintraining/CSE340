const utilities = require("../utilities")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
  //req.flash("notice", "This is a flash message.")
}

baseController.buildHome2 = async function(req, res){
  //const nav = await utilities.getNav()
  res.render("index", {title: "Home", nv})
}

module.exports = baseController