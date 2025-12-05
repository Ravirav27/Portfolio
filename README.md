# 🌟 Radiant Portfolio

A modern, responsive, and feature-rich portfolio website built with cutting-edge web technologies. Showcasing projects, skills, and professional achievements with stunning visual effects and smooth animations.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRavi2ie%2Fradiant-portfolio)

## ✨ Features

- **🎨 Modern Design** - Beautiful gradient UI with glassmorphism effects
- **📱 Fully Responsive** - Optimized for all device sizes (mobile, tablet, desktop)
- **⚡ High Performance** - Built with Vite for blazing-fast load times
- **🎭 Smooth Animations** - Framer Motion and GSAP animations
- **👁️ View Counter** - Tracks portfolio visits using hits.sh service
- **📧 Contact Form** - Integrated email functionality with Nodemailer
- **🌙 Dark Mode** - Built-in theme support (light/dark)
- **♿ Accessibility** - WCAG compliant with semantic HTML
- **🔍 SEO Optimized** - Meta tags, sitemap, and robots.txt included
- **🎯 Project Showcase** - Responsive carousel displaying featured projects

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with TypeScript
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Professional animation platform
- **Lucide React** - Icon library
- **Devicon** - Technology icons

### Backend
- **Express.js** - Node.js web framework
- **Nodemailer** - Email sending library
- **CORS** - Cross-Origin Resource Sharing

### External Services
- **hits.sh** - Page view counter
- **allorigins.win / corsproxy.io** - CORS proxy services
- **Gmail API** - Email service

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Ravi2ie/radiant-portfolio.git
cd radiant-portfolio

# Install dependencies
npm install --legacy-peer-deps

# Create environment file
cp .env.example .env.local

# Add your credentials to .env.local
# GMAIL_EMAIL=your-email@gmail.com
# GMAIL_APP_PASSWORD=your_16_char_app_password
```

### Development

```bash
# Start Vite dev server (Terminal 1)
npm run dev

# In another terminal, start the API server (Terminal 2)
node dev-server.js

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
radiant-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/                 # UI components (cards, buttons, etc.)
│   │   ├── sections/           # Page sections (Hero, Projects, etc.)
│   │   ├── effects/            # Visual effects (animations, gradients)
│   │   └── Navigation.tsx
│   ├── hooks/
│   │   └── useViewCounter.ts   # View counter hook
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── pages/
│   │   ├── Index.tsx           # Home page
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── api/
│   ├── get-views.ts            # View counter API
│   └── send-email.ts           # Email API
├── public/                      # Static assets
├── dev-server.js               # Development API server
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies & scripts
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Gmail Configuration (for contact form)
GMAIL_EMAIL=your-email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

### Getting Gmail App Password
1. Enable 2-Factor Authentication on your Google Account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Find "App passwords" and generate a new one for "Mail" on "Windows Computer"
4. Use this 16-character password in `GMAIL_APP_PASSWORD`

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project" → Import your repository
4. Set environment variables in Vercel settings:
   - `GMAIL_EMAIL`
   - `GMAIL_APP_PASSWORD`
5. Deploy!

### Deploy to Other Platforms

The project can be deployed to:
- Netlify
- AWS Amplify
- GitHub Pages
- Railway
- Render

## 📊 Features in Detail

### View Counter
- Tracks unique page views using hits.sh
- Displays in the Hero section
- Uses CORS proxies for reliability
- Graceful error handling

### Contact Form
- Validates email input
- Sends emails via Gmail
- Responsive design
- Success/error feedback

### Project Carousel
- Responsive display (1 card mobile, 2 tablet, 3 desktop)
- Smooth animations and transitions
- Shows complete project descriptions
- All technologies listed
- Direct GitHub links

### Responsive Design
- Mobile-first approach
- Breakpoints: xs (320px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- Safe area support for notched devices
- Fluid typography with clamp()

## 🐛 Troubleshooting

### 500 Error on View Counter
- Check internet connection
- Ensure dev-server.js is running
- CORS proxies might be down - auto-fallback is in place

### Email Not Sending
- Verify `GMAIL_EMAIL` and `GMAIL_APP_PASSWORD` in .env.local
- Enable 2FA on Gmail account
- Generate new app password if expired
- Check spam folder

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install --legacy-peer-deps`
- Check Node.js version (16+)
- Ensure all environment variables are set

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **GitHub**: [@Ravi2ie](https://github.com/Ravi2ie)
- **Portfolio**: [Your Portfolio URL]
- **Email**: [Your Email]

## 🙏 Acknowledgments

- Lovable.dev for initial scaffolding
- Vercel for hosting platform
- Framer Motion for animations
- Tailwind CSS for styling
- All open-source contributors

---

Made with ❤️ by Ravishankar
