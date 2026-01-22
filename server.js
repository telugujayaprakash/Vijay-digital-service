import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    // Validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email to business owner
    const businessEmailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vijaydigitalmarketingservice@gmail.com',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #06b6d4;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from the contact form on your website.
          </p>
        </div>
      `
    };

    // Auto-reply email to user
    const userEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Vijay Digital Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Vijay Digital Services. We have received your message regarding <strong>${service}</strong> and appreciate your interest in our services.</p>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #06b6d4;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <p>Our team will review your inquiry and get back to you within 24 hours. If you have any additional information or questions, please feel free to reply to this email.</p>

          <p>In the meantime, you can:</p>
          <ul>
            <li>Visit our website: <a href="https://www.vijaydigitalservices.com" style="color: #06b6d4;">vijaydigitalservices.com</a></li>
            <li>Call us: +91 9703114043</li>
            <li>WhatsApp: <a href="https://wa.me/919703114043" style="color: #06b6d4;">Chat with us</a></li>
          </ul>

          <p>Best regards,<br>
          <strong>Vijay Digital Services Team</strong><br>
          Hyderabad, Telangana, India<br>
          Email: vijaydigitalmarketingservice@gmail.com<br>
          Phone: +91 9703114043</p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(businessEmailOptions);
    await transporter.sendMail(userEmailOptions);

    res.json({
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
