"use strict";

// depedencies
const nodemailer = require('nodemailer')
const fs = require('node:fs')
const dotenv = require('dotenv')

// initializes modules
const readFileSync = fs.readFileSync
dotenv.config()

// saves credentials to variables
const user = process.env.GUSER
const password = process.env.GPASSWORD

async function main(project, destinations) {
    
    // reads contents of the html file and saves it as a string
    const htmlString = readFileSync(`./build/${project}.html`, 'utf-8')

    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: testAccount.user, // generated ethereal user
    //         pass: testAccount.pass  // generated ethereal password
    //     }
    // });

    // create reusable transporter object
    let gmailTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: user,
            pass: password,
        },
    });
  
    // send mail with defined transport object
    let info = await gmailTransporter.sendMail({
        from: '"David Sobral" <davidcsobral@gmail.com>', // sender address
        to: destinations, // list of receivers
        subject: "Nodemailer test ✔", // Subject line
        text: "Isso é apenas um teste.", // plain text body
        html: htmlString // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = main