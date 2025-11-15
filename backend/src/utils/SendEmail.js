const {transporter} = require('../service/nodemailer')

const sendEmail = async (code, email) => {
    try {
      const info = await transporter.sendMail({
        from: 'vea5a.pranam05@gmail.com', // sender address
        to: `${email}`, // list of receivers
        subject: "Your Verification Code", // Subject line
        text: `Hello,

    Your verification code is: ${code}

    Enter this code in the app to complete your email verification.  
    For security reasons, this code will expire shortly.

    If you did not request this, please ignore the message.

    Thank you.`, // plain text body
      });
      console.log(info)
    } catch (err) {
      console.error("Error while sending mail", err);
    }
  };

const SendEditCode = async (code, email) => {
    try {
      const info = await transporter.sendMail({
        from: 'vea5a.pranam05@gmail.com', // sender address
        to: `${email}`, // list of receivers
        subject: "Your Verification Code", // Subject line
        text: `Hello,

    Your verification code is: ${code}

    Enter this code in the app to complete your email verification.  
    For security reasons, this code will expire shortly.

    If you did not request this, please ignore the message.

    Thank you.`, // plain text body
      });
      console.log(info)
    } catch (err) {
      console.error("Error while sending mail", err);
    }
  };

  module.exports = {sendEmail, SendEditCode}