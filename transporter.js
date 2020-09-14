const nodemailer = require("nodemailer");
require('dotenv').config()



const transport = nodemailer.createTransport({
  host: process.env.HOST_NAME,
  port: process.env.MAIL_PORT,
  secure: true, 
  auth: {
    user: process.env.AUTH_U,
    pass: process.env.AUTH_P
  }
})

module.exports = transport;