# Email Setup - Quick Reference

## ✅ What's Already Done

1. **Contact Form Updated** - `src/components/sections/Contact.tsx`
   - Form fields: name, email, subject, message
   - Sends POST request to `/api/send-email`
   - Has loading state and toast notifications

2. **Serverless Function Created** - `api/send-email.ts`
   - Vercel Node.js runtime configured
   - Uses Nodemailer + Gmail SMTP
   - Validates required fields
   - Sends formatted HTML emails
   - Includes error handling

3. **Nodemailer Installed**
   - `npm install nodemailer @types/nodemailer` ✅ Complete

4. **Configuration Files Ready**
   - `.env.local.example` created as template
   - `VERCEL_NODEMAILER_SETUP.md` documentation complete

---

## 🔄 What You Need to Do (3 Steps)

### STEP 1: Generate Gmail App Password
1. Go to https://myaccount.google.com
2. Click "Security" (left sidebar)
3. Enable "2-Step Verification" (if needed)
4. Find "App Passwords"
5. Select "Mail" and your device
6. Google generates 16-character password
7. **Copy it** (example: `abcd efgh ijkl mnop`)

### STEP 2: Create .env.local (Local Testing)
Create file: `.env.local` in project root
```
GMAIL_EMAIL=ravishankarmitit@gmail.com
GMAIL_APP_PASSWORD=your_16_char_password_here
```
Remove spaces from the App Password!

### STEP 3: Deploy to Vercel
1. Push code to GitHub
2. Go to https://vercel.com/dashboard
3. Select your project → Settings → Environment Variables
4. Add:
   - `GMAIL_EMAIL` = `ravishankarmitit@gmail.com`
   - `GMAIL_APP_PASSWORD` = `your_16_char_password` (no spaces)
5. Deploy!

---

## 🧪 Testing Locally

After creating `.env.local`:
```bash
npm run dev
```
1. Open http://localhost:5173
2. Scroll to Contact section
3. Fill form with test data
4. Click "Send Message"
5. Check email: ravishankarmitit@gmail.com

---

## 📧 Form Details

**Form Fields:**
- Name (required)
- Email (required, validates format)
- Subject (required)
- Message (required)

**Email Sent To:** ravishankarmitit@gmail.com
**Reply To:** Visitor's email (so you can reply directly)
**Subject Line:** Portfolio Contact: {visitor's subject}

---

## 🔐 Security

- Credentials in `.env.local` (local only, git-ignored)
- Credentials in Vercel env vars (encrypted, hidden)
- App Password limited to Gmail only
- No secrets in source code

---

## ⚠️ Important

- **Remove spaces from App Password** when entering it
- **Must enable 2FA** on Gmail first
- Nodemailer is already installed ✅
- Contact form is ready to use ✅
- Serverless function is ready ✅

---

**Status:** Ready for local testing! Just provide the Gmail App Password.
