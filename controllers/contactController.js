const Contact = require("../models/Contact")
const { sendEmail } = require("../utils/email")

exports.addContactUser = async (req, res) => {
    try {
        const { name, email, message, subject } = req.body
        console.log(req.body);
        if (!name || !email || !message || !subject) {
            throw new Error("ALL Fields  required")
        }
        const result = await Contact.create({
            name,
            email,
            message,
            subject
        })
        sendEmail({
            msg: `<h1>Name : ${name}</h1> 
            <p>email : ${email}</p>
            <p>Message : ${message}</p>
            `,
            sub: subject
        })
        res.status(200).json({
            status:200, 
            message: "Send Email SuccessFully ✅, Thank You For your interest 🙏",
        })
    } catch (error) {
        res.status(400).json({
            message: "Error " + error
        })
    }
}