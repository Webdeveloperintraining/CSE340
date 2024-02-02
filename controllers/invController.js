const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
    errors: null,
  })
}

invCont.buildByDetails= async function (req, res, next) {
  const inv_id = req.params.inv_id
  const data = await invModel.getCarDetails(inv_id)
  const grid = await utilities.buildCarDetails(data)
  let nav = await utilities.getNav()
  const vehicleName = data[0].inv_year +' '+ data[0].inv_model +' ' + data[0].inv_make
  res.render("./inventory/carDetails", {
    title: vehicleName + " vehicle",
    nav,
    grid,
    errors: null,
  })
}

invCont.buildManagement = async function(req, res){
  let nav = await utilities.getNav()
  res.render("./inventory/management", {
    title: "Management",
    nav,
    errors: null,
  })
  //req.flash("notice",`Congratulations, you\'re registered`);
}

invCont.newClassification = async function(req, res){
  let nav = await utilities.getNav()
  res.render("./inventory/add-classification", {
    title: "Add New Classification",
    nav,
    errors: null,
  })
}

invCont.newInventory = async function(req, res){
  let nav = await utilities.getNav()
  res.render("./inventory/add-inventory", {
    title: "Add Vehicle",
    nav,
    errors: null,
  })
}

module.exports = invCont