# Local Development Setup - Email API

## Problem & Solution

During local development with Vite, API routes aren't available. Here's the solution:

### Option 1: Run Both Servers (Recommended for Testing)

Run the development server with API proxy:

```bash
npm run dev:full
```

This starts:
- **Vite frontend** on http://localhost:8080
- **API server** on http://localhost:3001
- **Proxy** routes `/api/*` from 8080 → 3001

✅ **This is the easiest way to test email locally!**

### Option 2: Run Servers Separately

**Terminal 1 - API Server:**
```bash
npm run dev:server
```
Runs on http://localhost:3001

**Terminal 2 - Vite Frontend:**
```bash
npm run dev
```
Runs on http://localhost:8080

Then configure Vite proxy (already done in `vite.config.ts`).

---

## Setup Checklist

### 1. Create `.env.local`

In project root, create `.env.local`:

```
GMAIL_EMAIL=ravishankarmitit@gmail.com
GMAIL_APP_PASSWORD=your_16_char_app_password_no_spaces
```

**Important:**
- Replace with your actual Gmail App Password
- Remove spaces from the password
- Keep this file LOCAL (never commit to git)

### 2. Install Dependencies

Already done! But if needed:
```bash
npm install
npm install nodemailer cors concurrently --legacy-peer-deps
```

### 3. Start Development

```bash
npm run dev:full
```

Wait for both servers to start:
```
🚀 Vite running at http://localhost:8080
🚀 Dev API server running on http://localhost:3001
```

---

## Testing Email Locally

1. Open http://localhost:8080 in browser
2. Scroll to "Get In Touch" / Contact section
3. Fill in all fields:
   - Name: `John Doe`
   - Email: `test@example.com`
   - Subject: `Test Portfolio`
   - Message: `This is a test message`
4. Click "Send Message"
5. Watch for success toast notification
6. Check your email inbox at `ravishankarmitit@gmail.com`

### Expected Behavior

**Success:**
- Toast: "Message sent! Thanks for reaching out."
- Email received within seconds
- Terminal shows: `✅ Email sent from test@example.com: "Test Portfolio"`

**Errors:**
- Check `.env.local` file exists with correct credentials
- Check Gmail 2FA is enabled
- Check App Password (not regular password)
- Check both servers are running
- Check browser console for detailed errors

---

## How It Works

```
Browser (localhost:8080)
    ↓
Vite Dev Server (port 8080)
    ↓
Proxy routes /api/* → localhost:3001
    ↓
Express API Server (port 3001)
    ↓
Nodemailer + Gmail SMTP
    ↓
Email sent to ravishankarmitit@gmail.com
```

---

## Troubleshooting

### "POST http://localhost:8080/api/send-email 404"

**Solution:** Dev API server not running
```bash
# Make sure both servers are running:
npm run dev:full
```

### "Failed to execute 'json' on 'Response': Unexpected end of JSON input"

**Solution:** API server is returning empty response
- Check `.env.local` file exists
- Check Gmail credentials are correct
- Check terminal output for errors

### "Error: connect ECONNREFUSED 127.0.0.1:3001"

**Solution:** Express server not running
```bash
# Start the full dev setup:
npm run dev:full
```

### Email not arriving

**Solutions:**
1. Check spam/promotions folder
2. Verify App Password (not regular Gmail password)
3. Ensure 2FA is enabled on Gmail account
4. Check terminal for error messages
5. Try from a different email address

### "GMAIL_EMAIL not set"

**Solution:** `.env.local` file missing or not loaded
1. Create `.env.local` in project root
2. Add: `GMAIL_EMAIL=ravishankarmitit@gmail.com`
3. Add: `GMAIL_APP_PASSWORD=your_password`
4. Restart dev server

---

## File Structure

```
radiant-portfolio/
├── .env.local                          ← Create this with credentials
├── dev-server.js                       ← Express API server
├── vite.config.ts                      ← Has proxy config
├── package.json                        ← Has dev scripts
├── api/
│   └── send-email.ts                   ← Vercel serverless (production)
└── src/
    └── components/sections/
        └── Contact.tsx                 ← Form component
```

---

## Production Deployment

Once you verify email works locally:

1. Push code to GitHub
2. Deploy to Vercel
3. Add env variables in Vercel dashboard:
   - `GMAIL_EMAIL` = `ravishankarmitit@gmail.com`
   - `GMAIL_APP_PASSWORD` = `your_16_char_password`
4. Vercel will use `api/send-email.ts` automatically
5. No need for `dev-server.js` in production

---

## Next Steps

1. ✅ `.env.local` created with Gmail credentials
2. ✅ Run `npm run dev:full`
3. ✅ Test contact form
4. ✅ Verify email received
5. ✅ Deploy to Vercel when ready

**Status:** Ready to test! Just create `.env.local` and run `npm run dev:full`
