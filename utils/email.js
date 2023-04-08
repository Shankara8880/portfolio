const nodemailer = require("nodemailer")
exports.sendEmail = ({ sub, msg }) => {
    const transporter = nodemailer.createTransport({
        service: "gamil",
        host: 'smtp.gmail.com',
        // port: 465,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASS
        }
    })
    transporter.sendMail({
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_ID,
        subject: `PortFolio ${sub}`,
        // text: msg,
        html: msg
    }, (err) => {
        if (err) {
            console.log("E-mail err ", err);
        } else {
            console.log("Email sent Successfully");
        }
    })
}