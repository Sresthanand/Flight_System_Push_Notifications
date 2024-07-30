const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "tyrell.gaylord@ethereal.email",
    pass: "QePD13gpxGR8bSGmk8",
  },
});

const mailOptions = {
  from: '"Sresth Anand" <raul.gibson@ethereal.email>',
  to: "sresth930@gmail.com",
  subject: "IMPORTANT UPDATE !!",
  text: "Your flight 6E 2341 is on time. Departure gate: A12",
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #4CAF50;">IMPORTANT UPDATE !!</h2>
      <p>Hello Sresth,</p>
      <p>Your flight <strong>6E 2341</strong> is on time. Please proceed to <strong>Departure gate: A12</strong>.</p>
      <p>We wish you a pleasant journey!</p>
    </div>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent:", info.messageId);
  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
});
