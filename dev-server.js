// dev-server.js - Local development server for API routes
// Run this with: node dev-server.js
// It will start on port 3001 and proxy /api routes from Vite on port 8080

import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { getViews } from './api/get-views.ts';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Check environment variables
if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
  console.error('❌ ERROR: Missing GMAIL_EMAIL or GMAIL_APP_PASSWORD in .env.local');
  console.error('Please create .env.local with:');
  console.error('  GMAIL_EMAIL=your-email@gmail.com');
  console.error('  GMAIL_APP_PASSWORD=your_16_char_app_password');
  process.exit(1);
}

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Dev API server is running' });
});

// View counter endpoint
app.get('/api/get-views', getViews);

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
      });
    }

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: 'ravishankarmitit@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent from ${email}: "${subject}"`);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('❌ Email error:', error.message);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Dev API server running on http://localhost:${PORT}`);
  console.log(`📧 Gmail Email: ${process.env.GMAIL_EMAIL}`);
  console.log('✅ Ready to receive contact form submissions\n');
});
