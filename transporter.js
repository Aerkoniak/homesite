const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.HOST_NAME,
  port: process.env.PORT,
  secure: true, 
  auth: {
    user: process.env.AUTH_U,
    pass: process.env.AUTH_P
  }
})

module.exports = transport;