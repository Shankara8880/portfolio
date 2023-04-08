const { addContactUser } = require("../controllers/contactController")
const router = require("express").Router()

router.post("/add-contact", addContactUser)

module.exports = router