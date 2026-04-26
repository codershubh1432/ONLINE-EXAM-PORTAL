const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "your_app_password",
  },
});

const sendMail = async (email, score) => {
  await transporter.sendMail({
    from: "yourgmail@gmail.com",
    to: email,
    subject: "Exam Result",
    text: `Your score is ${score}`,
  });
};

module.exports = sendMail;