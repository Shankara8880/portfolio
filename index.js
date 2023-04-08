const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
require("dotenv").config({ path: "./.env" })
const app = express()
connectDB()

app.use(express.json())
app.use(cors())

//routes contact
app.use("/contact", require("./routes/contactRoutes"))
// app.use("/user", require("./routes/userRouters"))
app.use("*", (req, res) => {
    res.status(404).json({
        message: " 404 : Resource You Are Looking For Is Not Awailable"
    })
})
const PORT = process.env.PORT || 5000

mongoose.connection.once("open", () => {
    app.listen(PORT, console.log(`SERVER RUNNING ON http://localhost:${PORT}`))
    console.log('MONGO CONNECTED');
})