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
            html: `
                <p>Dear Shankar,</p>
                <p>Enquiry from  : ${name}</p>
                <p>message: ${message}</p>
                <p>Best regards,</p>
                <p>Tim Hortons</p>
                <p>${subject}</p>
                `,
            sub: "Interest in Your Portfolio and Potential Collaboration :" + subject
        })
        res.json({
            message: "Send Email SuccessFully ✅, Thank You For your interest 🙏",
        })
    } catch (error) {
        res.status(400).json({
            message: "Error " + error
        })
    }
}