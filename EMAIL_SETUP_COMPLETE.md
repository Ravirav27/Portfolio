# Email Setup - Complete Guide (Updated)

## 🔴 Issue Fixed: 404 Error on /api/send-email

The 404 error occurred because Vite (frontend-only) doesn't handle API routes. 

**Solution:** Use local Express dev server that proxies to Vite.

---

## ⚡ Quick Start (3 Steps)

### Step 1: Create `.env.local`

File: `.env.local` (project root)

```env
GMAIL_EMAIL=ravishankarmitit@gmail.com
GMAIL_APP_PASSWORD=your_16_char_app_password_here
```

**How to get App Password:**
1. Go to https://myaccount.google.com
2. Security → App Passwords (appears after 2FA is enabled)
3. Select "Mail" + "Windows Computer"
4. Copy the 16-char password (remove spaces)

### Step 2: Install All Dependencies

Already done! Verify:
```bash
npm list nodemailer express cors concurrently
```

### Step 3: Run Full Development Setup

```bash
npm run dev:full
```

This starts:
- Vite frontend on http://localhost:8080
- Express API server on http://localhost:3001
- Automatic proxy from 8080 → 3001

---

## 🧪 Test Email Submission

1. Wait for both servers to start (watch for green checkmarks)
2. Open http://localhost:8080
3. Scroll to "Get In Touch"
4. Fill form:
   - Name: `Test User`
   - Email: `test@example.com`
   - Subject: `Hello`
   - Message: `This is a test`
5. Click "Send Message"
6. Success toast appears
7. Check email at ravishankarmitit@gmail.com

---

## 📁 New Files Created

| File | Purpose |
|------|---------|
| `dev-server.js` | Express API server for local development |
| `.env.local.example` | Template for env variables |
| `LOCAL_DEV_EMAIL_SETUP.md` | Detailed local development guide |

## 🔧 Updated Files

| File | Changes |
|------|---------|
| `vite.config.ts` | Added proxy config for `/api/*` → localhost:3001 |
| `package.json` | Added `dev:full` and `dev:server` scripts |
| `src/components/sections/Contact.tsx` | Updated to use `/api/send-email` endpoint |

---

## 📋 Architecture - How It Works Locally

```
┌─────────────────────────────────────────────────────────┐
│ Browser: http://localhost:8080                          │
│ (Your contact form)                                      │
└────────────────┬────────────────────────────────────────┘
                 │ Form Submit
                 ↓
┌─────────────────────────────────────────────────────────┐
│ Vite Dev Server: localhost:8080                         │
│ (Frontend + Proxy)                                      │
│                                                          │
│ Proxy Rule: /api/* → http://localhost:3001              │
└────────────────┬────────────────────────────────────────┘
                 │ /api/send-email
                 ↓
┌─────────────────────────────────────────────────────────┐
│ Express API Server: localhost:3001                      │
│ (API Routes)                                            │
│                                                          │
│ POST /api/send-email                                    │
│   ↓                                                      │
│ Nodemailer with Gmail SMTP                             │
│   ↓                                                      │
│ Email sent to: ravishankarmitit@gmail.com              │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Alternative Methods

### Run Servers Separately

If `npm run dev:full` doesn't work:

**Terminal 1:**
```bash
npm run dev:server
```
Waits for Vite to be ready...

**Terminal 2:**
```bash
npm run dev
```

### Manual API Testing (cURL)

Test if API server works:
```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Hello",
    "message": "Test message"
  }'
```

Should respond:
```json
{"success":true,"message":"Email sent successfully"}
```

---

## ⚠️ Troubleshooting

### "Cannot find module 'express'"
```bash
npm install express --legacy-peer-deps
```

### "Cannot find module 'cors'"
```bash
npm install cors --legacy-peer-deps
```

### "Cannot find module 'nodemailer'"
```bash
npm install nodemailer --legacy-peer-deps
```

### ".env.local not loaded"
1. Create `.env.local` in project root (same level as package.json)
2. Add credentials
3. Restart dev server

### "ECONNREFUSED 127.0.0.1:3001"
- Dev API server not running
- Run: `npm run dev:full`

### "GMAIL_EMAIL not set"
- Check `.env.local` file exists
- Check credentials format:
  ```
  GMAIL_EMAIL=ravishankarmitit@gmail.com
  GMAIL_APP_PASSWORD=abcdefghijklmnop
  ```

### Still getting 404?
1. Make sure dev-server.js is running (check port 3001)
2. Make sure Vite is on port 8080
3. Check Vite console for proxy errors
4. Try: `curl http://localhost:3001/api/health`

### Email not arriving
1. Check spam folder
2. Verify App Password (not regular password)
3. Ensure 2FA is enabled on Gmail
4. Wait 5-10 seconds (Gmail can be slow)
5. Try different sender email

---

## ✅ Verification Checklist

Before considering setup complete:

- [ ] `.env.local` file created
- [ ] `.env.local` has GMAIL_EMAIL
- [ ] `.env.local` has GMAIL_APP_PASSWORD
- [ ] Both servers start without errors: `npm run dev:full`
- [ ] Vite shows: `Local: http://localhost:8080`
- [ ] Express shows: `🚀 Dev API server running on http://localhost:3001`
- [ ] Contact form submits without 404 error
- [ ] Toast shows "Message sent!"
- [ ] Email received at ravishankarmitit@gmail.com

---

## 🎯 Production Deployment

Once local testing works:

### Vercel Setup
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables:
   - GMAIL_EMAIL: `ravishankarmitit@gmail.com`
   - GMAIL_APP_PASSWORD: `your_16_char_password`
4. Deploy!

Vercel will automatically use `api/send-email.ts` (serverless function).

---

## 📞 Summary

**Local Development:**
- Run: `npm run dev:full`
- API on: http://localhost:3001
- Frontend on: http://localhost:8080

**Production:**
- No dev-server.js needed
- Vercel uses: `api/send-email.ts`
- Environment variables in Vercel dashboard

**Status:** Ready to test! ✅
