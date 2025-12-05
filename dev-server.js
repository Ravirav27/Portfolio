// dev-server.js - Local development server for API routes
// Run this with: tsx dev-server.js
// It will start on port 3001 and proxy /api routes from Vite on port 8080

import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

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
app.get('/api/get-views', async (req, res) => {
  try {
    const hitsUrl = 'https://hits.sh/ravishankars.vercel.app.svg?t=' + Date.now();
    
    const proxies = [
      'https://api.allorigins.win/raw?url=' + encodeURIComponent(hitsUrl),
      'https://corsproxy.io/?' + encodeURIComponent(hitsUrl),
    ];

    let svgText = null;
    for (const proxyUrl of proxies) {
      try {
        const response = await fetch(proxyUrl, { 
          cache: 'no-store',
          headers: { 'User-Agent': 'Mozilla/5.0' },
        });
        if (response.ok) {
          svgText = await response.text();
          break;
        }
      } catch (e) {
        continue;
      }
    }

    if (!svgText) throw new Error('All proxies failed');

    let views = null;
    let match = svgText.match(/aria-label="hits:\s*(\d+)"/i);
    if (match) views = parseInt(match[1], 10);
    if (!views) {
      match = svgText.match(/<title>hits:\s*(\d+)<\/title>/i);
      if (match) views = parseInt(match[1], 10);
    }
    if (!views) {
      match = svgText.match(/>\s*(\d+)\s*</);
      if (match) views = parseInt(match[1], 10);
    }

    res.json({ views });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch view count', views: null });
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
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
