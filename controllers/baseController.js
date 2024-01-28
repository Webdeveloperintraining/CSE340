const utilities = require("../utilities")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

baseController.buildHome2 = async function(req, res){
  //const nav = await utilities.getNav()
  res.render("index", {title: "Home", nv})
}

module.exports = baseController