# Vercel Serverless Email Setup with Nodemailer

## Complete Step-by-Step Guide

### STEP 1: Gather Required Information from Gmail

You need to create an **App Password** for Gmail:

1. Go to https://myaccount.google.com
2. Click "Security" in left sidebar
3. Enable "2-Step Verification" (if not already enabled)
4. After enabling 2FA, go back to Security
5. Find "App Passwords" (appears only after 2FA is enabled)
6. Select "Mail" and "Windows Computer" (or your device)
7. Google will generate a 16-character app password
8. **Copy this password** - you'll need it in Step 3

**Information to collect:**
- Gmail address: `ravishankarmitit@gmail.com`
- App Password: `____ ____ ____ ____` (16 characters, spaces removed)

---

### STEP 2: Install Nodemailer Dependency

Run this command in your project:
```bash
npm install nodemailer
# or
bun add nodemailer
```

Also install types for TypeScript:
```bash
npm install --save-dev @types/nodemailer
```

---

### STEP 3: Create Vercel Environment Variables

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add these environment variables:

| Variable Name | Value |
|---|---|
| `GMAIL_EMAIL` | `ravishankarmitit@gmail.com` |
| `GMAIL_APP_PASSWORD` | `your_16_char_app_password` (spaces removed) |

Example:
- GMAIL_EMAIL: `ravishankarmitit@gmail.com`
- GMAIL_APP_PASSWORD: `abcdefghijklmnop`

---

### STEP 4: Create Serverless Function

Create this file: `api/send-email.ts`

```typescript
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
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

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

---

### STEP 5: Update Contact Form Component

Update `src/components/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData(e.currentTarget);
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      (e.target as HTMLFormElement).reset();
    } else {
      throw new Error(data.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email error:', error);
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

### STEP 6: Create .env.local (for local testing)

Create `.env.local` in project root:
```
GMAIL_EMAIL=ravishankarmitit@gmail.com
GMAIL_APP_PASSWORD=your_16_char_app_password
```

---

## Information Checklist

Before proceeding, collect and provide these details:

- [ ] Gmail address: `_________________`
- [ ] Gmail App Password (16 chars): `_________________`
- [ ] Recipient email (where emails go): `ravishankarmitit@gmail.com`
- [ ] SMTP Service: Gmail
- [ ] Deployment platform: Vercel

---

## Testing Locally

1. Create `.env.local` with your credentials
2. Run: `npm run dev` or `bun dev`
3. Fill out the contact form
4. Submit and check email

---

## Deploying to Vercel

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard (Step 3)
4. Deploy!

---

## Security Notes

✅ Credentials stored in Vercel environment (hidden from code)
✅ App Password is read-only and limited to Gmail
✅ No credentials in version control
✅ Serverless function runs securely on Vercel

---

## Troubleshooting

**"Less secure app access" error:**
- Use App Password (not regular Gmail password)
- Must have 2FA enabled

**Email not sending:**
- Check environment variables are set in Vercel
- Check spam folder
- Verify credentials in .env.local locally

**Connection timeout:**
- Vercel might need a few seconds to warm up
- First email might take 3-5 seconds
