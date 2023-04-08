const { addContactUser } = require("../controllers/contactController")
const router = require("express").Router()

router.post("/contact/add-contact", addContactUser)

module.exports = router