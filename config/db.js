const mongoose = require("mongoose")

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log('MONGO ERROR ' + error);
    }
}

module.exports = connectDB