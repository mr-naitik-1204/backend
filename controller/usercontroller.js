const userModel = require('../model/usermodel')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//         user: "naitikkherala47@gmail.com",
//         pass: "kdmlvyiwgmhuhcdd",
//     },
// });
// async function main(email) {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//         from: 'naitikkherala47@gmail.com',  // sender address
//         to: email, // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

exports.contect = async (req, res) => {
    try {
        const procduct = await userModel.create(req.body)
        res.status(200).json({
            status: 'Success',
            Message: 'Data created success',
            Data: procduct
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}

