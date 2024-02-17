const pool = require("../database/")
/* *****************************
*   Register new account
* *************************** */
async function registerAccount(account_firstname, account_lastname, account_email, account_password){
    try {
      const sql = "INSERT INTO account (account_firstname, account_lastname, account_email, account_password, account_type) VALUES ($1, $2, $3, $4, 'Client') RETURNING *"
      return await pool.query(sql, [account_firstname, account_lastname, account_email, account_password])
    } catch (error) {
      return error.message
    }
  }


/* *****************************
* Return account data using email address
* ***************************** */
async function getAccountByEmail (account_email) {
  try {
    const result = await pool.query(
      'SELECT account_id, account_firstname, account_lastname, account_email, account_type, account_password FROM account WHERE account_email = $1',
      [account_email])
    return result.rows[0]
  } catch (error) {
    return new Error("No matching email found")
  }
}


  /* **********************
 *   Check for existing email
 * ********************* */
async function checkExistingEmail(account_email){
  try {
    const sql = "SELECT * FROM account WHERE account_email = $1"
    const email = await pool.query(sql, [account_email])
    return email.rowCount
  } catch (error) {
    return error.message
  }
}

/* *****************************
* Return account data using email address
* ***************************** */
async function getAccountById (account_id) {
  try {
    const result = await pool.query(
      'SELECT account_id, account_firstname, account_lastname, account_email, account_type FROM account WHERE account_id = $1',
      [account_id])
    return result.rows[0]
  } catch (error) {
    return new Error("No matching id found")
  }
}

async function getAccounts() {
  return await pool.query('SELECT account_id, account_firstname, account_lastname, account_email, account_password,account_type FROM account ORDER BY account_firstname');
}

async function getAccountTypes() {
  return await pool.query('SELECT account_type FROM account GROUP BY account_type ORDER BY account_type');
}

/* ***************************
 *  Update Inventory Data
 * ************************** */
async function updateAccount(
  account_firstname,
  account_lastname,
  account_email,
  account_id
) {
  try {
    const sql =
      "UPDATE public.account SET account_firstname = $1, account_lastname = $2, account_email = $3 WHERE account_id = $4 RETURNING *"
    const data = await pool.query(sql, [
      account_firstname,
      account_lastname,
      account_email,
      account_id
    ])
    return data.rows[0]
  } catch (error) {
    console.error("model error: " + error)
  }
}

/* ***************************
 *  Update Account Personal Data
 * ************************** */
async function updatePassword(
  account_password,
  account_id
) {
  try {
    const sql =
      "UPDATE public.account SET account_password = $1 WHERE account_id = $2 RETURNING *"
    const data = await pool.query(sql, [
      account_password,
      account_id
    ])
    return data.rows[0]
  } catch (error) {
    console.error("model error: " + error)
  }
}

/* ***************************
 *  Update Account Type and Delete Accoutns
 * ************************** */
async function updateAccountType (account_type,account_id){
  try {
    const sql =
      "UPDATE public.account SET account_type = $1 WHERE account_id = $2 RETURNING *"
    const data = await pool.query(sql, [
      account_type,
      account_id
    ])
    return data.rows[0]
  } catch (error) {
    console.error("model error: " + error)
  }
}


async function deleteAccount(account_id) {
  try {
    const sql = 'DELETE FROM public.account WHERE account_id = $1'
    const data = await pool.query(sql, [account_id])
  return data
  } catch (error) {
    new Error("Delete Account Error")
  }
}


module.exports = {registerAccount,checkExistingEmail, getAccountByEmail,getAccountById, 
  updateAccountType ,updateAccount,updatePassword,getAccounts,deleteAccount,getAccountTypes};
