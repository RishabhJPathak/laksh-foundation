const nodemailer = require("nodemailer");

const transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

// Test configuration
// const transporter = nodemailer.createTransport({
//   host: 'localhost',
//   port: 1025,
//   auth: {
//       user: 'project.2',
//       pass: 'secret.2'
//   }
// });

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

exports.transporter = transporter;
