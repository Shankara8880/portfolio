const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
require("dotenv").config({ path: "./.env" })
const path = require('path')
const app = express()
connectDB()
app.use(express.static(path.join(__dirname, "dist")))
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: (o, cb) => {
        allowed = [
            "https://shankar-bevale-portfolio.netlify.app"
        ]
        if (allowed.indexOf(o) !== -1 || !o) {
            cb(null, true)
        } else {
            cb("Block by cors")
        }
    }
}))

//routes contact
app.use("/api/contact", require("./routes/contactRoutes"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"))
    // res.status(404).json({
    // message: " 404 : Resource You Are Looking For Is Not Awailable"
    // })
})
const PORT = process.env.PORT || 5000

mongoose.connection.once("open", () => {
    app.listen(PORT, console.log(`SERVER RUNNING ON http://localhost:${PORT}`))
    console.log('MONGO CONNECTED');
})
