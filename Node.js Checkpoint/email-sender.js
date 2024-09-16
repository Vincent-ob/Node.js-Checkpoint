const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        return console.log(err);
    }
    console.log('Email sent: ' + info.response);
});