const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configure your email credentials here
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOUR_GMAIL@gmail.com', // Replace with your Gmail
        pass: 'YOUR_APP_PASSWORD'      // Replace with your Gmail App Password
    }
});

app.post('/send', (req, res) => {
    const { name, phone, email } = req.body;
    const mailOptions = {
        from: 'mrkalki182@gmail.com',
        to: 'mrkalki182@gmail.com', // Where you want to receive the form data
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nGmail: ${email}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
        res.json({ success: true, message: 'Email sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
