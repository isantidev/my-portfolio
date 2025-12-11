# 🚀 Personal Portfolio - isanti.dev

[![Live Site](https://img.shields.io/badge/Live-isanti.dev-blue?style=for-the-badge)](https://www.isanti.dev)
[![Lighthouse Score](https://img.shields.io/badge/Performance-100-orange?style=for-the-badge&logo=lighthouse)](https://www.isanti.dev)

A modern, bilingual (ES/EN) portfolio website built with React to showcase frontend development skills and learn industry-standard patterns.

## ✨ Features

-   🌍 **Internationalization**: Full Spanish/English support with Context API
-   🎨 **Theme Switching**: Dark/Light mode with persistent preferences
-   📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
-   ⚡ **Performance Optimized**: Lighthouse scores - Performance: 99, Accessibility: 100, Best Practices: 100, SEO: 100
-   📬 **Contact Form**: Serverless email handling with Vercel Edge Functions
-   ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## 🎓 What I Learned

### React & State Management

-   Component composition and reusable UI patterns (Atomic Design principles)
-   Context API for global state (Theme + Language)
-   Custom hooks for business logic separation (`useTheme`)
-   Props drilling solutions with Context providers

### Performance Optimization

-   Image optimization (WebP format, responsive images)
-   Code splitting and lazy loading
-   Lighthouse-driven improvements
-   Vite's build optimizations
-   Core Web Vitals: FCP 0.7s, LCP 0.8s, TBT 0ms

### Backend & Deployment

-   Vercel Edge Functions for serverless architecture
-   API route handling (`/api/contact-send.js`)
-   Environment variable management
-   CI/CD with GitHub integration

### Best Practices

-   Semantic HTML5 structure
-   Accessibility standards (WCAG) - 100/100 score
-   ESLint + Prettier configuration
-   Git workflow with Dependabot

## 🛠️ Tech Stack

**Frontend**

-   React
-   Vite (build tool)
-   Tailwind CSS
-   JavaScript

**Backend**

-   Vercel Edge Functions
-   Resend API (email service)

**DevOps**

-   Vercel (hosting)
-   GitHub Actions
-   Dependabot (dependency management)

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Card, Pill, Inputs)
│   ├── layout/          # Page sections (Hero, About, Projects, etc.)
│   └── hooks/           # Custom React hooks
├── context/             # Global state (Theme, Language)
├── locales/             # i18n translations (en.js, es.js)
├── assets/              # Images and icons
├── styles/              # Global CSS and keyframes
└── App.jsx              # Main app component

api/                     # Serverless functions
public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

-   Node.js ^22
-   pnpm ^10

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/isantidev/my-portfolio.git
   cd portfolio
```

2. **Install dependencies**

```bash
   pnpm install
```

3. **Set up environment variables**

    Create a `.env` file in the root directory:

```env
   VITE_RESEND_API_KEY=your_resend_api_key
   VITE_CONTACT_EMAIL=your@email.com
```

4. **Run development server**

```bash
   pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
pnpm run build
pnpm run preview  # Preview production build locally
```

## 📧 Contact Form Setup

The contact form uses Vercel Edge Functions and Resend API:

1. Create a [Resend](https://resend.com) account
2. Get your API key
3. Add environment variables in Vercel dashboard:
    - `VITE_RESEND_API_KEY`
    - `VITE_CONTACT_EMAIL`
4. Deploy to Vercel

## 📊 Lighthouse Performance

| Metric             | Score   |
| ------------------ | ------- |
| **Performance**    | 99/100  |
| **Accessibility**  | 100/100 |
| **Best Practices** | 100/100 |
| **SEO**            | 100/100 |

**Core Web Vitals:**

-   First Contentful Paint: 0.7s
-   Largest Contentful Paint: 0.8s
-   Total Blocking Time: 0ms
-   Cumulative Layout Shift: 0.019
-   Speed Index: 1.1s

## 📝 License

MIT License - feel free to use this project as inspiration for your own portfolio!

## 🔗 Connect

-   **Portfolio**: [isanti.dev](https://www.isanti.dev)
-   **LinkedIn**: [isantidev](https://www.linkedin.com/in/isantidev)
-   **GitHub**: [@isantidev](https://www.github.com/isantidev)

---

**Note**: This is a learning project built to explore modern React patterns and best practices. Constructive feedback is appreciated! 🙌
